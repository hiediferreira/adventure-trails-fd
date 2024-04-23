import styles from "./estilosPages.module.css"

import { Button } from '@mui/material'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import theme from "../Components/Temas/temaPrincipal"
import { ThemeProvider } from '@mui/material/styles'

import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
import { useContext } from "react";

import { TrilhasContext } from "../Context/TrilhasContext";

function Cadastro(){

    const navigate = useNavigate()
    function goHome(){
        navigate("/")
    }
    
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const {addTrilhas} = useContext(TrilhasContext)

    function sendForm(formValue){
        console.log(formValue)

        addTrilhas({...formValue, 
        duracao: Number(formValue.duracao),
        trajeto: Number(formValue.trajeto)
        })

        navigate("/lista")
    }

    return(
        <div className={styles.containerCadastro}>
            <h1 className={styles.h1Principal}>Cadastro de nova trilha</h1>

            <form onSubmit={handleSubmit(sendForm)} className={styles.testando}>
                <label htmlFor="nomeTrilha">Nome da trilha</label> <br />
                <input className={styles.inputMaior} 
                    type="text" 
                    {...register("nomeTrilha", {
                    required: "Insira o nome da trilha",
                    maxLength: {value:100, message: "Deve possuir no máximo 100 caracteres"}
                    })}
                    placeholder="Digite o nome da trilha"
                />
                {errors?.nomeTrilha && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/> 
                    {errors.nomeTrilha.message}</p>}

                <div className={styles.divCentral}>
                    <div className={styles.flexInput}>
                        <label htmlFor="duracao">Duração estimada (min)</label>
                        <input className={styles.inputStyle} 
                            type="number"
                            {...register("duracao", {
                            required: "Insira a duração da trilha em min",
                            maxLength: {value:4, message:"Deve possuir no máximo 4 caracteres"}
                            })} 
                            placeholder="Informe a duração em minutos"                           
                        />
                        {errors?.duracao && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/> 
                            {errors.duracao.message}</p>}
                    </div>

                    <div className={styles.flexInput}>
                        <label htmlFor="trajeto">Trajeto (Km)</label>
                        <input className={styles.inputStyle} 
                            type="number" 
                            {...register("trajeto", {
                            required: "Informe o trajeto em Km",
                            maxLength: {value:5, message:"Deve possuir no máximo 5 caracteres"}
                            })}
                            placeholder="Digite o trajeto em Km" 
                        />
                        {errors?.trajeto && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/> 
                            {errors.trajeto.message}</p>}
                    </div>

                    <div className={styles.flexInput}>
                        <label htmlFor="cidade">Cidade</label>
                        <input className={styles.inputStyle} 
                            type="text" 
                            {...register("cidade", {
                            required: "Informe a cidade",
                            maxLength: {value:60, message:"Deve possuir no máximo 60 caracteres"}
                            })}
                            placeholder="Digite o nome da cidade"
                        />
                        {errors?.cidade && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/> 
                            {errors.cidade.message}</p>}
                    </div>

                    <div className={styles.flexInput}>
                        <label htmlFor="estado">Estado</label>
                        <input className={styles.inputStyle} 
                            type="text" 
                            {...register("estado", {
                            required: "Informe o estado",
                            maxLength: {value:2, message:"Deve possuir no máximo 2 caracteres"}
                            })}
                            placeholder="Digite o estado"
                        />
                        {errors?.estado && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/> 
                            {errors.estado.message}</p>}
                    </div>

                    <div className={styles.flexInput}>
                        <label htmlFor="nomeUsuario">Nome do usuário</label>
                        <input className={styles.inputStyle} 
                            type="text" 
                            {...register("nomeUsuario", {
                            maxLength:{value:60, message:"Deve possuir no máximo 60 caracteres"}
                            })}
                            placeholder="Digite seu nome completo"
                        />
                        {errors?.nomeUsuario && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/> 
                            {errors.nomeUsuario.message}</p>}
                    </div>

                    <div className={styles.flexInput}>
                        <label htmlFor="dificuldade">Dificuldade</label>
                        <select className={styles.inputStyle} {...register("dificuldade")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Difícil">Difícil</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="tipo">Selecione o tipo de trilha</label> <br />
                    <select className={styles.inputMaior} {...register("tipo")}>
                        <option value="Caminhada/trekking">Caminhada/Trekking</option>
                        <option value="Ciclismo">Ciclismo</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="urlImage">URL da imagem da trilha</label> <br />
                    <input  className={styles.inputMaior} 
                        type="text" 
                        {...register("urlImagem", {
                        maxLength:{value:300, message:"Deve possuir no máximo 300 caracteres"}
                        })}
                        placeholder="Insira um link de uma imagem da trilha" 
                    />
                    {errors?.urlImagem && <p className={styles.msgErro}><WarningAmberIcon fontSize="small" sx={{"mr":1}}/> 
                        {errors.urlImagem.message}</p>}
                </div>

                <div>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" type="submit" >Cadastrar</Button>
                    </ThemeProvider>

                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="secondary"  sx={{"ml":2}} onClick={() => goHome()}>Voltar</Button>
                    </ThemeProvider>
                </div>
            </form>
        </div>
    )
}

export default Cadastro