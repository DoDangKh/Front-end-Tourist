import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { React, useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

// import index from '../../components/PageTitle/index'
import PageTitle from '../../components/PageTitle'

const SignUp = ({ navigation }) => {
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState()
    const [Name, setName] = useState('')
    const [Phonenum, setPhonenum] = useState('')
    const [Address, setAddress] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ndPassword, setndPassword] = useState('')

    let SignUp = () => {
        setIsLoading(true)
        fetch('http://192.168.0.38:3000/api/v1/user/SignUp', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({
                    'Name': Name,
                    'Phonenum': Phonenum,
                    'Address': Address,
                    'Email': Email,
                    'Password': Password
                })
        }).then(
            res => {
                code = res.status
                result = res.json()
                return Promise.all([code, result])
            }
        ).then(([code, result]) => {
            setIsLoading(false)
            if (code == 200) {
                alert('Sign Up successfully')
                navigation.goBack()
            }
            else {
                alert('Email or Phonenum already exist')
            }
        },
            (error) => {
                setIsLoading(false)
            })
    }

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
        <ScrollView style={[styles.main, { paddingTop: 50 }]}>
            <View style={styles.PageTitle}>
                <PageTitle Text={'Register'} />
            </View>
            <View style={styles.loginBox}>
                {/* <TextBox Title={'Email'} Security={false} /> */}
                {/* <TextBox Title={'Password'} Security={true} /> */}
                <View style={styles.Container}>
                    <Text style={styles.Title}>Name</Text>
                    <TextInput style={styles.Box} secureTextEntry={false}
                        onChangeText={newtext => setName(newtext)}></TextInput>
                </View >
                <View style={styles.Container}>
                    <Text style={styles.Title}>Phonenum</Text>
                    <TextInput style={styles.Box} secureTextEntry={true}
                        onChangeText={newtext => setPhonenum(newtext)}></TextInput>
                </View >
                <View style={styles.Container}>
                    <Text style={styles.Title}>Address</Text>
                    <TextInput style={styles.Box} secureTextEntry={true}
                        onChangeText={newtext => setAddress(newtext)}></TextInput>
                </View >
                <View style={styles.Container}>
                    <Text style={styles.Title}>Email</Text>
                    <TextInput style={styles.Box} secureTextEntry={true}
                        onChangeText={newtext => setEmail(newtext)}></TextInput>
                </View >
                <View style={styles.Container}>
                    <Text style={styles.Title}>Password</Text>
                    <TextInput style={styles.Box} secureTextEntry={true}
                        onChangeText={newtext => setPassword(newtext)}></TextInput>
                </View >
                <View style={styles.Container}>
                    <Text style={styles.Title}>Repeat Password</Text>
                    <TextInput style={styles.Box} secureTextEntry={true}
                        onChangeText={newtext => setndPassword(newtext)}></TextInput>
                </View >
                <TouchableOpacity onPress={SignUp}>

                    <View style={styles.ButtonContainer}>
                        <View style={styles.loginButton}>
                            {getContent('Sign Up')}
                            {/* <Text style={styles.ButtonText}>Login</Text> */}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <View style={styles.ButtonContainer}>
                        <View style={[styles.loginButton, { backgroundColor: 'red' }]}>
                            {getContent('Return')}
                            {/* <Text style={styles.ButtonText}>Login</Text> */}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default SignUp