import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Slider from '@react-native-community/slider'; // Import Slider component
import BuyPopUp from './BuyPopUp';
import SellPopUp from './SellPopUp';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigationTypes';

type StockTradingPageProps = StackScreenProps<RootStackParamList, 'StockTradingPage'>;

const StockTradingPage: React.FC<StockTradingPageProps> = ({ 
  route,
  navigation
}) => {
  const {
    stockName, 
    carbonFootprint, 
    stockPrices = [120, 125, 130, 135, 140, 145, 150],
    greenScore = 50,
    marketCap = "1650 Cr",
    peRatio = 1.2,
    pbRatio = 1.8,
    roe = 2.08,
    dividendYield = 5
  } = route.params; // Destructure params from route
  
  const [stocksPurchased, setStocksPurchased] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [sellModal, setSellModal] = useState(false); 
  const screenWidth = Dimensions.get('window').width - 40;

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(109, 180, 116, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForDots: {
      r: "2",
      strokeWidth: "3",
      stroke: "#009688"
    }
  };

  const data = {
    labels: stockPrices.length > 0 ? stockPrices.map((_, index) => `Day ${index + 1}`) : ['No Data'],
    datasets: [
      {
        data: stockPrices.length > 0 ? stockPrices : [Math.floor(Math.random() * 100) + 50],
        color: (opacity = 1) => `rgba(109, 180, 116, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: stockName ? [`${stockName} Prices`] : ['Stock Prices'] // Ensure legend has a default value
  };

  const handleBuyPress = () => {
    setModalVisible(true);
  };

  const handleSellPress = () => {
    setSellModal(true);
  };

  const handleSellClose = () => {
    setSellModal(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.stockName}>{stockName}</Text>
      <View style={styles.card}>
        <Text style={styles.carbonFootprint}>Avoided Emissions: {carbonFootprint} 50 tonnes</Text>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>
      <View style={styles.scrollContainer}>
        <Text style={styles.scrollText}>Number of Stocks Purchased: {Math.floor(0.25 * stocksPurchased)}</Text>
        <View style={styles.sliderBox}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={stocksPurchased}
            onValueChange={(val) => setStocksPurchased(val)}
            minimumTrackTintColor="#009688"
            maximumTrackTintColor="#ddd"
            thumbTintColor="#f59025"
          />
          <Text style={styles.savingsText}>Saves {Math.floor(stocksPurchased)} Metric Tonnes of CO2 annually</Text>
        </View>
      </View>
      <View style={styles.statisticsContainer}>
        <View style={styles.column}>
          <Text style={styles.statisticsText}>Green Score: {greenScore}</Text>
          <Text style={styles.statisticsText}>Market Cap: {marketCap}</Text>
          <Text style={styles.statisticsText}>P/E Ratio: {peRatio}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.statisticsText}>P/B Ratio: {pbRatio}</Text>
          <Text style={styles.statisticsText}>ROE: {roe}%</Text>
          <Text style={styles.statisticsText}>Div Yield: {dividendYield}%</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buyButton]}
          onPress={handleBuyPress}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.sellButton]}
          onPress={handleSellPress}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>
      <BuyPopUp visible={isModalVisible} onClose={handleCloseModal} />
      <SellPopUp visible={sellModal} onClose={handleSellClose} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  stockName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#009688',
    marginBottom: 10
  },
  card: {
    backgroundColor: '#009688',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center'
  },
  carbonFootprint: {
    fontSize: 18,
    color: '#fff', 
    fontFamily: "Montserrat-Bold"
  },
  chartContainer: {
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  chart: {
    borderRadius: 10
  },
  scrollContainer: {
    width: '100%',
    marginBottom: 20
  },
  scrollText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#009688'
  },
  sliderBox: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  slider: {
    width: '100%',
    height: 40,
  },
  savingsText: {
    fontSize: 16,
    color: '#009688',
    marginTop: 10
  },
  statisticsContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  column: {
    width: '48%',
    marginBottom: 10
  },
  statisticsText: {
    fontSize: 16,
    color: "#009688",
    marginBottom: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  buyButton: {
    backgroundColor: '#97ce7d'
  },
  sellButton: {
    backgroundColor: '#f74545'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default StockTradingPage;
