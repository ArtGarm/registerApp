import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {COLOR, ThemeContext, getTheme} from 'react-native-material-ui';

import Login from './src/screens/Login/index';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

const App: () => React$Node = () => {
  return (
    <>
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.fullHeight}>
          <Login />
        </SafeAreaView>
      </ThemeContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
});

export default App;
