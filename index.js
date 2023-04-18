import  express  from 'express';
import  router from './routes/index.js';
import  db from './config/db.js';



// Crear la app ini 53 393
const app = express();

//Conectar a la Base de Datos 
db.authenticate()
.then ( () => console.log('Base de datos conectada'))
.catch ( error => console.log('error'));


const port = process.env.PORT  || 4000;

//Habilitar Pug 
app.set('view engine', 'pug')

//obtener año actal
app.use( (req,res,next)=> {

  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio="Agencia de Viajes";
    
    return next();
});

//Agregar Body Parse para leer los datos del formulario
app.use (express.urlencoded({ extended: true  }));




//Definir Carpeta Publica
app.use(express.static('public'));





app.listen(port, ()=>{


//AGREGAR ROUTER
app.use ('/',router);






//req lo que envias, res lo que te responde expres.
//http://localhost:4000/


console.log(`El servidor funcionando en el puerto: ${port} `)
} )


 