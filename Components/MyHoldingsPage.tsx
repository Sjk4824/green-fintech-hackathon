import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph, Surface, useTheme } from 'react-native-paper';
// Remove LinearGradient import
// import { LinearGradient } from 'expo-linear-gradient'; // Gradient backgrounds
import { formatCurrency, formatDecimal, calculatePercentage, formatProfitLoss } from './utils';

const { width } = Dimensions.get('window');

const stocksData = [
  { id: '1', name: 'EcoTech Corp', greenScore: 92, invested: 120000, current: 140000 },
  { id: '2', name: 'Green Energy Ltd', greenScore: 88, invested: 100000, current: 115000 },
  { id: '3', name: 'Sustainable Solutions', greenScore: 78, invested: 80000, current: 75000 },
  { id: '4', name: 'Solar Innovations', greenScore: 95, invested: 150000, current: 165000 },
  { id: '5', name: 'Clean Water Inc', greenScore: 85, invested: 95000, current: 90000 },
];

const HoldingsPage = () => {
    const theme = useTheme();
  
    // Compute portfolio stats
    const totalInvested = stocksData.reduce((acc, stock) => acc + stock.invested, 0);
    const totalCurrent = stocksData.reduce((acc, stock) => acc + stock.current, 0);
    const totalPnl = totalCurrent - totalInvested;
    const averageGreenScore = stocksData.reduce((acc, stock) => acc + stock.greenScore, 0) / stocksData.length;
    const carbonSaved = averageGreenScore * 5; // Simplified calculation for mock-up
  
    // Update formatProfitLoss function call to use the returned string
    const profitLossText = formatProfitLoss(totalCurrent, totalInvested);
  
    return (
      <View style={styles.container}>
        <View style={styles.dashboard}>
          <Text style={styles.title}>Portfolio Dashboard</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statsRow}>
              <Surface style={styles.statSurfaceWhite}>
                <Text style={styles.statLabel}>Invested Value</Text>
                <Text style={styles.statValue}>{formatCurrency(totalInvested)}</Text>
              </Surface>
              <Surface style={styles.statSurfaceWhite}>
                <Text style={styles.statLabel}>Current Value</Text>
                <Text style={styles.statValue}>{formatCurrency(totalCurrent)}</Text>
              </Surface>
            </View>
            <Surface style={[styles.statSurfaceWhite, styles.statSurfaceFullWidth]}>
              <Text style={styles.statLabel}>Profit/Loss</Text>
              <Text style={[
                styles.statValue,
                totalPnl >= 0 ? styles.profit : styles.loss
              ]}>
                {profitLossText}
              </Text>
            </Surface>
            <View style={styles.statsRow}>
              <Surface style={styles.statSurfaceWhite}>
                <Text style={styles.statLabel}>Average Green Score</Text>
                <Text style={styles.greenScore}>{formatDecimal(averageGreenScore)}</Text>
              </Surface>
              <Surface style={styles.statSurfaceWhite}>
                <Text style={styles.statLabel}>Carbon Emissions Saved</Text>
                <Text style={styles.statValue}>{formatDecimal(carbonSaved)} kg</Text>
              </Surface>
            </View>
          </View>
        </View>
        <FlatList
          data={stocksData.sort((a, b) => b.greenScore - a.greenScore)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.cardTitle}>{item.name}</Title>
                <Paragraph>Green Score: {item.greenScore}</Paragraph>
                <Paragraph>Invested: {formatCurrency(item.invested)}</Paragraph>
                <Paragraph>Current: {formatCurrency(item.current)}</Paragraph>
                <Paragraph
                  style={[
                    item.current >= item.invested ? styles.profit : styles.loss
                  ]}
                >
                  Profit/Loss: {formatProfitLoss(item.current, item.invested)}
                </Paragraph>
              </Card.Content>
            </Card>
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#ffffff',
    },
    dashboard: {
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      elevation: 4,
      backgroundColor: '#d3ecbc', // Pastel green background
    },
    title: {
      fontSize: 24,
      color: '#6db474',
      fontWeight: 'bold',
      marginBottom: 12,
    },
    statsContainer: {
      marginTop: 8,
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    statSurfaceWhite: {
      padding: 10,
      borderRadius: 8,
      elevation: 2,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      marginBottom: 8,
      width: (width - 48) / 2 - 10, // Adjust width to fit on screen with margins
    },
    statSurfaceFullWidth: {
      width: width - 32, // Full width for merged P&L row
    },
    statLabel: {
      fontSize: 12,
      color: '#8db670',
    },
    statValue: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    greenScore: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#6db474',
    },
    profit: {
      color: '#4caf50', // Green for profit
    },
    loss: {
      color: '#f44336', // Red for loss
    },
    card: {
      marginBottom: 12,
      borderRadius: 8,
      elevation: 2,
    },
    cardTitle: {
      fontSize: 16,
      color: '#004d40',
    },
    list: {
      paddingBottom: 16,
    },
  });
  
  export default HoldingsPage;
