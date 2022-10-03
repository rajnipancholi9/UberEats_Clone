import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HeaderTabs(props) {
  // const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      {/* since the buttons are changing color dynamically hence we are giving
      props for btn color and text color */}
      <HeaderButton
        text="Delivery"
        btncolor="black"
        textcolor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="pickup"
        btncolor="white"
        textcolor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
