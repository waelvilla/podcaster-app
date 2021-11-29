import { StyleSheet } from "react-native";
import Colors from "../../utils/constants/Colors";

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  welcomeView: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginView: {
    marginBottom: 30,
    alignItems: "center",
    marginTop: 30,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.dark.background,
  },
  textInput: {
    color: '#5C5E6F',
    backgroundColor: "#1D192C",
    borderWidth: 0,
    height: 42,
    marginVertical: 5,
  },
  checkboxView: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
  },
});

export default styles;
