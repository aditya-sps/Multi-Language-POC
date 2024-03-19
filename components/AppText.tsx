import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface AppTextProps {
  text: string;
}

const AppText = ({text}: AppTextProps) => {
  const getTranslatedText = () => {
    let translatedText = '';
    if (text?.trim()) {
      translatedText = text;
    }
    return translatedText;
  };

  return (
    <View>
      <Text>{getTranslatedText()}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({});
