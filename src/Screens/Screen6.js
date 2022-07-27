import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { View,TouchableOpacity } from 'react-native'
import Logo from '../Components/Logo'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import TabsT from '../Components/Tabs/TabsT'
import Back from '../Components/Back'
import Unorderedlist from 'react-native-unordered-list';

const Screen3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
       <View style={{flex:1, flexDirection:"row", marginLeft:5, marginLeft:5}}>
         <Back />
         <View style={{marginLeft:100,marginTop:30}}>
            <Logo />
         </View>
         </View>
         <View style={{flex:3, flexDirection:"row",marginTop:30, marginLeft:5}}>
            <Text style={{fontSize:35}}>
                Reflecting on worry
            </Text>
            <Text style={{color:"#3897ce",marginTop:90,marginLeft:-275,fontSize:30}}>
                Headline Style 1
            </Text>
            <Text style={{color:"#3da43d",marginTop:130,marginLeft:-195,fontSize:26}}>
                Headline Style 2
            </Text>
         </View>
         <View style={{flex:6, flexDirection:"row",marginTop:20, marginLeft:5}}>
            <Text style={{fontSize:16, lineHeight:24,marginRight:20}}>
                Duis esse reprehenderit elit reprehenderit tempor laboris pariatur voluptate.Minim ipsum tempor culpa Lorem ipsum fugiat nisi. Ipsum veniam in adipisicing dolore deserunt sit. Nostrud do enim proident dolor nulla anim est pariatur sit culpa ut. Non Lorem esse ullamco dolore sunt excepteur veniam sint. Cillum duis.
            </Text>
            <Text style={{color:"black",marginTop:150,marginLeft:-378,fontSize:22}}>
                Headline Style 3
            </Text>
            <View style={{marginTop:190,marginLeft:-120}}>
            <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30 }}>
                </Unorderedlist>
                <Text style={{marginTop:-22,marginLeft:20,fontSize:15}}> Reprehenderit enim pariatur duis tempor proident.</Text>

            </View>
            <View style={{marginTop:220,marginLeft:-320}}>
            <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30 }}>
                </Unorderedlist>
                <Text style={{marginTop:-22,marginLeft:20}}> Reprehenderit enim pariatur duis tempor proident.</Text>

            </View>
            <View style={{marginTop:250,marginLeft:-310}}>
            <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30 }}>
                </Unorderedlist>
                <Text style={{marginTop:-22,marginLeft:20}}> Reprehenderit enim pariatur duis tempor proident.</Text>

            </View>
           
            
         </View>
         <View style={{flex:6, flexDirection:"row",marginTop:20, marginLeft:5}}>
         <Text style={{color:"black",fontSize:22}}>
                Headline Style 3
            </Text>
            <View>
                <Text style={{fontSize:16, lineHeight:24,marginRight:20,marginLeft:-143,marginTop:40}}>
                Duis esse reprehenderit elit reprehenderit tempor laboris pariatur voluptate.Minim ipsum tempor culpa Lorem ipsum fugiat nisi. Ipsum veniam in adipisicing dolore deserunt sit. Nostrud do enim proident dolor nulla anim est pariatur sit culpa ut. Non Lorem esse ullamco dolore sunt excepteur veniam sint. Cillum duis.
            </Text>
            </View>
            

         </View>
         <View style={{marginTop:100}}>
            <TabsT />
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollView: {
    backgroundColor: 'white',
    
  },
  text: {
    fontSize: 42,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 335,
    height: 57,
    marginHorizontal: -285,
    marginTop: 10,
    shadowColor: '#98989c',
    shadowOpacity: 2,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 30,
    elevation: 20,
    backgroundColor: 'white'


},
});

export default Screen3;