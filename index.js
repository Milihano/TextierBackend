require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.APP_PORT
const router = require('./routes/indexroute')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const displayroute = require('express-routemap')
const { sequelize } = require('./models')



app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
  sequelize.authenticate()
    .then(sucessData => {
      console.log('Connection has been established successfully.On port:',process.env.APP_PORT);
    })
    .catch(error => {
      console.error('Unable to connect to the database:', error);
    })
})




//swagger
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Atiat API",
    version: "1.0.0",
    description: "A Platform For Texting",
    license: {
      name: "Textier",
      url: "",
    },
    contact: {
      name: "",
      url: "",
    },
  },
  servers: [
    {
      url: `http://localhost:${port}/api/v1`,
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [`./routes/*.js`],
};
const swaggerSpec =swaggerJsdoc(options)


app.use("/swaggerUi-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

displayroute(app)