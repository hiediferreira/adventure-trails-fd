import styles from "./estilosPages.module.css"
import { Link } from "react-router-dom"

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material'


function Home(){    

    const theme = createTheme({
        palette: {
            primary: {
                main: '#504908',
                contrastText: '#fff',
            }
        },
        typography: {
            button: {
                textTransform: "none",  //removendo o upperCase dos botões
            }
        }
    })

    return(
        <div className="container">  
            <div className={styles.imgHome}>
                <h1>Que tal aproveitar um tempo com a natureza?</h1>
                <p className={styles.pSize}>
                    Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. <br />Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!
                </p>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary"><Link className={styles.linkHome} to="/lista">Explorar trilhas</Link></Button>
                </ThemeProvider>
            </div> 
            <div className={styles.conteudoHome}>
                <div className={styles.cHome1}>
                    <div>
                        <h1 className={styles.margin2em}>Explore trilhas incríveis</h1>
                        <p className={styles.margin2em}>
                            O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.
                        </p>
                    </div>
                    <div>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" sx={{"mb":8}}><Link to="/lista" className={styles.linkHome}>Explorar trilhas</Link></Button>
                        </ThemeProvider>
                    </div>
                </div>

                <div className={styles.cHome2}>
                    <div>
                        <h1 className={styles.h1Size}>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary"><Link className={styles.linkHome} to="/cadastro">Cadastrar nova trilha</Link></Button>
                        </ThemeProvider>
                    </div>
                    <div>
                        <img className={styles.imgNatureza} src="./src/assets/img-natureza.jpg" alt="imagem ilustrativa"/>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Home

// A class="container foi criada para espaçarmos o conteúdo, uma vez que, header é fixo!"