import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Estilos para la factura
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  content: {
    marginBottom: 20,
  },
});

// Componente de la factura
const Factura: React.FC = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Factura</Text>
          <View style={styles.content}>
            <Text>Nombre del cliente: Juan Pérez</Text>
            <Text>Fecha: 17 de mayo de 2023</Text>
            {/* Agrega más detalles de la factura aquí */}
          </View>
          {/* Agrega más secciones de la factura aquí */}
        </View>
      </Page>
    </Document>
  );
};

export default Factura;


