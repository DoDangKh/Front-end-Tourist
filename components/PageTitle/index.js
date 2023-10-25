import { View, Text } from 'react-native'
import React from 'react'

import styles from './style'

const PageTitle = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.Text}>{props.Text}</Text>
        </View>
    )
}

export default PageTitle