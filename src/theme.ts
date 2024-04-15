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
  palette:{
    background:{
      default:'#E7CFB4'
    },
    primary:{
      main:'#63A375',
      contrastText:'#fff'
    }
  },
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          lineHeight:'normal'
        }
      }
    },
    MuiDrawer:{
      styleOverrides:{
        paper:{
          backgroundColor:'#F6DFC5'
        }
      }
    }
  }
});

export default theme;
