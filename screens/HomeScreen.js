import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View ,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreenNew = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = () => {
  return <Text>This is Jane's profile</Text>;
};

class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      data: "some App Data"
    }

  }
  show=()=>
  {
    alert("Welcome to React Native Button")
  }

  render(){
       return(
         <View style={{flex:1,justifyContent: "center"}}>
          <View style={{flex:1,height:100}}>
          <View style={{flex:1, height: 50, backgroundColor: 'powderblue',alignItems:'stretch'}} />
          <TouchableOpacity style={{padding:15,backgroundColor:'steelblue'}}>
          <Text>This is TouchableOpacity Button</Text>
          </TouchableOpacity >
          <View style={{flex:3, height: 50, backgroundColor: 'skyblue',}} />
          <Text style={{fontSize:30}}>
          {this.state.data}
          </Text>
          <Button title="click click"onPress={()=>{this.setState({data:"New App Data"})}} color='powderblue'/>

       <View style={{flex:4, height: 50, backgroundColor: 'steelblue'}} />
            <Text >Hi Mansi...Here only
            A basic button component that shouldht for your app, you can build your own button using TouchableOpacity or TouchableWithoutFeedback. For inspiration, look at the source code for this button component. Or, take a look at the wide variety of button components built by the community.</Text>
            <Button title="clickme please"onPress={this.show} color="#841584"/>
          </View>
          </View>
        )
      }


}

export default HomeScreen
