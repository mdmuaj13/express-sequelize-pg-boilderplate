const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
require('dotenv').config();
const { Sequelize } = require('sequelize');

const PORT = process.env.PORT || 4000;

const routeV1 = require('./routes/v1/index.route');

const sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize
    .authenticate()
    .then(() => {
        console.log(
            "Postgres DB connection has been established successfully."
        );
    })
    .catch((error) =>
        console.error("Unable to connect to the database:", error)
    );


const app = express();
app.use(express.json());

app.use('/api/v1', routeV1);



app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})