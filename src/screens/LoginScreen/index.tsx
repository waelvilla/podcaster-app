import React, { useState } from "react";
import i18n from "i18n-js";
import { Input, Checkbox, Button, Text as NBText } from "native-base";
import {GRADIENT_START, GRADIENT_END} from '../../constants/Colors';
import { View, Text } from "../../components/Themed";
import styles from "./styles";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from 'expo-linear-gradient';

i18n.translations = {
  en: {
    appName: "Podcaster",
    subtitle: "your daily dose of happiness",
    forgotPassword: "Forgot password?",
    rememberMe: "Remember me",
    welcomeBack: "Welcome Back!",
    loginSubtitle: "Login to continue where you left off!",
    login: "Log in",
    loginGoogle: "Continue with Google",
    loginFacebook: "Continue with Facebook",
    dontHaveAccount: "Don't have an account?",
    signup: "Sign up",
    tosWarning:
      "By singing up you indicate that you have read and agreed to the Terms of Service",
  },
};
const Login = () => {
  const [rememberMe, setRememberMe] = useState(true);

  const Header = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <MaskedView
          style={{ height: 70, width: '100%' }}
          maskElement={<NBText style={{textAlign: 'center', letterSpacing: 3}} fontSize="5xl">{'PODCASTER'}</NBText>}
        >
          <LinearGradient
            colors={[GRADIENT_START, GRADIENT_END]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ flex: 1,  }}
          />
        </MaskedView>
        <Text style={{ color: "#CCC", fontFamily: 'space-mono' }}>{i18n.t("subtitle")}</Text>
        {WelcomeBack()}
      </View>
    );
  };

  const WelcomeBack = () => {
    return (
      <View style={{marginTop: 30, justifyContent: "center", alignItems: "center" }}>
        <NBText fontSize="lg" color="white" >{i18n.t("welcomeBack")}</NBText>
        <NBText fontSize="sm" color="#CCC">{i18n.t("loginSubtitle")}</NBText>
      </View>
    );
  };

  const LoginForm = () => {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Input
          placeholder="Email Address"
          type="email"
          backgroundColor="#1D192C"
          borderWidth="0"
          mx="3"
          w={{
            base: "75%",
            md: "25%",
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          backgroundColor="#1D192C"
          borderWidth="0"
          marginY="5"
          mx="3"
          w={{
            base: "75%",
            md: "25%",
          }}
        />
        <View
          style={{
            width: "75%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Checkbox
              value={"rememberMe"}
              isChecked={rememberMe}
              accessibilityLabel="Remember Me"
              defaultIsChecked
              onChange={(newVal) => console.log(newVal)}
            />
            <Text>{i18n.t("rememberMe")}</Text>
          </View>
          <Text>{i18n.t("forgotPassword")}</Text>
        </View>
      </View>
    );
  };

  const ActionButtons = () => {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Button
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          {i18n.t("login")}
        </Button>
        <Button
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          {i18n.t("loginGoogle")}
        </Button>
        <Button
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          {i18n.t("loginFacebook")}
        </Button>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text>{i18n.t("dontHaveAccount")}</Text>
          <Text>{i18n.t("signup")}</Text>
        </View>
        <Text>{i18n.t("tosWarning")}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Header()}
      {LoginForm()}
      {ActionButtons()}
      {/* {Footer()} */}
    </View>
  );
};

export default Login;
