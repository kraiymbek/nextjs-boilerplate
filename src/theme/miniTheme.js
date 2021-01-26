import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';

const miniTheme = createMuiTheme({
    typography: {
        fontFamily: 'Rubic, sans-serif',
    },
    palette: {
        mainText: '#000',
    },
});

export default miniTheme