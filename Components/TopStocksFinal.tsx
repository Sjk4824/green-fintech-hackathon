import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-svg";

function TopStocksFInal() {
  return (
    <View style={styles.container}>
        <Text>I am a simple box</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 346,
    height: 57, 
    paddingLeft: 0,
    marginLeft: 0,
  },
//   topStocksFinal: {
//     height: 57,
//     width: 346
//   }
});

export default TopStocksFInal;