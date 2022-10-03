import { StyleSheet, Text, View, Image } from "react-native";
import Categories from "../home/Categories";

// const yelpRestaurantInfo = {
//   name: "Farmhouse Kitchen Thai Cuisine",
//   image:
//     "https://www.shutterstock.com/image-photo/restaurant-chilling-out-classy-lifestyle-600w-507639565.jpg",
//   price: "$$",
//   reviews: "1500",
//   rating: 4.5,
//   categories: [
//     { title: "Thai" },
//     { title: "Comfort Food" },
//     { title: "Coffee" },
//     { title: "Ice Cream" },
//     { title: "Snacks" },
//   ],
// };

//: HardCoded stuff :
// const image =
//   "https://www.shutterstock.com/image-photo/restaurant-chilling-out-classy-lifestyle-600w-507639565.jpg";

// const name = "Farmhouse Kitchen Thai Cuisine";
// const description = "Thai • Comfort Food • $$ • 🎫 • 4⭐(2913+) ";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  //yelpRestaurantInfo;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? "•" + price : " "
  } • 🎫 • ${rating}⭐ ( ${reviews} +)  `;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 150 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 27,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
