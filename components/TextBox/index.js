import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from './style'

const TextBox = (props) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>{props.Title}</Text>
            <TextInput style={styles.Box} secureTextEntry={props.Security}></TextInput>
        </View >
    )
}

export default TextBox