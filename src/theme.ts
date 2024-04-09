'use client';
import { Playpen_Sans } from "next/font/google";
import { createTheme } from '@mui/material/styles';

const playpenSans = Playpen_Sans({
  weight: ['300', '400', '500', '700'],
    subsets: ["latin"],
    display: 'swap'
  });

const theme = createTheme({
  typography: {
    fontFamily: playpenSans.style.fontFamily,
  },
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          lineHeight:'normal'
        }
      }
    }
  }
});

export default theme;
