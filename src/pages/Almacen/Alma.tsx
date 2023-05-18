import React, { useState, useEffect } from "react";
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import TableAlma from './TableAlma';
import  { useDispatch,useSelector } from 'react-redux'
import { addAlmacensql } from '../../actions/almacenActions'


const Alma = () => {
  const dispatch = useDispatch()
  const cate = useSelector (store => store.almacenfile.almacenfiles)  
  const nlen=cate.length;
  let ndata=0;

   if (nlen>0){
     // alert(JSON.stringify(cate[0].codigo))
      ndata=parseInt(cate[0].codigo)+1
    
    }  
    const [datos,setDatos]=useState({
     codigo:'',
     descripcion:'',
     direccion:'',
     ciudad:'',
     provincia:'',
     distrito:'',
     tel:'',
     empresa:'1',
  })        

 const onSubmit = (event) => { 
   event.preventDefault();   
   console.log(datos);
   dispatch(addAlmacensql(datos))
   event.target.reset();
   //  dispatch(addCategoriasql(data))
   //  e.target.reset();

 } 

 const   handleInputChange=(event)=>{
   setDatos({
     ...datos,
     [event.target.name]:event.target.value
   })


 }   

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Almacenes" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                 Registrar Almacenes
              </h3>
            </div>
            <form onSubmit={onSubmit}>
              <div className="p-6.5">                               
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Codigo
                  </label>
                  <input
                    type="text"
                    placeholder="Codigo Solo Numeros Consecutivos"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="codigo"
                    name="codigo"
                    autoFocus
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Descripcion
                  </label>
                  <input
                    type="text"
                    placeholder="Descripcion"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="descripcion"                                        
                    name="descripcion"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Direccion
                  </label>
                  <input
                    type="text"
                    placeholder="Direccion"
                    id="direccion"                                        
                    name="direccion"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    placeholder="Ciudad"
                    id="ciudad"                                        
                    name="ciudad"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Provincia
                  </label>
                  <input
                    type="text"
                    placeholder="Provincia"
                    id="provincia"                                        
                    name="provincia"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Distrito
                  </label>
                  <input
                    type="text"
                    placeholder="Distrito"
                    id="distrito"                                      
                    name="distrito"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Telefonos
                  </label>
                  <input
                    type="text"
                    placeholder="Telefonos"
                    id="tel"                                        
                    name="tel"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={handleInputChange}
                    required
                  />
                </div>




                
                
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <TableAlma />
        </div>

        
      </div>
    </DefaultLayout>
  );
};

export default Alma;
