import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    width: '50%', // Tamaño de la mitad de la página A4
    height: '100%',
    flexDirection: 'row', // Orientación horizontal
    backgroundColor: '#ffffff', // Color de fondo blanco
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
});
// Componente del ticket
const Mediap: React.FC = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Ticket de compra</Text>
          <View style={styles.content}>
            <Text>Cliente: Juan Pérez</Text>
            <Text>Fecha: 17 de mayo de 2023</Text>
            {/* Agrega más detalles del ticket aquí */}
          </View>
          {/* Agrega más secciones del ticket aquí */}
        </View>
      </Page>
    </Document>
  );
};

export default Mediap;
