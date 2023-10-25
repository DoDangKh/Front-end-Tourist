import { View, Text, Image } from 'react-native'

import { React, useEffect, useState } from 'react'
import styles from './styles'
import colors from "../../contains/colors";
import api from '../../contains/api';

const Tours = ({ navigation, route }) => {
    console.log(route.params)
    const [Name, setName] = useState('aaaa')
    useEffect(() => {
        // console.log(idUser)
        getTours()

    }, [])

    let getTours = async () => {
        await fetch(api.api + '/tour/user-tour', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + route.params.token
            },
            body: JSON.stringify({
                'idUser': route.params.user.idUser,
                'role': 0
            })
        })
            .then(
                res => {
                    console.log(1)
                    status = res.status
                    result = res.json()
                    console.log(status)
                    return Promise.all([status, result])
                }
            )
            .then(([status, result]) => {
                console.log(result.tour[0].Name)
                setName(result.tour[0].Name)
            },
                (error) => {
                    console.log(error)
                })
    }
    return (
        // <View style={{ backgroundColor: colors.background, }}>
        <View style={styles.main}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Your Tours</Text>
            </View>
            <View style={styles.smallTitleContainer}>
                <Text style={styles.smallTitle}>Hope you enjoy your trip</Text>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.itemBox}>
                    <View style={styles.Image}>
                        <Image source={require('../../assets/b.png')} style={styles.pic}></Image>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 13, color: '#7D848D' }}>26 January 2022</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Name}</Text>
                        <Text style={{ fontSize: 13, color: '#7D848D' }}>Descrip</Text>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Tours