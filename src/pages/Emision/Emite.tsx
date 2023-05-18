import React, { useState,useRef} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import Modal from 'react-modal';

import Factura from '../Imprime/Factura';
import Ticket from '../Imprime/Ticket';

//Modal.setAppElement('#root');

const Emite: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const pdfViewerRef = useRef<PDFViewer | null>(null);

    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
        imprimirFactura(); // Llama a la función de impresión al cerrar el modal
      };

      const imprimirFactura = () => {
        if (pdfViewerRef.current) {
            pdfViewerRef.current.print(); // Imprimir el contenido del PDF
          }
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
        <Factura />
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

      {/* Generar un PDF de la factura */}
     
      <PDFViewer width={600} height={800}>
        <Ticket />
      </PDFViewer>
   
   </DefaultLayout> 
  );
};

export default Emite;
