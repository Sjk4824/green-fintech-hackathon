import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';

interface BuySellPopUpProps {
  visible: boolean;
  onClose: () => void;
}

const BuyPopUp: React.FC<BuySellPopUpProps> = ({ visible, onClose }) => {
  const [quantity, setQuantity] = useState<string>('');

  // Calculate the price limit based on quantity
  const pricePerUnit = 137;
  const priceLimit = quantity ? Number(quantity) * pricePerUnit : 0;

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Order Details</Text>
          <Text style={styles.modalSubtitle}>₹2,300.00 (+2.67%)</Text>
          <View style={styles.segmentedControl}>
            <TouchableOpacity style={styles.segmentButton}>
              <Text style={styles.segmentButtonText}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.segmentButton, styles.segmentButtonActive]}>
              <Text style={[styles.segmentButtonText, styles.segmentButtonTextActive]}>Intraday</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Qty NSE</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Price Limit</Text>
            <Text style={styles.input}>{priceLimit}</Text>
          </View>
          <TouchableOpacity
            style={styles.buyButton}
            // onPress={}
          >
            <Text style={styles.buyButtonText}>BUY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Close</Text>
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
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#4caf50',
    marginBottom: 20
  },
  segmentedControl: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  segmentButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  segmentButtonActive: {
    backgroundColor: '#97ce7d',
  },
  segmentButtonText: {
    fontSize: 16,
    color: "black",
  },
  segmentButtonTextActive: {
    color: '#fff',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
    color: '#333',
  },
  buyButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#97ce7d',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buyButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f74545',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BuyPopUp;
