import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Flashlights from './pages/flashlights/flashlights';
import ColorScreen from "./pages/colored/colored "
import SosScreen from './pages/sos/sos';
import Home from './pages/home/home';









const Drawer = createDrawerNavigator();


export default function App() {






  return (
    <NavigationContainer>



      <Drawer.Navigator  initialRouteName='Home'  >
      
       <Drawer.Screen  name='Home' component={Home}  options={{headerShown: false}}
              
    />
       <Drawer.Screen  name='Sos' component={SosScreen}  options={{headerShown: false}}
         
    />
         <Drawer.Screen  name='Flash' component= {Flashlights} options={{headerShown: false}}
         /> 
           <Drawer.Screen  name='Color' component={ColorScreen}  options={{headerShown: false}}
           />  

      </Drawer.Navigator>


    </NavigationContainer>

  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   

  },
});
