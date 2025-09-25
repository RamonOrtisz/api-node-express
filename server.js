/* criar 3 rotas

publicas
  Cadastrar, Login, 
  
privadas
  Listar usuarios

*/

import express from "express";
import publicRouter from "./routes/public.js";

const app = express();

app.use("/", publicRouter);

app.listen(3000, () => console.log("Servidor Rodando"));
