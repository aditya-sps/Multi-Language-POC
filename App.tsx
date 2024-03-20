/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import './services/i18next';
import Navigation from './Navigation';
import Languages from './components/Languages';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

export const MyContext = createContext<any>({});

function App(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const {i18n} = useTranslation();

  return (
    <MyContext.Provider value={{showModal, setShowModal}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <Languages
          modalVisible={showModal}
          onItemPress={(value: string) => {
            i18n.changeLanguage(value);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      </SafeAreaProvider>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
