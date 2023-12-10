const { Sequelize } =require("sequelize") ;
const dotenv =require("dotenv");

dotenv.config();

const createSequelizeInstance = () => {
  if (process.env.JAWSDB_URL) {
    return new Sequelize(process.env.JAWSDB_URL);
  } else {
    return new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );
  }
}

const sequelize = createSequelizeInstance();

module.exports = sequelize;