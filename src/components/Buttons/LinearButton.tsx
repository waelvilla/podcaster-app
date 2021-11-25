import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { Box, Button } from "native-base";
import { GRADIENT_START, GRADIENT_END } from "../../constants/Colors";

export const LinearButton = ({
  text,
  onPress,
  style,
}: {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  const styleProps = style? style : {}
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        width: '75%',
        height: 50,
      }, styleProps]}
    >
      <Box
        bg={{
          linearGradient: {
            colors: [GRADIENT_START, GRADIENT_END],
            start: [0, 0],
            end: [0, 1],
          },
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: '100%',
          height: '100%',
          borderRadius: 5
        }}
        _text={{
          alignSelf: "center",
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          textAlign: "center",
        }}
      >
        {text}
      </Box>
    </TouchableOpacity>
  );
};

export default LinearButton;
