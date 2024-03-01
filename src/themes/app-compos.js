export const appCompos = {
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        cursor: 'pointer'
      }
    }
  },
  MuiButton: {
    variants: [
      {
        props: { variant: 'outlined', color: 'white' },
        style: {
          padding: '12px 24px',
          border: '1px solid inherit',
          textTransform: 'capitalize',
          whiteSpace: 'nowrap'
        }
      }
    ],
    styleOverrides: {
      root: {}
    }
  },
  MuiTextField: {
    variants: [],
    styleOverrides: {
      root: {}
    }
  },
  MuiSvgIcon: {
    variants: []
  },
  MuiIconButton: {
    variants: [],
    styleOverrides: {
      root: {}
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: {}
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {}
    }
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {}
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: {}
    }
  },
  MuiTab: {
    styleOverrides: {
      root: {}
    }
  }
};
