import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//Logo class component 
export default class Logo extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={require('../Images/kisspng-donation-ada-signs-gift-house-business-your-logo-5b15e624282673.1885492315281618281645.png')}
                />
            </View>
        )
    }
}
//You can modify the looks of your code here.
const styles = StyleSheet.create({
    
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});