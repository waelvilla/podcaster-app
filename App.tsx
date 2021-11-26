import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { NativeBaseProvider } from "native-base";
import { ApolloProvider } from "@apollo/client";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { client } from "./src/config";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  i18n.locale = Localization.locale.includes("en") ? "en" : Localization.locale;

  const NBConfig = {
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  };
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <NativeBaseProvider config={NBConfig}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
