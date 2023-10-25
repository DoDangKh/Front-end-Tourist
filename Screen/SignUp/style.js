import { StyleSheet } from "react-native";

import colors from "../../contains/colors";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
    PageTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    loginBox: {
        flex: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    loginButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.Button,
        height: 50,
        borderRadius: 10,
    },
    ButtonContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,

    },
    ButtonText: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
        // color: colors.Title,
    },
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