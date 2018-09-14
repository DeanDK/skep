const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: "SKEP123SECRETPASSWORD",
    DATABASE: "mongodb://localhost:27017/skep"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
