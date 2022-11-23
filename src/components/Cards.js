import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./Card.style";

const Cards = ({ card }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={{ uri: card.imgURL }}
            resizeMode={"contain"}
          ></Image>
        </View>

        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.price}>{card.price}</Text>
        {card.inStock ? "" : <Text style={styles.inStock}>Stokta Yok</Text>}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cards;
