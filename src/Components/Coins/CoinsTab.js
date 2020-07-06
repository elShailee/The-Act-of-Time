import React from 'react';
import './CoinsTab.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        textTransform: 'none',
        backgroundColor: 'white',
      },
    },
  },
});

export default function CoinsTab() {
  return (
    <div id="coinsTab">
      You have XX Coins.
      <br />
      <ThemeProvider theme={theme}>
        <Button varient="contained" className="generalButton">
          Banana
        </Button>
      </ThemeProvider>
    </div>
  );
}
