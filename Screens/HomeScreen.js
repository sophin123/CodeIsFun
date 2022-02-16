import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../Component/Card";
import { data } from "../Data/data";

import { Icons } from "react-native-vector-icons/Ionicons";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Notification from "../Component/Notification";

export default function HomeScreen({ navigation }) {
  //changes in home screen
  //changes in home screen
  //changes in home screen

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 20,
          marginTop: 20,
        }}
      >
        <Ionicons
          name="md-menu-outline"
          size={34}
          color={`rgba(255,255,255,0.8)`}
          onPress={() => console.log("Menu")}
        />
        <MaterialCommunityIcons
          name="account"
          size={34}
          color={`rgba(255,255,255,0.8)`}
          onPress={() => console.log("clicked")}
        />
      </View>
      <Notification />
      <FlatList
        style={{ flex: 0.5 }}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 10,
              backgroundColor: item.color,
              borderRadius: 60,
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 300,
            }}
          >
            <Card cardNum={item.cardNum} name={item.name} color={item.color} />
          </View>
        )}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `rgba(46,45,42,0.8)`,
  },
});
