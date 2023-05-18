import React, { useEffect,useState } from 'react'
import  { useDispatch,useSelector } from 'react-redux'
import {
  getCurrentAlmacensql,deleteCurrentAlmacensql,updateCurrentAlmacensql  
} from "../../actions/almacenActions";

import ReactPaginate from 'react-paginate';
import Modal from 'react-modal';

//Modal.setAppElement('TableAlma'); // Reemplaza '#root' con el selector del elemento raíz de tu aplicación

const TableAlma = () => {
  const dispatch = useDispatch()

  useEffect(() => {               
    dispatch(getCurrentAlmacensql())    
   },[dispatch])

  const data = useSelector (store => store.almacenfile.almacenfiles)   
  console.log(data)
  const [search, setsearch] = useState("")
  const [currentPage, setcurrentPage] = useState(1)
  const [todosPerPage, settodosPerPage] = useState(5)
  const [descripcion, setDescripcion] = useState("")
  const [page, setPage] = React.useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

 const deleteModal = (data) => {
  let id=data.codigo
  dispatch(deleteCurrentAlmacensql(id)) 
 } 

  const openModal = (datos) => {
    console.log(datos)
    setModalIsOpen(true);
    toggleModal(datos)
  };

  const closeModal = () => {
    setModalIsOpen(false);    
  };

  const searchHandler = (event) => {
    const lolo = event.target.value.toUpperCase();
    setsearch(lolo)
    setDescripcion(lolo)
  }

  const handlePageClicked = data => {    
    let selected = data.selected;
    //  setselectedPage(selected)
    let sumapagina = Number(selected + 1)
    setcurrentPage(sumapagina)

  };

  const   handleInputChange=(event)=>{
    setDatos({
      ...datos,
      [event.target.name]:event.target.value
    })
 
 
  } 

  const toggleModal = (data) => {

    //console.log("mostramoselosdatos de edit ")
    console.log(data)
    setDatos({
      codigo:data.codigo,
      descripcion:data.descripcion,  
      direccion:data.direccion,       
      ciudad:data.ciudad,
      provincia:data.provincia,
      distrito:data.distrito,
      tel:data.tel,


    })                      
}  

const enviarDatos=(event) =>{
  event.preventDefault();     
  let id=datos.codigo       
   dispatch(updateCurrentAlmacensql(id,datos))
   setDatos({
    codigo:'',
    descripcion:'',       
    direccion:'',       
    ciudad:'',
    provincia:'',
    distrito:'',
    tel:'',
    
   })
   event.target.reset();
   setModalIsOpen(false);    
   
 }



  const especiales = (buscar,data) => {
    //alert(JSON.parse(data))
    //console.log("especiales"+buscar)
    let separador=" "; 
    let npalabras=buscar.split(separador);
    //console.log(npalabras)

    let tpalabras=npalabras.length; 
    //console.log(tpalabras)
    let i=0
    let filteredContacts=data;
    for (i=0;i<tpalabras;i++) {  
      let search1= npalabras[i].replace(/\s+/g,'')
      let patt=new RegExp(search1);
      filteredContacts = data.filter(
        (item) => {
          let busdes =item.descripcion.toUpperCase()+item.direccion.toUpperCase()+item.codigo+item.provincia.toUpperCase()+item.ciudad.toUpperCase()+item.distrito.toUpperCase()+item.tel;
          let res = patt.test(busdes)
          if (res)
          return true
          return false
        }
      )
      data=filteredContacts;
      //console.log(filteredContacts)             
     //console.log(patt)
                       
    }    
    return filteredContacts
      
  }

const indexOfLastTodo = currentPage * todosPerPage;
const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

const pageNumbers = [];
for (let i = 1; i <= Math.ceil(data.length / todosPerPage); i++) {
  pageNumbers.push(i);
}

let filteredContacts  = especiales(search,data)
const currentTodos = filteredContacts.slice(indexOfFirstTodo, indexOfLastTodo);

let edicion=""

if (modalIsOpen) {
    edicion = (
      <div className="flex items-center justify-center h-screen">
   
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"        
      >
        <div className="modal-content mt-[3cm]">

          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                 ----------------------------------  Editar Almacenes  ----------------------------------
              </h3>
            </div>
          

            <form  onSubmit={enviarDatos}>
                  <div className="p-6.5">                               
                   
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
                        value={datos.descripcion}
                        onChange={handleInputChange}
                        autoFocus
                        
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
                        value={datos.direccion}
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
                        value={datos.ciudad}
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
                        value={datos.provincia}
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
                        value={datos.distrito}
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
                        value={datos.tel}
                        onChange={handleInputChange}
                        required
                      />
                    </div>




                    
                    
                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                      Enviar
                    </button>
                  </div>
                </form>                    
          
                <button
                  className="flex w-full justify-center rounded bg-black hover:bg-opacity-90 p-3 font-medium text-gray"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
             </div>   
        </div>
      </Modal>
  </div>


    )

}






  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
         <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Buscar
                  </label>
                  <input
                    type="text"
                    placeholder="Digite su busqueda"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={searchHandler}
                  />
        </div>

        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Acciones
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Codigo
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Descripcion
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Direccion
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Ciudad
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Provincia
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Distrito
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Telefono
              </th>
            </tr>
          </thead>
          <tbody>

          {currentTodos.map( l1 => (
            <React.Fragment key={l1.codigo}>          

            <tr>
            <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                  <button className="hover:text-primary" onClick={()=>openModal(l1)}>
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                        fill=""
                      />
                      <path
                        d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                        fill=""
                      />
                    </svg>
                  </button>
                  <button className="hover:text-primary" onClick={()=>deleteModal(l1)}>
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                        fill=""
                      />
                      <path
                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                        fill=""
                      />
                      <path
                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                        fill=""
                      />
                      <path
                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                        fill=""
                      />
                    </svg>
                  </button>
                  
                </div>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">               
              {l1.codigo}                             
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{l1.descripcion}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">                
                {l1.direccion}                
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">                
                {l1.ciudad}                
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">                
                {l1.provincia}                
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">                
                {l1.distrito}                
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">                
                {l1.tel}                
              </td>
              
            </tr>
            </React.Fragment>
          ))}  

           </tbody>
        </table>
        <center>


        {edicion}

          
          <ReactPaginate 
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={Math.ceil(filteredContacts.length / todosPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageClicked}
              containerClassName={'react-paginate ul'}
              subContainerClassName={'react-paginate li'}
              activeClassName={'active'}

              />

          </center>
      </div>
    </div>
  );
};

export default TableAlma;
