"use strict";

module.exports = async function(server) {
  const User = server.models.account;
  const Role = server.models.Role;
  const RoleMapping = server.models.RoleMapping;
  try {
    const adminUser = await User.findOne({
      where: {
        email: "admin@musalawork.com"
      }
    });
    //user admin
    if (!adminUser) {
      const admin = await User.create({
        email: "admin@musalawork.com",
        password: "MusalaSoft@test++--**",
        firstName: "Musala",
        lastName: "Admin"
      });
      const roles = await Role.create([
        {
          name: "Admin"
        },
        {
          name: "User"
        }
      ]);
      roles[0].principals.create({
        principalType: RoleMapping.USER,
        principalId: admin.id
      });

      //project types
      const ProjectType = server.models.projectType;
      const types = await ProjectType.find();
      if (types.length === 0) {
        await ProjectType.create([
          {
            name: "Android"
          },
          {
            name: "Web"
          },
          {
            name: "Desktop"
          },
          {
            name: "Net"
          },
          {
            name: "Cloud"
          },
          {
            name: "Firebase"
          }
        ]);
      }
      //projects
      const Project = server.models.project;
      const count = await Project.count();
      if (count === 0) {
        await Project.create([
          {
            title: "Script to Bulk Photoshop",
            description:
              "We have over 500 images of beds. We want to photoshop bedding onto the beds.Rather than do this manually we are looking for somebody to write a script that will automatically bulk photoshop / Render the bedding onto the beds.",
            price: 250,
            ownerId: admin.id,
            tasks: 40,
            completedTasks: 0,
            projectTypeId: types[1].id
          },
          {
            title: "Looking for React Dev",
            description:
              "I am looking for React developer who have experience in existing admin panel development. In the first, you should to implement to fix the dashboard charts and create push notification page. Please apply if you are right.",
            price: 250,
            ownerId: admin.id,
            tasks: 10,
            completedTasks: 0,
            projectTypeId: types[1].id
          },
          {
            title: "I want a android dev",
            description:
              "Just want someone to convert figma, psd to XML that is to be implemented to an already developed android and iOS app",
            price: 1250,
            ownerId: admin.id,
            tasks: 30,
            completedTasks: 0,
            projectTypeId: types[0].id
          },
          {
            title: "Windows Folder Selection App",
            description:
              "I need a windows app that can read a csv files of ticker codes and then allow me to browser to a windows folder and select all the folders containing the ticker codes found in the csv file.",
            price: 250,
            ownerId: admin.id,
            tasks: 40,
            completedTasks: 0,
            projectTypeId: types[2].id
          },
          {
            title: "Azure Notifciation Hub",
            description:
              "I require an implementation of iOS notifications from a node.js backend, using the Azure Notification Hub service.",
            price: 2250,
            ownerId: admin.id,
            tasks: 10,
            completedTasks: 0,
            projectTypeId: types[4].id
          },
          {
            title: "Need to dev a job in Laravel",
            description:
              "i need a complete development of Job portal like, Naukri in Laravel framework. and everything i need in it, design, development, sms, payment gateway etc...",
            price: 1000,
            ownerId: admin.id,
            tasks: 40,
            completedTasks: 0,
            projectTypeId: types[1].id
          }
        ]);
      }
    } else {
      return;
    }
  } catch (e) {
    throw e;
  }
};
