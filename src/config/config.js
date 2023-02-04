const config = {
  development: {
    port: 5000,
    DB_port: "mongodb://127.0.0.1:27017/cubicle",
  },
  production: {
    port: 3000,
    DB_port: "mongodb://127.0.0.1:27017/cubicle",
  },
};

module.exports = config[process.env.NODE_ENV || "development"];
