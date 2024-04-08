import express from "express";
import morgan from "morgan";

import clientsRoutes from "./routes/clients.routes";

const app = express();

//SETTINGS
app.set('port', 4000);

//MIDDLEWARES
app.use(morgan('dev')); //esto se usa para poder ver los resultados en consola.

//ROUTES

app.use("/api/clients",clientsRoutes);

export default app;
