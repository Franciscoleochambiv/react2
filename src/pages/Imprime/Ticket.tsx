import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Estilos para el ticket
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Courier',
    fontSize: 10,
    padding: 10,
    lineHeight: 1.2,
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
    textDecoration: 'underline',
  },
  content: {
    marginBottom: 5,
  },
});

// Componente del ticket
const Ticket: React.FC = () => {
  return (
    <Document>
      <Page size="A7" style={styles.page}>
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

export default Ticket;
