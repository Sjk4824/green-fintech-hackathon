import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from "../navigation/navigationTypes";
import { StackNavigationProp } from '@react-navigation/stack';

type DashboardPageNavigationProp = StackNavigationProp<RootStackParamList, 'DashboardPage'>;

interface Props {
  navigation: DashboardPageNavigationProp;
}
// Temporary data for demonstration
const stocks = [
  { name: 'K.P. Energy Limited', price: '₹436.6', change: '+2.50%' },
  { name: 'BF Utilities Limited', price: '₹876.4', change: '-1.20%' },
  { name: 'KPI Green Energy Limited', price: '₹1771.2', change: '+3.10%' },
  { name: 'SJVN Limited', price: '₹131.56', change: '-0.50%' },
  { name: 'KKV Agoro Powers Limited', price: '₹1119.34', change: '+1.75%' }
];

const DashboardPage: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Dashboard</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Explore..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreText}>Green Score: 87.60</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreText}>Percentile: 90</Text>
        </View>
      </View>

      <View style={styles.topContainers}>
        <View style={styles.containerBox}>
          <Text style={styles.boxTitle}>Top Gainer</Text>
          <Text style={styles.boxContent}>K.P. Energy Limited</Text>
          <Text style={styles.boxContent}>+5.65%</Text>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.boxTitle}>Top Loser</Text>
          <Text style={styles.boxContent}>NHPC Limited</Text>
          <Text style={styles.boxContent}>-3.25%</Text>
        </View>
      </View>

      <View style={styles.stockListContainer}>
        <Text style={styles.stockListTitle}>Top 5 Green Stocks</Text>
        <ScrollView style={styles.stockList}>
        {stocks.map((stock, index) => (
  <TouchableOpacity 
    key={index} 
    style={styles.stockBox} 
    onPress={() => navigation.navigate('StockTradingPage', {
      stockName: stock.name,
      carbonFootprint: 'Low', // Replace with actual data if available
      stockPrices: [120.50, 115.30, 125.60], // Replace with actual data if available
      greenScore: 85, // Replace with actual data if available
      marketCap: '50B', // Replace with actual data if available
      peRatio: 22.5, // Replace with actual data if available
      pbRatio: 3.1, // Replace with actual data if available
      roe: 15.2, // Replace with actual data if available
      dividendYield: 2.5, // Replace with actual data if available
    })}
  >
    <Text style={styles.stockName}>{stock.name}</Text>
    <Text style={styles.stockPrice}>{stock.price}</Text>
    <Text style={styles.stockChange}>{stock.change}</Text>
  </TouchableOpacity>
))}
        </ScrollView>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={30} color="#f59025" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('HoldingsPage')} 
        >
          <Icon name="account-balance-wallet" size={24} color="#f59025" />
          <Text style={styles.navButtonText}>My Holdings</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('ProfilePage', {
            name: 'Virat Kohli',
            email: 'viratkohli@gmail.com',
            mobile: '+99953477263',
            profilePhotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s',
            tradeBalance: 150000,
            bankAccounts: ['Federal Bank: ********4656', 'HDFC Bank: ********9001'],
          })}
        >
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
  searchBar: {
    height: 40,
    borderColor: '#b0bec5',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,

    backgroundColor: '#f0f0f0',
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
    marginTop:30,
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
