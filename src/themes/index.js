import { createTheme } from '@mui/material/styles';
import { appColors } from './app-colors';
import { appTypos } from './app-typos';
import { appCompos } from './app-compos';

export const theme = createTheme({
  palette: appColors,
  typography: appTypos,
  components: appCompos
});
