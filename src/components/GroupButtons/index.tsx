import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Button from '../Buttons';
import {useScreen} from '../../context/ScreenContext';

export default function GroupButtons() {
  const {
    setInput,
    setOnScreen,
    setControlPoint,
    controlPoint,
    getResults,
    setPressEqual,
    pressEqual,
    result
  } = useScreen();

  function handleClean() {
    setInput('');
    setOnScreen('');
    setControlPoint(true);
    setPressEqual(false)
  }
  function handleBackspace() {
    setInput(input => {
      if (input[input.length - 1] === '.') {
        setControlPoint(true);
        return input.substring(0, input.length - 1)
      }
      return input.substring(0, input.length - 1)
    });
    setOnScreen(onScreen => {
      if (onScreen[onScreen.length - 1] === '.') {
        setControlPoint(true);
        return onScreen.substring(0, onScreen.length - 1)
      }
      return onScreen.substring(0, onScreen.length - 1)
    });
  }
  function handleAddValue(value: string) {
     
    let valuesForInput =
      value === 'mod'
        ? '%'
        : value === 'division'
        ? '/'
        : value === 'multiply'
        ? '*'
        : value === 'minus'
        ? '-'
        : value === 'plus'
        ? '+'
        : value;

    let valuesForOnScreen =
      value === 'division' ? '÷' : value === 'multiply' ? 'x' : valuesForInput;

    setInput(input => handleInput(input, valuesForInput).replace(/[x]/g, '*'));
    setOnScreen(onScreen => handleInput(onScreen, valuesForOnScreen));
  }
  function handleEqual(value: string) {
    setPressEqual(true)
    getResults();
  }
  function handleInput(state: string, value: string) {
    if(pressEqual) {
      setPressEqual(false)
      state = String(result)
    }
    
    if (state === '') {
      if (!isNaN(Number(value))) return state + value;
      else if (value == '-') return state + value;
      return state;
    }

    if (!isNaN(Number(value))) {
      return state + value;
    } else {
      if (value === '.') {
        if (isNaN(Number(state[state.length - 1])) && controlPoint) {
          setControlPoint(false);
          return state + '0.';
        } else if (controlPoint) {
          setControlPoint(false);
          return state + value;
        }
      } else if (value === 'parentheses') {
        setControlPoint(true);
        if (!isNaN(Number(state[state.length - 1])) && !state.includes('('))
          return state + 'x' + '(';
        else if (!state.includes('(')) return state + '(';
        else {
          let quantityR = state.match(/[(]/g)?.length; // (
          let quantityL = state.match(/[)]/g)?.length; // )

          if (
            isNaN(Number(state[state.length - 1])) &&
            state[state.length - 1] !== '(' &&
            state[state.length - 1] !== ')'
          )
            return state + '(';
          else if (state[state.length - 1] === '(') return state + '(';
          else if (quantityR !== quantityL) return state + ')';
          else if (state[state.length - 1] === ')') return state + 'x' + '(';
          else return state + ')';
        }
      } else {
        setControlPoint(true);
        if (!isNaN(Number(state[state.length - 1]))) return state + value;
        if (state[state.length - 1] === ')') return state + value;
      }
    }
    return state;
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button value="clean" type="clean" action={handleClean} />
        <Button value="parentheses" type="operator" action={handleAddValue} />
        <Button value="mod" type="operator" action={handleAddValue} />
        <Button value="division" type="operator" action={handleAddValue} />
      </View>

      <View style={styles.row}>
        <Button value="7" type="number" action={handleAddValue} />
        <Button value="8" type="number" action={handleAddValue} />
        <Button value="9" type="number" action={handleAddValue} />
        <Button value="multiply" type="operator" action={handleAddValue} />
      </View>

      <View style={styles.row}>
        <Button value="4" type="number" action={handleAddValue} />
        <Button value="5" type="number" action={handleAddValue} />
        <Button value="6" type="number" action={handleAddValue} />
        <Button value="minus" type="operator" action={handleAddValue} />
      </View>

      <View style={styles.row}>
        <Button value="1" type="number" action={handleAddValue} />
        <Button value="2" type="number" action={handleAddValue} />
        <Button value="3" type="number" action={handleAddValue} />
        <Button value="plus" type="operator" action={handleAddValue} />
      </View>

      <View style={styles.row}>
        <Button value="backspace" type="other" action={handleBackspace} />
        <Button value="0" type="number" action={handleAddValue} />
        <Button value="." type="other" action={handleAddValue} />
        <Button value="equal" type="equal" action={handleEqual} />
      </View>
    </View>
  );
}
