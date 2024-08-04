// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Components/LoginPage'; // Adjust the path based on your project structure
import DashboardPage from './Components/DashboardPage'; // Import DashboardPage
import ProfilePage from './Components/ProfilePage';
import { RootStackParamList } from './navigation/navigationTypes';
import HoldingsPage from './Components/MyHoldingsPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }} // Optional: Hide header for login page
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardPage}
          options={{ headerShown: false }} // Optional: Set title for Dashboard page
        />
      <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          initialParams={{
            name: 'John Doe',
            email: 'john.doe@example.com',
            mobile: '123-456-7890',
            profilePhotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s',
            tradeBalance: 1000,
            bankAccounts: ['Bank A', 'Bank B'],
          }}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HoldingsPage"
          component={HoldingsPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
