import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';

import {styles} from './styles';
import Header from './components/Header';
import GroupButtons from './components/GroupButtons';
import ResultScreen from './components/ResultScreen';
import {ScreenProvider} from './context/ScreenContext';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [input, setInput] = useState(0);
  return (
    <ScreenProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <ResultScreen />
        <GroupButtons />
      </SafeAreaView>
    </ScreenProvider>
  );
}

export default App;
