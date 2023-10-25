import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import { React, useState, useEffect } from 'react'
// import { useNavigation } from '@react-navigation/native'

import TextBox from '../../components/TextBox'
import PageTitle from '../../components/PageTitle'
import styles from './style'
import api from '../../contains/api'
// import { json } from 'body-parser'


const Login = ({ navigation }) => {
    let [response, setResponse] = useState()
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState()
    const [Username, setUsername] = useState('')
    // const navigation = useNavigation()
    const [Password, setPassword] = useState('')
    let status
    let getLogin = () => {
        // let user = { Username: Username, Password: Password }
        // console.log(user)
        tempapi = api.toString()
        console.log(typeof (api.api))
        if (Username.length == 0 || Password.length == 0) {
            alert('Do not let Email or Password empty')
            return
        }
        setIsLoading(true)
        fetch(api.api + '/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({
                    'Username': Username,
                    "Password": Password
                })

        })
            .then(
                res => {
                    status = res.status
                    result = res.json()
                    return Promise.all([status, result])
                })
            .then(([status, result]) => {
                setIsLoading(false)
                setResponse(result)
                console.log(result)
                console.log(status)
                // navigation.navigate()
                if (status == 200) {
                    navigation.navigate('Main', result)
                }
                else {
                    alert('Wrong account or password')
                }
            },
                (error) => {
                    setIsLoading(false)
                    setError(error)
                    // console.log(error)
                    console.log(fetch)
                }
            )
    };

    const getContent = (text) => {
        if (isLoading) {
            return <ActivityIndicator size="large" />
        }
        if (error) {
            // console.log(error)
            return <Text style={styles.ButtonText}>{text}</Text>
        }
        // console.log(response)
        return <Text style={styles.ButtonText}>{text}</Text>
    }

    return (
        <View style={styles.main}>
            <View style={styles.PageTitle}>
                <PageTitle Text={'Login'} />
            </View>
            <View style={styles.loginBox}>
                {/* <TextBox Title={'Email'} Security={false} /> */}
                {/* <TextBox Title={'Password'} Security={true} /> */}
                <View style={styles.Container}>
                    <Text style={styles.Title}>Email</Text>
                    <TextInput style={styles.Box} secureTextEntry={false}
                        onChangeText={newtext => setUsername(newtext)}></TextInput>
                </View >
                <View style={styles.Container}>
                    <Text style={styles.Title}>Password</Text>
                    <TextInput style={styles.Box} secureTextEntry={true}
                        onChangeText={newtext => setPassword(newtext)}></TextInput>
                </View >
                <TouchableOpacity onPress={getLogin}>

                    <View style={styles.ButtonContainer}>
                        <View style={styles.loginButton}>
                            {getContent('Login')}
                            {/* <Text style={styles.ButtonText}>Login</Text> */}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>

                    <View style={styles.ButtonContainer}>
                        <View style={[styles.loginButton, { backgroundColor: '#42B72A' }]}>
                            {getContent('Sign Up')}
                            {/* <Text style={styles.ButtonText}>Login</Text> */}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            {/* {getContent()} */}
        </View >
    )
}

export default Login