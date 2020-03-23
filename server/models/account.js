"use strict";
const ObjectId = require("mongodb").ObjectId;
const firebase = require("firebase/app");
require("firebase/auth");

const generator = require("generate-password");
const firebaseConfig = JSON.parse(process.env.FIREBASECONFIG);
firebase.initializeApp(firebaseConfig);

module.exports = function(Account) {
  const app = require("../../server/server");

  Account.observe("after save", async function(ctx, user) {
    if (ctx.isNewInstance) {
      const Role = app.models.Role;
      const RoleMapping = app.models.RoleMapping;
      const userRole = await Role.findOne({ where: { name: "User" } });
      if (userRole) {
        await userRole.principals.create({
          principalType: RoleMapping.USER,
          principalId: new ObjectId(ctx.instance.id),
          roleId: new ObjectId(userRole.id)
        });
      }
    }
  });
  Account.observe("after delete", async function(ctx) {
    const Project = app.models.Project;
    await Project.updateAll({ workedId: ctx.where.id }, { workedId: null });
  });

  Account.loginSocial = async function(data) {
    let credential;
    switch (data.provider) {
      case "google":
        credential = firebase.auth.GoogleAuthProvider.credential(
          data.accessToken
        );
    }
    const result = await firebase.auth().signInWithCredential(credential);
    const newUser = result.user;
    const userNameData = newUser.displayName.split(" ");
    let user = await Account.findOne({
      where: {
        email: newUser.email
      }
    });
    if (!user) {
      user = await Account.create({
        email: newUser.email,
        firstName: userNameData[0],
        lastName: userNameData[1],
        socialAccount: true,
        avatarUrl: newUser.photoURL,
        password: generator.generate({
          length: 10,
          numbers: true
        })
      });
    }
    const token = await Account.app.models.AccessToken.create({
      userId: user.id
    });
    return {
      id: token.id,
      user: user
    };
  };
};
