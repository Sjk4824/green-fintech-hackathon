import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import InputField from "./InputField"; // Adjust the path based on your project structure
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../navigation/navigationTypes"; // Import RootStackParamList from App file

// Define navigation prop type
type LoginPageNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginPageNavigationProp;
}

const LoginPage: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1263326618/vector/leaf-logo-design-vector-illustration-abstract-leaf-logo-vector-in-creative-design-concept.jpg?s=612x612&w=0&k=20&c=wBtvCV5hDo2vU1c7lwLwf7lT3AnmATdvqHmmsIqMWMM='
          }}
          style={styles.image}
        />
        
        <InputField placeholder="Username" />
        <InputField placeholder="Full Name" />
        <InputField placeholder="Date of Birth" />
        <InputField placeholder="Password"/>
        
        <TouchableOpacity 
          style={styles.rect7}
          onPress={() => navigation.navigate('DashboardPage')} // Navigate to Dashboard on press
        >
          <Text style={styles.createAccount}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,   // Adjust size as needed
    height: 200,  // Adjust size as needed
    marginBottom: 30,
  },
  rect7: {
    width: 190,
    height: 45,
    backgroundColor:"#009688",
    borderRadius: 19,
    marginTop: 6,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  createAccount: {
    fontFamily: "Montserrat-Bold",
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default LoginPage;
