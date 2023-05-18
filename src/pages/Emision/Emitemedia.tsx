import React, { useState} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import Modal from 'react-modal';


import Mediap from '../Imprime/Mediap';

//Modal.setAppElement('#root');

const Emitemedia: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
  
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
       
      };

     
    
    

  return (
    <DefaultLayout>
    <Breadcrumb pageName="Facturas" />   
    <div className="flex items-center justify-center h-screen">
   
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
        
      >
        <div className="modal-content mt-[3cm]">
        <PDFViewer width={600} height={800}>
        <Mediap />
      </PDFViewer>


          
          <button
            className="flex w-full justify-center rounded bg-black hover:bg-opacity-90 p-3 font-medium text-gray"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </div>

     
     
     
   
   </DefaultLayout> 
  );
};

export default Emitemedia;
