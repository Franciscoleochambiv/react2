//import * as CONSTANTS from "./Constants";



import {
 
  
  ADD_TITULO,

  SHOW_TITULO,

  SHOW_MODAL,
  SHOW_MENU,


} from "./types.js";


export const addTitulo = item => ({
  type: ADD_TITULO,
  payload: item

});



export const showTitulo = status => ({
  type: SHOW_TITULO,
  payload: status
});


export const showModal = status => ({
  type: SHOW_MODAL,
  payload: status
});

export const showMenu = status => ({
  type: SHOW_MENU,
  payload: status
});




