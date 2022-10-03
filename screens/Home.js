import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import { useEffect, useState } from "react";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San francisco");

  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = ` https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    // getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={style.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "Android" ? StatusBar.currentHeight : 50,
    backgroundColor: "#eee",
  },
});
