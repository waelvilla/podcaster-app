import React from "react";
import { Button, IImageProps, Image, Text as NBText } from "native-base";
import { View } from "../../components/Themed";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

const IconButton = ({
  text,
  textStyle,
  style,
  imageStyle,
  image,
}: {
  text: string;
  image: number | { uri: string };
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <Button
      style={[
        {
          width: "75%",
          height: 40,
          backgroundColor: "#FFF",
        },
        style,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#FFF",
        }}
      >
        <Image source={image} style={imageStyle} width={5} height={5} />
        <NBText style={[{ marginHorizontal: 10, color: "#000" }, textStyle]}>
          {text}
        </NBText>
      </View>
    </Button>
  );
};
export default IconButton;
