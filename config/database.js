// const parse = require("pg-connection-string").parse;

// const { host, port, database, user, password } = parse(
//   "postgresql://doadmin:AVNS_nDDvTmpwy0T4tPy5J8k@dbaas-db-2763110-do-user-13960114-0.b.db.ondigitalocean.com:25060/elingo?sslmode=require"
// );

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: false,
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    },
    debug: false,
  },
});
