import { StyleSheet } from "react-native";

import colors from "../../contains/colors";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background
    },
    titleContainer: {
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        // backgroundColor: 'blue',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 23
    },
    smallTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallTitle: {
        fontSize: 20,
    },
    Image: {
        flex: 1,
    },
    itemContainer: {
        flex: 10,
        // flexDirection: 'column'
        // backgroundColor: 'red',
    },
    itemBox: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        // flex: 1,
        flexDirection: 'row',
    },
    content: {
        flex: 3,
        paddingLeft: 10,
        justifyContent: "space-evenly"
    },
    pic: {
        // flex: 1,
        height: 80,
        width: 80,

    },
})

export default styles