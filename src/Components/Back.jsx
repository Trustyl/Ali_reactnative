import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Back({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Setup')}>
                    <View>
                        <Ionicons name="arrow-back" size={24} color="grey" style={{marginTop:40}} />
                   <Text style={{ color:"grey",marginTop:-18,marginLeft:30}}>BACK</Text> 
                    </View>
                   
                </TouchableOpacity>
    </View>
  )
}