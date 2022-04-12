import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Home from './src/Screens/Home/Home';
import styles from './src/Screens/Home/styles';
import store from './src/redux/store';
import { Provider } from 'react-redux';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Home />
      </Provider>
    </View>
  );
};

export default App