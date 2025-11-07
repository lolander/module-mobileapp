module.exports = {
  apps : [
      {
        name: "mobile-terminal-server",
        script: "./index.js",
        instances: 1,
        exec_mode: "fork",
        env: {
          NODE_ENV: "development",
          PORT: 3002,
          JWT_SECRET: "your_jwt_secret", // Replace with a strong secret in production
        }
      }
  ]
};