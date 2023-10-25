import { StyleSheet } from "react-native";

import colors from "../../contains/colors";

const styles = StyleSheet.create({
    Box: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.Textbackground,
    },
    Container: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    Title: {
        fontSize: 15,
        color: colors.Title,
    }
})

export default styles