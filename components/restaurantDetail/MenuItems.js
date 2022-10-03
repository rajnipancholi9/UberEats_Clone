import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce,tomato and sauce bachamel",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/photos/lasagna-on-a-square-white-plate-picture-id535851351?k=20&m=535851351&s=612x612&w=0&h=jdWOk9G_OOzHvPrvFrigqzk3EoucmIhUZr1-ey9NcGM=",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing indian dish With butter lettuce,tomato and sauce bachamel",
    price: "$21.50",
    image:
      "https://image.shutterstock.com/image-photo/arabian-arabic-cuisine-grilled-tandoori-260nw-1202127400.jpg",
  },
  {
    title: "Chilaquiles",
    description: "yummy dish With butter lettuce,tomato and sauce bachamel",
    price: "$16.50",
    image:
      "https://st3.depositphotos.com/1373322/15052/i/450/depositphotos_150524334-stock-photo-tortillas-with-tomato-salsa-chicken.jpg",
  },
  {
    title: "Chicken Cesar Salad",
    description: "tasty dish With butter lettuce,tomato and sauce bachamel",
    price: "$30.50",
    image:
      "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/2019-w24-r4-chicken-caesar-salad-915d0730.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing indian dish With butter lettuce,tomato and sauce bachamel",
    price: "$21.50",
    image:
      "https://image.shutterstock.com/image-photo/arabian-arabic-cuisine-grilled-tandoori-260nw-1202127400.jpg",
  },
];

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) => 
    Boolean(cartItems.find((item) => item.title == food.title))
  
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={style.MenuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "grey", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={style.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);

const style = StyleSheet.create({
  MenuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
