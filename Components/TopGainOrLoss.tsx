import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function TopGainOrLoss() {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.todaysTopGainer}>Todays top Gainer:</Text>
        <Text style={styles.nhpc23}>NHPC: +23%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 152,
    height: 61,
    backgroundColor: "rgba(156,208,99,1)",
    borderRadius: 12,
    marginTop: 85,
    marginLeft: 32
  },
  todaysTopGainer: {
    fontFamily: "montserrat-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 13
  },
  nhpc23: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 13
  }
});

export default TopGainOrLoss;