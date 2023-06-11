const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  "postgresql://doadmin:AVNS_nDDvTmpwy0T4tPy5J8k@dbaas-db-2763110-do-user-13960114-0.b.db.ondigitalocean.com:25060/elingo?sslmode=require"
);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
