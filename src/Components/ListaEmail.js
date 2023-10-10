import React, { Image } from "react";
import compraweb from "./Paraquien/compraweb.svg"
import { useForm, Controller } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import imageUrl from "./background/leaves.webp"
const countries = [
  'Seleccionar país',
  'Argentina',
  'Brasil',
  'Chile',
  'Colombia',
  'México',
  'Perú',
  'Francia',
  'España',
  'Italia'
  // Agrega más países aquí
];


function ListaEmail() {

    const { register, handleSubmit, formState: { errors }, control, reset } = useForm();
  const recaptchaRef = React.createRef();

  const onSubmit = (data) => {
    // Aquí puedes enviar los datos a tu servidor o hacer lo que necesites con ellos.
    console.log(data);

    // Resetea el formulario y el CAPTCHA después de enviar
    reset();
    recaptchaRef.current.reset();
  };
  
  return ( <div className=" flex flex-col w-full items-center  md:flex-col">
 
  <h2 className="mb-2 flex flex-col center bg-teal-100 justify-center w-full text-3xl  text-teal-400 text-bold dark:text-white h-36 ">
Queres estar al tanto de las ofertas?   </h2>
   
<div className="flex flex-raw bg-repeat	justify-center"> 

<div className="flex flex-col flex-wrap items-center justify-center md:flex-col p-9 w-full">
      <div className="flex center">
        <img className="max-w-xs mb-8" src={compraweb} alt="personas" />
      </div>
    
      <div className="flex flex-col max-w-lg flex-0 center text-xl text-gray-500 justify-center">
         <p>Deja tu contacto, y vas a recibir un email para confirmar tu inscripcion.</p>
         <p>No recibiras mas de un email por quincena, y solo de lunes a viernes!</p>
      </div>
    </div>
<div/>



    <div className="  min-h-screen flex flex-col justify-center items-center mb-5 rounded h-72 ">
      <h1 className="text-teal-600 text-2xl mb-4">Formulario de Registro</h1>
      <form className="bg-white p-4 rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className="form-input mt-1 block w-full" />
          {errors.email && <p className="text-red-500">El email es requerido y debe ser válido.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre:</label>
          <input type="text" {...register('nombre', { required: true })} className="form-input mt-1 block w-full" />
          {errors.nombre && <p className="text-red-500">El nombre es requerido.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellido:</label>
          <input type="text" {...register('apellido', { required: true })} className="form-input mt-1 block w-full" />
          {errors.apellido && <p className="text-red-500">El apellido es requerido.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Edad:</label>
          <input type="number" {...register('edad', { required: true, min: 18 })}
            className="form-input mt-1 block w-full" />
          {errors.edad && <p className="text-red-500">La edad es requerida y debe ser mayor de 18 años.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">País:</label>
          <Controller
            name="pais"
            control={control}
            defaultValue={countries[0]}
            render={({ field }) => (
              <select {...field} className="form-select mt-1 block w-full">
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            )}
          />
        </div>
    
        <div className="mb-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="TU_CLAVE_RECAPTCHA"
            className="mx-auto"
          />
        </div>
        <button type="submit" className="bg-teal-500 text-white font-bold py-2 px-4 rounded-full">
          Enviar
        </button>
      </form>
    </div>
</div>
   
  
</div>



  );
}

export default ListaEmail;