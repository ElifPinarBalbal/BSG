const app = require("./src/app");
const sequelize = require("./src/config/database");


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

sequelize.sync({ force: false }).then(() => {
    console.log("✅ Database Synced");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  });