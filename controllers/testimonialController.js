 
const guardarTestimonial =   (req,res) => {

//console.log (req.body);
     //Validar 
    const {nombre,correo,mensaje} = req.body;
    const  errores = []; 

    if (nombre.trim()==='') {
        errores.push( {mensaje:'nombre vacio' });
    }

    if (correo.trim()==='') {
        errores.push( {mensaje:'correo vacio' });
    }
 
    /*
    if (mensaje ==='') {
        errores.push( {mensaje:'mensaje vacio' });
    } */
/*

    if (errores.length >0 ) { // si al menos hay un error muestro
            //mostrar vista con errores
            res.render('testimoniales', {
                pagina: 'Testimoniales',
                errores,
                nombre,
                correo,
                mensaje
            })
         } else {
            //almacenar en la BT
 
            try {
                    await Testimonial.create({
                        id,
                        nombre,
                        correo,
                        mensaje

                    })
            }catch (error){
                console.log (error);

            } 
*/





        } // mustro la vista de testimoniuales con el error recargo la pagina

  




export {guardarTestimonial}