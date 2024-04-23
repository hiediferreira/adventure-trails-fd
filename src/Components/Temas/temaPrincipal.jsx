import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#504908',
            contrastText: '#fff',
        },
        secondary:{
            main: '#fff',
            contrastText: '#504908',  
                     
        }
    },
    typography: {
        button: {
            textTransform: "none",  //removendo o upperCase dos botões
            fontWeight: "bold",
            border: "2px solid #504908"             
        }
    }
})

export default theme