import express from "express";
import { auth }from './routes/auth';
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/config";


// Variables de Entorno
dotenv.config();
const ENV = process.env;

// Crear Servidor Express
const app = express();

// Conexion a la Base de Datos
dbConnection();

// Directorio Publico
app.use( express.static('public') )

//CORS
app.use( cors() );


// Lectura y paseo del body
app.use( express.json() );

// Rutas
app.use('/api/v1', auth );

//Manejar demas rutas
// app.get('*', (req, res) => {
//   res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
// });


app.listen( ENV.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${ENV.PORT}`);
});