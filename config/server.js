module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: parseInt(env("PORT", 1337)),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
