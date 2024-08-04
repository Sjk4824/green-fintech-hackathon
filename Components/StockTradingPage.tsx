import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Slider from '@react-native-community/slider';

type StockTradingPageProps = {
  stockName: string;
  carbonFootprint: string;
  stockPrices: number[];
  greenScore: number;
  marketCap: string;
  peRatio: number;
  pbRatio: number;
  roe: number;
  dividendYield: number;
};

const DashboardPage: React.FC<StockTradingPageProps> = ({ 
  stockName, 
  carbonFootprint, 
  stockPrices, 
  greenScore,
  marketCap,
  peRatio,
  pbRatio,
  roe,
  dividendYield 
}) => {
  const [stocksPurchased, setStocksPurchased] = useState(0);
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
      strokeWidth: "2",
      stroke: "#6db474"
    }
  };

  const data = {
    labels: stockPrices.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        data: stockPrices,
        color: (opacity = 1) => `rgba(109, 180, 116, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: [`${stockName} Prices`]
  };

  const calculateSavings = (quantity: number) => {
    return quantity * 10;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.stockName}>{stockName}</Text>
      <View style={styles.card}>
        <Text style={styles.carbonFootprint}>Carbon Footprint: {carbonFootprint} tonnes</Text>
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
        <Text style={styles.scrollText}>Number of Stocks Purchased:</Text>
        {/* <View style={styles.sliderBox}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={stocksPurchased}
            onValueChange={(value) => setStocksPurchased(value)}
            minimumTrackTintColor="#6db474"
            maximumTrackTintColor="#e0e0e0"
            thumbTintColor="#8db670"
          />
          <Text style={styles.savingsText}>{stocksPurchased}</Text>
        </View> */}
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
        <TouchableOpacity style={[styles.button, styles.buyButton]}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.sellButton]}>
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>
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
    color: '#6db474',
    marginBottom: 10
  },
  card: {
    backgroundColor: '#d3ecbc',
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
    color: '#6db474'
  },
  chartContainer: {
    borderWidth: 1,
    borderColor: '#b1d697',
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
    color: '#6db474'
  },
  sliderBox: {
    backgroundColor: '#f0f0f0',
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
    color: '#6db474'
  },
  statisticsContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#b1d697',
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
    color: '#6db474',
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
    backgroundColor: '#8db670'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default DashboardPage;
