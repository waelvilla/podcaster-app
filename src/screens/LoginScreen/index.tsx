import React, { useState } from "react";
import i18n from "i18n-js";
import { Input, Checkbox, Button, Text as NBText, Spinner } from "native-base";
import { GRADIENT_START, GRADIENT_END } from "../../utils/constants/Colors";
import { View, Text } from "../../components/Themed";
import styles from "./styles";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import LinearButton from "../../components/Buttons/LinearButton";
import IconButton from "../../components/Buttons/IconButton";
import { TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../utils/types";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../gql/mutations";
import encrypt from "../../utils/encrypt";
import { useEffect } from "react";

i18n.translations = {
  en: {
    appName: "Podcaster",
    subtitle: "your daily dose of happiness",
    forgotPassword: "Forgot password?",
    rememberMe: "Remember me",
    welcomeBack: "Welcome Back!",
    loginSubtitle: "Login to continue where you left off!",
    login: "Log in",
    or: "OR",
    loginGoogle: "Continue with Google",
    loginFacebook: "Continue with Facebook",
    dontHaveAccount: "Don't have an account?",
    signup: "Sign up",
    errorLogin: "error occurred while logging you in",
    tosWarning:
      "By singing up you indicate that you have read and agreed to the Terms of Service",
  },
};
const Login = ({ navigation }: RootTabScreenProps<"Login">) => {
  const [rememberMe, setRememberMe] = useState(true);
  const [username, setUsername] = useState("wael");
  const [password, setPassword] = useState("hello");

  const [mutate, { loading, data: loginResponse, error: loginError }] =
    useMutation(LOGIN_MUTATION, {
      onError: (err) => {
        console.log("error: ", err);
      },
    });

  useEffect(() => {
    if (loginResponse?.loginUser) {
      navigation.navigate("Root", { screen: "Home" });
    }
  }, [loginResponse, loginError]);

  const onClickLogin = async () => {
    const encryptedPass = await encrypt(password);
    console.log("pass:", encryptedPass);

    mutate({ variables: { username, password: encryptedPass } });
  };

  const Header = () => {
    return (
      <View style={styles.headerView}>
        <MaskedView
          style={{ height: 70, width: "100%" }}
          maskElement={
            <NBText
              style={{ textAlign: "center", letterSpacing: 3 }}
              fontSize="5xl"
            >
              {"PODCASTER"}
            </NBText>
          }
        >
          <LinearGradient
            colors={[GRADIENT_START, GRADIENT_END]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
        <Text style={{ color: "#CCC", fontFamily: "space-mono" }}>
          {i18n.t("subtitle")}
        </Text>
        {WelcomeBack()}
      </View>
    );
  };

  const WelcomeBack = () => {
    return (
      <View style={styles.welcomeView}>
        <NBText fontSize="lg" color="white">
          {i18n.t("welcomeBack")}
        </NBText>
        <NBText fontSize="xs" color="#999999">
          {i18n.t("loginSubtitle")}
        </NBText>
      </View>
    );
  };

  const LoginForm = () => {
    return (
      <View style={styles.loginView}>
        <Input
          placeholder="enter your username"
          type="text"
          style={styles.textInput}
          value={username}
          onChangeText={(text) => setUsername(text)}
          w={{
            base: "75%",
            md: "25%",
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
          w={{
            base: "75%",
            md: "25%",
          }}
        />
        <View style={styles.checkboxView}>
          <View style={styles.flexRow}>
            <Checkbox
              value={"rememberMe"}
              isChecked={rememberMe}
              accessibilityLabel="Remember Me"
              colorScheme="trueGray"
              backgroundColor="#1D192C"
              defaultIsChecked
              onChange={(newVal) => setRememberMe(newVal)}
            />
            <NBText color="#999999" fontSize="xs">
              {"\t"}
              {i18n.t("rememberMe")}
            </NBText>
          </View>
          <NBText color="#999999" fontSize="xs">
            {i18n.t("forgotPassword")}
          </NBText>
        </View>
      </View>
    );
  };

  const ActionButtons = () => {
    if (loading) {
      return <Spinner color="white" />;
    }
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        {loginError ? (
          <NBText textAlign="center" color="red.500">
            {i18n.t("errorLogin")}
          </NBText>
        ) : null}
        <LinearButton text="Login" onPress={onClickLogin} />
        <NBText
          style={{
            color: "#999999",
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          {i18n.t("or")}
        </NBText>
        <IconButton
          text={i18n.t("loginGoogle")}
          image={require("../../../assets/images/google.png")}
        />
        <IconButton
          text={i18n.t("loginFacebook")}
          style={{
            backgroundColor: "#3b5999",
            marginTop: 10,
            marginBottom: 30,
          }}
          textStyle={{ color: "#FFF" }}
          image={require("../../../assets/images/facebook.png")}
        />
      </View>
    );
  };

  const Footer = () => {
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <NBText
            style={{
              color: "#999999",
            }}
          >
            {i18n.t("dontHaveAccount")}
          </NBText>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <NBText color="#FB6580">{i18n.t("signup")}</NBText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            width: "75%",
            alignSelf: "center",
            marginBottom: 40,
            marginTop: 60,
          }}
        >
          <NBText
            style={{ textAlign: "center", color: "#999999" }}
            fontSize="xs"
          >
            {i18n.t("tosWarning")}
          </NBText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Header()}
      {LoginForm()}
      {ActionButtons()}
      {Footer()}
    </View>
  );
};

export default Login;
