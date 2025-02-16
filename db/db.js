import postgres from "postgres";
//import mysql from "mysql2"

export const connection = postgres({ //mysql.createConnection
  host: "localhost",
  user: "cc",
  password: "cc155",
  database: "codecrafters_db"
})

//export default connection.promises; //-> nur mySQL
export default connection;
