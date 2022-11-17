import React, { useEffect, useState } from 'react';
import FixedNavbar from '../components/FixedNavbar';
import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Work';
import { base, light, dark } from '../styles/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import '../styles/index.scss';

const IndexPage = () => {
  const themesMap = { light, dark };
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [theme, setTheme] = useState(
    createTheme({
      ...base,
      colors: themesMap[currentTheme],
      palette: {
        mode: currentTheme
      },
      typography: {
        fontFamily: 'Noto Sans',
      },
    })
  );

  const handleLinkClick = (url) => {
    const id = url.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({behavior: "smooth"});
          el.focus();
        }
      }, 100);
  }

  const updateTheme = (selectedTheme) => {
    setCurrentTheme(selectedTheme);

    const updatedTheme = {...theme};
    updatedTheme.colors = themesMap[selectedTheme];
    updatedTheme.palette.mode = selectedTheme;

    setTheme(updatedTheme);
    console.log(updatedTheme)
  }

  // Use the prefers-color-scheme media query to detect OS theme preference
  useEffect(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: light)');

    updateTheme(themeQuery.matches ? 'light' : 'dark');
  }, [])

    return (
      <>
        <ThemeProvider theme={theme}>
          <Box className="app-container" sx={{ display: 'flex', flexDirection: 'column' }}>
            <FixedNavbar
              currentTheme={currentTheme}
              theme={theme}
              onLinkClick={handleLinkClick}
              updateCurrentTheme={updateTheme}
            />
            <Intro theme={theme}/>
            <About theme={theme}/>
            <Work />
          </Box>
        </ThemeProvider>
      </>
    );
}

export default IndexPage

export const Head = () => <title>Kathryn Herod - Front End Developer</title>
