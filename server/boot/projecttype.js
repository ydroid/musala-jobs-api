"use strict";

module.exports = async function(server) {
  const projectType = server.models.projectType;
  const count = await projectType.count();
  if(count === 0) {
    await projectType.create([
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
        name: ".Net"
      },
      {
        name: "Cloud"
      },
      {
        name: "Firebase"
      }
    ]);
  }
}
