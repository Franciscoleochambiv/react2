//ENDPOINT1+'/api/shoping1/cliente/'+data)
//GET_CARTSUNAT

import axios from "axios";
import {  
 
    GET_CARTDNI,
    DNIFILE_LOADING,
    CLEAR_CURRENT_DNIFILE,
} from "./types.js";

//let unidad="https://adryan2.sytes.net:7001";

import { TOKEN } from "../variables";


export const fetch_dnisql =  (id) => async dispatch => {
    dispatch(setDnifileLoading());
    try {
    const lolo =  await axios
    //const llamada2 = await fetch('')    
      .get('https://apiperu.dev/api/dni/'+id+'?api_token='+TOKEN  )
      .then(res => res.data)
         dispatch({
          type: GET_CARTDNI,
          payload: lolo,
          
          })
        
      
    }
      catch(err) {
         dispatch({
          type: GET_CARTDNI,
          payload: {}
        })
      }
  }   




  



export const setDnifileLoading = () => {
    return {
      type: DNIFILE_LOADING
    };
  };
  
  export const clearCurrentDnifile = () => {
    return {
      type: CLEAR_CURRENT_DNIFILE
    };
  };
  
  