import React from 'react';
const Theme = React.createContext();

const ThemeProvider = ({children, value}) => (
  <Theme.Provider value={value}>{children}</Theme.Provider>
);

export default Theme;
export {ThemeProvider};
