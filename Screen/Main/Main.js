import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style'

const Main = ({ navigation, route }) => {
    // console.log(navigation.getParam('user'))
    // console.log(route.params.token)
    let gotoTourManagement = () => {
        // console.log(route)
        res = route.params
        console.log(res)
        navigation.navigate('Tours', params = res)
    }

    return (
        <View style={styles.main}>
            <View style={styles.picContainer}>

                <Image source={require('../../assets/a.png')} style={styles.pic} ></Image>
            </View>
            <View style={styles.menu}>
                <View style={styles.leftMenu}>
                    <TouchableOpacity onPress={gotoTourManagement}>
                        <View style={[styles.menuChoice, { backgroundColor: '#00A896' }]}>
                            <Text style={styles.menuText}>Tour Management</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.menuChoice, { backgroundColor: '#F7749A' }]}>
                            <Text style={styles.menuText}>Account Management</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightMenu}>
                    <TouchableOpacity>
                        <View style={[styles.menuChoice, { backgroundColor: '#C25BA3' }]}>
                            <Text style={styles.menuText}></Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.menuChoice, { backgroundColor: '#FC886C' }]}>
                            <Text style={styles.menuText}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Main