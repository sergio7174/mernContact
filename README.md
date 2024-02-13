<h1 align ="center" > 🏆 MernContact  </h1>
<h3  align ="center"> 
Fullstack open source Contact application (Add/Edit/Erase My Contacts)made with MongoDB,</h3> 
<h3 align ="center">Express, React & Nodejs (MERN) </h3>
<br>
<br>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
      - [API](#api)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)
  * <br>
  * ## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)
- NODE VERSION: 16.2.1 - 19.2.1

In the first terminal

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm run  start (to start the client) or npm start
```

In the second terminal

- cd server and Set environment variables in .env
- Create your mongoDB connection url, which you'll use as your MONGO_URL
- Supply the following credentials

```
#  --- .env  ---

NODE_ENV: 'development'
PORT: 3000
MONGO_URI: 'mongodb://0.0.0.0:27017/contact01'(YOUR MONGO DATABASE)
JWT_SECRET: 'Sergio'
STRIPE_SECRET_KEY:'Moncada'
```

```
# --- Terminal ---

$ npm install (to install server-side dependencies)
$ npm start (to start the server) or nodemon index
```

![Status project](https://img.shields.io/badge/STATUS-Finished-GREEN?style=for-the-badge)

## ✔️ Technologies used:
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Static Badge](https://img.shields.io/badge/axios-black?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Style%20Components-lightblue?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/mongoose-purple?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Express-navy?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/multer-teal?style=for-the-badge)
![Cors](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Static Badge](https://img.shields.io/badge/dotenv-black?style=for-the-badge)


##  Screenshots:
<br>
<img src="./PROJECTIMAGES/image01.jpg" alt="project screenshot01" />
<img src="./PROJECTIMAGES/image02.jpg" alt="project screenshot02" />
<img src="./PROJECTIMAGES/image03.jpg" alt="project screenshot03" />
<img src="./PROJECTIMAGES/image04.jpg" alt="project screenshot04" />
<br>

##  Key Features:

- Add, edit, delete Contacs
- Search Live
- Responsive Design
<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Style Components] - For User Interface
- [React Toastify](https://www.npmjs.com/package/react-toastify) - To display interactive and responsive notifications (toasts) in web applications

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Middleware module used in Node.js web applications to manage cookies
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [express-validator](https://www.npmjs.com/package/express-validator) - Used in Node.js applications with the Express framework to validate data submitted by users (user input)
- [nodemon](https://nodemon.io/) - Development utility for Node.js applications. Node.js is a runtime platform that allows you to run JavaScript on the server side.t
- [Multer] - Handle Images

####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.

## Author
- Portfolio: 
- Github: 
- Sponsor: 
- Linkedin:https://www.linkedin.com/in/sergio-moncada-72589883/
- Email: [sergiogmoncada@yahoo.com](mailto:sergiogmoncada@yahoo.com)

