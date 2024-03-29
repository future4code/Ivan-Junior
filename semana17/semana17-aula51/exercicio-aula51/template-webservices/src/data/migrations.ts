import { connection } from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS aula51_users (
         id VARCHAR(255) PRIMARY KEY,
         cep VARCHAR(255) UNIQUE NOT NULL,
         logradouro VARCHAR(255) NOT NULL,
         number VARCHAR(10) NOT NULL,
         complement VARCHAR(255) NOT NULL,
         district VARCHAR(255) NOT NULL,
         city VARCHAR(255) NOT NULL,
         state VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula51_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)