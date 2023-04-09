import express from "express";
import { fileURLToPath } from "url";//para poder usar __dirname en ES6
import mongoose from "mongoose";
import path  from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const app = express();
// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname,'..client/build')));



app.get("/api",(req,res)=>{
    res.json({msg:"Hola mundo desde el Servidor"});
});

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client/build','index.html'));
});


app.listen(PORT,()=>{
    console.log(`conectado ${PORT}`);
});