import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider, Spinner } from "native-base";
import { ApolloProvider } from "@apollo/client";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import {useApolloClient} from './src/hooks/useApolloClient';
import Loading from "./src/screens/LoadingScreen";


export default function App() {
  const { client, clearCache } = useApolloClient();
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  const NBConfig = {
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  };
  if (!isLoadingComplete || !client) {
    return <Loading />
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
