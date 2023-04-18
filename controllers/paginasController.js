import {Viaje} from '../models/Viaje.js';


const paginaInicio = async (req,res)=> { 
    

    //clnsultr 3 viajes del modelo viaje
    try{
        const viajes = await Viaje.findAll( {limit: 3} ) ;
        res.render ('inicio' , {
            pagina:'Inicio',
            clase: 'home',
            viajes
        } );

    }catch (error){
        console.log (error)
    }


  

}


const paginaNosotros =  (req,res)=> { 
    
    res.render ('nosotros' ,{
        pagina:'Nosotros'
    } );

}


const paginaViajes =  async(req,res)=> { 
    
    //Consultar Base de Datos 
     const viajes = await Viaje.findAll();
    // console.log (viajes);



    //muestra Pagina de Viajes 
    res.render ('viajes' ,{
        pagina:'Proximos viajes' ,
        viajes
    } );

}
  

const paginaTestimoniales =   (req,res)=> { 
    
    try{
        //const testimoniales = await  Testimonial.findAll();
        res.render ('testimoniales' ,{
            pagina:'Testimoniales' 
          //  testimoniales
        } );

    }catch (error){
        console.log(error);

    }



  

}


//Mostrar Viaje por slug
const paginaDetalleViaje = async (req,res)=> { 
    
    const {slug} = req.params;
    try{

        const viaje = await Viaje.findOne ({ where : { slug: slug }   }) ;  

        res.render ('viaje', {
            pagina: 'Informacion Viaje',
            viaje

        } )

    }catch (error){
        console.log(error);
    }
}

export {
        paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje

}
