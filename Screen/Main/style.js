import { StyleSheet } from "react-native";

import colors from "../../contains/colors";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
    picContainer: {
        flex: 1,
        // backgroundColor: 'red'
    },
    pic: {
        flex: 1,
        height: null,
        width: null,

    },
    menu: {
        flex: 2,
        flexDirection: 'row',
        // backgroundColor: 'blue',
    },
    leftMenu: {
        flex: 1,
        // backgroundColor: 'green',
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    rightMenu: {
        flex: 1,
        // backgroundColor: 'green',
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    menuChoice: {
        // backgroundColor: 'red',
        height: 200,
        width: 180,
        marginTop: 60,
        // borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 10,
    },
    menuText: {
        color: 'white',
        fontSize: 16,
        // fontWeight: 'bold',

    }
})

export default styles