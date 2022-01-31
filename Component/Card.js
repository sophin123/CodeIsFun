import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

import { useFonts } from "expo-font";

export default function Card({ cardNum, name, color }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [loaded] = useFonts({
    RobotLight: require("../assets/fonts/Roboto-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <View
        style={{
          justifyContent: "flex-start",
          marginLeft: 40,
          marginTop: 30,
          marginRight: 40,
          marginBottom: 10,
        }}
      >
        <View style={styles.switch}>
          <Switch
            style={{
              transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
              position: "absolute",
            }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#000000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Text style={{ fontFamily: "RobotLight", fontSize: 12 }}>
          {cardNum}
        </Text>

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: 2,
            opacity: 0.8,
          }}
        >
          {cardNum}
        </Text>
        <Text style={{ fontSize: 20, marginTop: 60, marginBottom: 40 }}>
          {name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    marginLeft: 20,
  },
  switch: {
    marginBottom: 70,
  },
});
