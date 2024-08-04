import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button, TouchableOpacity } from 'react-native';

const BuySellPopUp = () => {
  const quantity = 10; // Temporary value
  const price = 50; // Temporary value per unit
  const remainingBalance = 500; // Temporary value

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="slide"
    //   onRequestClose={}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Confirm Purchase</Text>
          <Text style={styles.modalText}>Quantity: {quantity}</Text>
          <Text style={styles.modalText}>Price per unit: ${price}</Text>
          <Text style={styles.modalText}>Total Price: ${quantity * price}</Text>
          <Text style={styles.modalText}>Remaining Balance: ${remainingBalance}</Text>
          <TouchableOpacity
            style={styles.button}
            // onPress={}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#9CD063',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

export default BuySellPopUp;
