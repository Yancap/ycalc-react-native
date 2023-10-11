import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import React from 'react';

interface ScreenInfo {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  onScreen: string;
  setOnScreen: Dispatch<SetStateAction<string>>;
  result: number | undefined;
  setResult: Dispatch<SetStateAction<number | undefined>>;
  controlPoint: boolean;
  setControlPoint: Dispatch<SetStateAction<boolean>>;
  pressEqual: boolean;
  setPressEqual: Dispatch<SetStateAction<boolean>>;
  getResults(): void;
}

const ScreenContext = createContext({} as ScreenInfo);

interface ScreenProviderProps {
  children: ReactNode;
}

export function ScreenProvider({children}: ScreenProviderProps) {
  const [input, setInput] = useState('');
  const [onScreen, setOnScreen] = useState('');
  const [result, setResult] = useState<number>();
  const [controlPoint, setControlPoint] = useState(true);
  const [pressEqual, setPressEqual] = useState(false);

  function getResults() {
    const inputCleaned = input.replace(/[^*+\-\/()%.,\d]/g, '');

    setResult(result => {
      try {
        return eval(inputCleaned);
      } catch (e) {
        return result;
      }
    });
  }
  return (
    <ScreenContext.Provider
      value={{
        input,
        setInput,
        onScreen,
        setOnScreen,
        result,
        setResult,
        controlPoint,
        setControlPoint,
        getResults,
        pressEqual,
        setPressEqual
      }}>
      {children}
    </ScreenContext.Provider>
  );
}

export const useScreen = () => useContext(ScreenContext);
