import { Foundation } from "@expo/vector-icons";
import { FlatList } from "native-base";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Colors from "../../utils/constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import styles from "./styles";

const Home = () => {
  const theme = Colors[useColorScheme()];
  console.log("StatusBar.length", StatusBar.currentHeight);

  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={{
          position: "absolute",
          top: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 50,
          right: 30,
        }}
      >
        <Foundation name="magnifying-glass" color="white" size={30} />
      </TouchableOpacity>
    );
  };

  const renderHeroItem = ({ item }: { item: number }) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  const renderHeroCarousel = () => {
    return <FlatList data={[1, 2, 3]} renderItem={renderHeroItem} />;
  };
  const renderAlbumCarousel = () => {
    return null;
  };

  const renderSimilarList = () => {
    return null;
  };

  return (
    <View style={styles.root}>
      {renderHeader()}
      {renderHeroCarousel()}
      {renderAlbumCarousel()}
      {renderSimilarList()}
    </View>
  );
};

export default Home;
