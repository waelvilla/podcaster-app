import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.dark.background,
    },
    textInput: {
        backgroundColor: '#1D192C',
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
        flexDirection: 'row',
    }
})

export default styles;