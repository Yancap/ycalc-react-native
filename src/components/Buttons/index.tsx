import React from 'react';
import { View, Pressable, Text } from 'react-native';
import CleanSVG from './assets/clean.svg';
import DivisionSVG from './assets/division.svg';
import EqualSVG from './assets/equal.svg';
import MinusSVG from './assets/minus.svg';
import ModSVG from './assets/mod.svg';
import ParenthesesSVG from './assets/parentheses.svg';
import PlusSVG from './assets/plus.svg';
import MultiplySVG from './assets/multiply.svg';
import BackspaceSVG from './assets/backspace.svg';

import {styles} from './styles';

interface Props {
  type: 'clean' | 'number' | 'operator' | 'equal' | 'other';
  value: string;
  action: (value: string) => void;
}
export default function Button({ type, value, action}: Props) {
  
  const icons = {
    clean: <CleanSVG width={20} height={28} />,
    division: <DivisionSVG width={20} height={28} />,
    equal: <EqualSVG width={20} height={28} />,
    minus: <MinusSVG width={20} height={28} />,
    mod: <ModSVG width={20} height={28} />,
    parentheses: <ParenthesesSVG width={28} height={36} />,
    plus: <PlusSVG width={20} height={28} />,
    multiply: <MultiplySVG width={20} height={28} />,
    backspace: <BackspaceSVG width={20} height={28} />
  };
  return (
    <Pressable onPressIn={() => { action(value) }} 
      style={({pressed}) => [ {opacity: pressed ? .85 : 1} ]}
    >
      <View style={[styles.button, styles[type]]}>
        {value in icons ? 
          icons[value] : 
          <Text style={styles.value}>
            {value}
          </Text>
        }
      </View>
    </Pressable>
  );
}
