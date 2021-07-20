import React, {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secundary: string;
}

interface ContexProps {
  colors: ImageColors;
  prevcolors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setMainPrevColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContexProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'red',
    secundary: 'blue',
  });

  const [prevcolors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secundary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };

  const setMainPrevColors = (colors: ImageColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevcolors,
        setMainColors,
        setMainPrevColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
