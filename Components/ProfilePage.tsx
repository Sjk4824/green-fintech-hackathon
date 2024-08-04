import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigationTypes'; // Adjust the path as needed
import { RouteProp } from '@react-navigation/native';

// Define the type for the props
type ProfilePageNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilePage'>;
type ProfilePageRouteProp = RouteProp<RootStackParamList, 'ProfilePage'>;

interface ProfilePageProps {
  route: ProfilePageRouteProp;
  navigation: ProfilePageNavigationProp;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ route }) => {
  const {
    name = 'N/A',
    email = 'N/A',
    mobile = 'N/A',
    profilePhotoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s',
    tradeBalance = 0,
    bankAccounts = []
  } = route.params;

  const handleInvite = () => {
    // Add your invite logic here
  };

  const handleDownloadReports = () => {
    // Add your report download logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: profilePhotoUrl }}
          style={styles.profilePhoto}
        />
        <View style={styles.profileDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Name:</Text>
            <Text style={styles.detailValue}>{name}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email:</Text>
            <Text style={styles.detailValue}>{email}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Mobile:</Text>
            <Text style={styles.detailValue}>{mobile}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.tradeBalanceSection}>
        <Text style={styles.tradeBalanceLabel}>Trade Balance</Text>
        <Text style={styles.tradeBalanceAmount}>${tradeBalance}</Text>
      </View>

      <View style={styles.bankDetailsSection}>
        <Text style={styles.bankDetailsTitle}>Linked Bank Accounts:</Text>
        {bankAccounts.length > 0 ? (
          bankAccounts.map((account, index) => (
            <Text key={index} style={styles.bankAccount}>{account}</Text>
          ))
        ) : (
          <Text>No linked bank accounts</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.inviteButton]} onPress={handleInvite}>
          <Text style={styles.buttonText}>Invite Someone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.downloadButton]} onPress={handleDownloadReports}>
          <Text style={styles.buttonText}>Download Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
  },
  tradeBalanceSection: {
    backgroundColor: '#009688',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tradeBalanceLabel: {
    fontSize: 16,
    color: '#fff',
  },
  tradeBalanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bankDetailsSection: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  bankDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  bankAccount: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  inviteButton: {
    backgroundColor: '#99cac0', // Light Green
  },
  downloadButton: {
    backgroundColor: '#99cac0', // Light Green
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
