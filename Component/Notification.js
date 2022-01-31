import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SwitchButton from "@freakycoder/react-native-switch-button";

export default function Notification() {
  return (
    <View
      style={{
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
        paddingBottom: 100,
      }}
    >
      <SwitchButton
        style={{ width: 60, height: 60 }}
        text="Notification"
        inactiveImageSource={{
          uri: "https://cdn-icons.flaticon.com/png/512/3239/premium/3239952.png?token=exp=1643599709~hmac=77e5f5ec7cdc6b9a99121f25cda9781c",
        }}
        activeImageSource={{
          uri: "https://cdn-icons.flaticon.com/png/512/3239/premium/3239952.png?token=exp=1643599709~hmac=77e5f5ec7cdc6b9a99121f25cda9781c",
        }}
        onPress={(isActive) => console.log(isActive)}
        disableText
      />

      <SwitchButton
        style={{ width: 60, height: 60 }}
        text="Notification"
        inactiveImageSource={{
          uri: "https://cdn-icons.flaticon.com/png/512/2838/premium/2838912.png?token=exp=1643599863~hmac=ab71d38572082c2325d682a121425b0f",
        }}
        activeImageSource={{
          uri: "https://cdn-icons.flaticon.com/png/512/2838/premium/2838912.png?token=exp=1643599863~hmac=ab71d38572082c2325d682a121425b0f",
        }}
        onPress={(isActive) => console.log(isActive)}
        mainColor="#66B2FF"
        disableText
      />

      <SwitchButton
        style={{ width: 60, height: 60 }}
        text="Notification"
        inactiveImageSource={{
          uri: "https://cdn-icons-png.flaticon.com/512/865/865779.png",
        }}
        activeImageSource={{
          uri: "https://cdn-icons-png.flaticon.com/512/865/865779.png",
        }}
        onPress={(isActive) => console.log(isActive)}
        mainColor="#404040"
        disableText
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
