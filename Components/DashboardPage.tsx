import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Temporary data for demonstration
const stocks = [
  { name: 'ABC Corp', price: '$120.50', change: '+2.50%' },
  { name: 'XYZ Inc', price: '$95.30', change: '-1.20%' },
  { name: 'LMN Ltd', price: '$78.90', change: '+3.10%' },
  { name: 'OPQ Co', price: '$110.00', change: '-0.50%' },
  { name: 'RST PLC', price: '$89.75', change: '+1.75%' }
];

const DashboardPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Dashboard</Text>
      
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreText}>Green Score: 85</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreText}>Percentile: 90</Text>
        </View>
      </View>

      <View style={styles.topContainers}>
        <View style={styles.containerBox}>
          <Text style={styles.boxTitle}>Top Gainer</Text>
          <Text style={styles.boxContent}>ABC Corp</Text>
          <Text style={styles.boxContent}>+$5.25</Text>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.boxTitle}>Top Loser</Text>
          <Text style={styles.boxContent}>XYZ Inc</Text>
          <Text style={styles.boxContent}>-$3.00</Text>
        </View>
      </View>

      <View style={styles.stockListContainer}>
        <Text style={styles.stockListTitle}>Top 5 Green Stocks</Text>
        <ScrollView style={styles.stockList}>
          {stocks.map((stock, index) => (
            <View key={index} style={styles.stockBox}>
              <Text style={styles.stockName}>{stock.name}</Text>
              <Text style={styles.stockPrice}>{stock.price}</Text>
              <Text style={styles.stockChange}>{stock.change}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={30} color="#f59025" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-balance-wallet" size={24} color="#f59025" />
          <Text style={styles.navButtonText}>My Holdings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="person" size={24} color="#f59025" />
          <Text style={styles.navButtonText}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0e4d5f'
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#009688',
    padding: 15,
    borderRadius: 10,
    borderColor: '#b0bec5',
    borderWidth: 1,
  },
  scoreBox: {
    flex: 1,
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 18,
    color: '#f0f0f0',
    fontWeight: 'bold'
  },
  topContainers: {
    flexDirection: 'row',
    
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    borderColor: '#b0bec5',
    borderWidth: 1,
    borderRadius: 10
  },
  containerBox: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center'
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f59025'
  },
  boxContent: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  stockListContainer: {
    backgroundColor: '#99cac0',
    flex: 1,
    marginBottom: 20,
    padding: 10,
    borderColor: '#99cac0',
    borderWidth: 1,
    borderRadius: 10
  },
  stockListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f8f8f8'
  },
  stockList: {
    flex: 1
  },
  stockBox: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#b0bec5',
    borderWidth: 1
  },
  stockName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  stockPrice: {
    fontSize: 16,
    color: '#333'
  },
  stockChange: {
    fontSize: 16,
    color: '#888'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff'
  },
  navButton: {
    alignItems: 'center',
    padding: 10
  },
  navButtonText: {
    fontSize: 16,
    color: '#f59025',
    marginTop: 5
  }
});

export default DashboardPage;