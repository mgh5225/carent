import React from "react";
import iranYekan from "fonts/iranyekanwebregular.woff";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  CssBaseline,
} from "@mui/material";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import { Link } from "react-router-dom";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <Link ref={ref} to={href} {...other} />;
});

let theme = createTheme({
  palette: {
    //type: 'dark'
  },
  typography: {
    fontFamily: "iranYekan",
  },
  overrides: {
    MuiCssBaseline: {
      styleOverrides: `
       @font-face {
        fontFamily: 'iranYekan';
        fontStyle: 'normal';
        fontDisplay: "swap";
        fontWeight: 400;
        src: local('iranYekan'), local('iranYekan-Regular'), url(${iranYekan}) format('woff');
       }
      `,
    },
  },
  direction: "rtl",
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default (App) => {
  return (props) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={cacheRtl}>
        <App {...props} />
      </CacheProvider>
    </ThemeProvider>
  );
};
