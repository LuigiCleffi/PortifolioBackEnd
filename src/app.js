import express from 'express'
import bodyParser from 'body-parser'
import db from "./config/dbconnect.js";
import routes from "./routes/index.js"


db.on("erro", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
})

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routes(app)

export default app