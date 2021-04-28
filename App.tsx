 import React from 'react';
 import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
 
 import {Colors} from 'react-native/Libraries/NewAppScreen';
 import HomeScreen from './src/screens/HomeScreen';
 import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <HomeScreen />
     </SafeAreaView>
   );
 };
 
 export default App;
 