import { Image,StatusBar,View, Text,SafeAreaView,ScrollView,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../Components/Logo'
import { Ionicons } from '@expo/vector-icons';;
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Tips from '../Components/Tips'
import { RadioButton} from 'react-native-paper';
import Tabs2 from '../Components/Tabs/TabsW'

export default function Screen5() {
    const [value, setValue] = React.useState('first');
  return (
    
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1, flexDirection:"column",marginLeft:10,marginRight:10}}>
            <View style={{marginLeft:165}}>
                <Logo  />
            </View>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:33}}>Worry time!</Text>
                <Ionicons name="md-trash-outline" size={25} color="grey" style={{marginLeft:140,marginHorizontal:20,marginTop:10}} />
                <FontAwesome name="star" size={25} color="#018a00" style={{marginTop:10}} />
            </View>
        </View>
        <View style={{flex:4, flexDirection:"column",marginVertical:30,marginLeft:10}}>
          <View>
            <Text style={{fontSize:31, color:"#20971f"}}>I'm stressed about</Text>
            <TouchableOpacity>
            <Octicons name="pencil" size={20} color="grey" style={{marginLeft:340,marginTop:-30}}/>
            </TouchableOpacity>
            <Text style={{fontSize:31, color:"#20971f"}}>losing my job</Text>
          </View>
          <View style={{marginTop:20}}>
            <TouchableOpacity>
            <Octicons name="pencil" size={20} color="grey" style={{marginLeft:340,marginTop:-2,position:"absolute"}}/>
            </TouchableOpacity>
          <Text style={{fontSize:14, color:"black",marginRight:90,lineHeight:22}}>Consectetur cillum ullamco est magna tempor sint aliqua. Tempor in non sunt do consectetur in Lorem tempor voluptate minim. Magna est magnDolor culpa minim excepteur qui enim laboris aute exercitation nostrud in sunt esse. Duis consectetur aliq
            </Text>
            <Text style={{fontSize:14, color:"black",marginRight:250,lineHeight:22, marginTop:20}}>
                Consectetur cillum ullamco est magna tempor sint aliqua.  nostrud in sunt esse. Duis consectetur aliq
            </Text>
        </View>
       </View>
        <View style={{flex:6, flexDirection:"column",marginVertical:30,marginLeft:10}}>
            <View>
                <Text style={{fontSize:18,color:"#3696cd" ,fontWeight:"bold" }}>Sort my worry</Text>
                <Text style={{marginTop:10,color:"#52ae51"}}>This step helps address my worry more effectively.</Text>
            </View>
            <View style={{position:"absolute",marginLeft:330}}><Tips /></View>
            <View>
            <View>
      
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{flexDirection:"row",marginTop:10}}>
        <RadioButton value="first"color="#3696cd"uncheckedColor="#3696cd" />
        <Text style={{fontSize:15,marginTop:8}}>Solvable</Text>
        <Text style={{fontSize:11,marginTop:30,color:"#bdbdbd",marginLeft:-52}}>I can come up with solutions for this worry or problem</Text>
      </View>
      <View style={{flexDirection:"row",marginTop:10}}>
        <RadioButton value="second" color="#3696cd" uncheckedColor="#3696cd"/>
        <Text style={{fontSize:15,marginTop:8}}>Unsolvable</Text>
        <Text style={{fontSize:11,marginTop:30,color:"#bdbdbd",marginLeft:-68,marginRight:200}}>There are no solutions to this worry and/or I can't solve it because it is not under my control</Text>
      </View>
      <View style={{flexDirection:"row",marginTop:10}}>
        <RadioButton value="Third" color="#3696cd"uncheckedColor="#3696cd"/>
        <Text style={{fontSize:15,marginTop:8}}>Solved</Text>
        <Text style={{fontSize:11,marginTop:30,color:"#bdbdbd",marginLeft:-44,marginRight:190}}>This worry is no longer an issue because i already solved it, someone else solved it, or it solved itself.</Text>
      </View>
      <View style={{flexDirection:"row",marginTop:10}}>
        <RadioButton value="fourth" color="#3696cd"uncheckedColor="#3696cd"/>
        <Text style={{fontSize:15,marginTop:8}}>Not sure</Text>
        <Text style={{fontSize:11,marginTop:30,color:"#bdbdbd",marginLeft:-55,marginRight:200}}>I don't know if I can solve this worry or not.</Text>
      </View>
    </RadioButton.Group>

    </View>
            </View>

            <View style={{flex:6, flexDirection:"column",marginVertical:30,marginLeft:1}}>
            <View>
                <Text style={{fontSize:18,color:"#3696cd",fontWeight:"bold" }}>Solve my worry</Text>
                <Text style={{marginTop:10,color:"#52ae51"}}>What can i do to solve this worry?</Text>
            </View>
            <View style={{position:"absolute",marginLeft:330}}><Tips /></View>
            <View style={{marginTop:20}}>
            <TouchableOpacity>
            <Octicons name="pencil" size={20} color="grey" style={{marginLeft:340,marginTop:-2,position:"absolute"}}/>
            </TouchableOpacity>
          <Text style={{fontSize:14, color:"black",marginRight:90,lineHeight:22}}>tion nostrud in sunt esse. Duis consectetur aliqr  sdhvhd confdev sgudvhjdhdbdv frects jsshcb.
            </Text>
            <Text style={{fontSize:14, color:"black",marginRight:250,lineHeight:22, marginTop:20}}>
                t aliqua.  nostrud in sunt esse. Duis consectetur aliq Lorem Loremlorem

            </Text>
            <Image source = {{uri:'https://cdn.dribbble.com/users/112330/screenshots/16462649/media/7d0abc3a695db549779190d707388197.png?compress=1&resize=1000x750&vertical=top'}}
                            style = {{ width: 70, height: 70, borderRadius:100, marginTop:50 }}> 
                            
            </Image>
            <Text style={{marginLeft:80,marginTop:-70,marginRight:20}}>
                 If your anxiety is extremely intensive, very frequent, and keeps soo long, or if it is having a significance negative impact on your life - seek professional support. Aiding for help is one of the most effective  strategies there is.               
            </Text>
        </View>
        </View>
        <View style={{ flexDirection: "row",marginTop:-20 }}>
                        <TouchableOpacity>
                            <Text style={{ color: "red", fontSize: 18, marginTop: 50, marginLeft: 10 }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ backgroundColor: "#018a00", height: 47, width: 160, marginTop: 35, borderRadius: 30, marginLeft: 130, alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 18, marginTop: 12, marginLeft: 0}}>Save my worry</Text>
                        </TouchableOpacity>
                    </View>
         <View style={{height:85}}>

         </View>
        <View style={{marginTop:800,marginLeft:-10,position:"absolute"}}>
        <Tabs2 />
        </View>
            


        </View>
      </ScrollView>
      </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
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