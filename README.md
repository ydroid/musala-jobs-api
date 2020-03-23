# Musala Jobs API

Musala Jobs is a Platform for project management. The main mission of this platform is to manage projects in a clean and simple way. Just by entering a name and description You can manage your projects, from the "dashboard/profile" screen only with a name, description and type of project you will be ready to publish your project.

As a user you can “Ask” a project and you can manage the projects you are working on in the "Worked On" tab on the same "dashboard/profile" screen and update the completed tasks in it.
The system will receive new customers with a landing page with our plans and a project finder that will list the projects to users, to access the most detailed information of the projects must be registered in our system.

Only projects that don't have any users working will be available.
To speed up adoption and simplify user registration on the system, we've added sign-up/login functionality with a Google account.

At startup the system will have an administrator user who can manage the users of the platform, the roles that users will have, the administrator will also be able to manage all the projects in the system.

The Administrator Role will have access to the entire system, while users will only have access to project information. Unauthenticated users on the system will only be able to list projects from the landing page, only a project owner will be able to handle project information, while a user working on a project will only have access to modify the tasks Completed.

Each user will have a profile where their projects and projects will be listed on what they are working on, as well as the ability to edit their data.

# Getting started

The project is generated by [LoopBack](http://loopback.io).

```
$ git clone https://github.com/ydroid/musala-jobs-api
$ cd musala-jobs-api
$ npm install
$ node .
```

## Enviroment Vars

```
MONGODBHOST           Host for MongDB database.
MONGODBURL            Conection string to mongoDB database.
MONGODBDATABASE       Database name.
MONGODBPASSWORD       MongoDB User password.
MONGODBUSER           MongoDB username.
FIREBASECONFIG        Configuration of Firebase.
```

### Firebase example

[More info](https://firebase.google.com/docs/web/setup?hl=es-419)

```
{
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};
```

---
