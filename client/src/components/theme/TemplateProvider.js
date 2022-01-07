import React, {createContext} from 'react'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";


export const TemplateContext = createContext(null)
function TemplateProvider({children}) {

    const theme = createMuiTheme({
      overrides: {
        MuiDrawer: {
          paperAnchorLeft: {
            height: "95%",
            top: 15.5,
            width: "30%",
            left: 32,
            boxShadow: "none",
          },
        },
        MuiBackdrop: {
          root: {
            backgroundColor: "unset",
          },
        },
      },
    });
    return (
      <TemplateContext.Provider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </TemplateContext.Provider>
    );
}

export default TemplateProvider
