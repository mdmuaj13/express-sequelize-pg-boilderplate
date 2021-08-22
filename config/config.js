require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false       // for heroku
    //     }
    // },
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false       // for heroku
        }
    },
    dialectOptions: {
      bigNumberStrings: true,
    },
    // dialectOptions: {
    //   bigNumberStrings: true,
    //   //https://stackoverflow.com/questions/43948920/how-to-connect-via-ssl-to-sequelize-db
    //   //   ssl: {
    //   //     ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
    //   //   }
    // },
  },
};
