//import * as CONSTANTS from "./Constants";


import {  
  
    ADD_TITULO,
    SHOW_TITULO,
    
    SHOW_MODAL,
    SHOW_MENU,
  } from "../actions/types.js";

  
// If multiple components need access to some data, in that case we store such data in redux.
const initialState = {
  titulos:{},  
  showTitulo: true,  
  showModal: true,  
  showMenu: 0,  
  titulo:null
};
export default function(state = initialState, action) {
//const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
   

    case SHOW_TITULO:
        return { ...state, showTitulo: action.payload };

    case ADD_TITULO:
          return { ...state, titulo: action.payload };
      
    case SHOW_MODAL:
            return { ...state, showModal: action.payload };
    case SHOW_MENU:
              return { ...state, showMenu: action.payload };        
          
   
    default:
      return state;
  }
};

//export default rootReducer;
