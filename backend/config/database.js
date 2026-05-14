import { Sequelize } from "sequelize";

// Sequelize Instance (rename to sequelize)
const sequelize = new Sequelize(
  "tutornest",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");

    await sequelize.sync({
      alter: true,
    });

    console.log("✅ Database synced successfully");

    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    return false;
  }
};

export { sequelize, connectDB };