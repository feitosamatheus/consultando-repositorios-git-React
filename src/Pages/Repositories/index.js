import React, {useEffect, useState} from "react";
import * as S from './styled'
import {useNavigate} from 'react-router-dom';

export default function Repositories(){
    const [repositories, setRepositories]= useState([]);
    const [nomeUsuario, setNomeUsuario]= useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        let loginUsuario = localStorage.getItem('loginUsuario')

        if(repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            loginUsuario = JSON.parse(loginUsuario)
            console.log(loginUsuario)
            console.log(repositoriesName)
            setRepositories(repositoriesName); 
            setNomeUsuario(loginUsuario)
            localStorage.clear();
        
        }else{
            navigate({ pathname: '/' })
        }
    },[]);

    return(
        <S.Container>
            <S.Title>Repositórios  " {nomeUsuario} " </S.Title>

            <S.List>
                { repositories.map(repository => {
                    return(
                        <S.ListItem>Repositório: {repository}</S.ListItem>
                    )

                })}    
            </S.List>
            <S.LinkHome to="/">voltar</S.LinkHome>
        </S.Container>
    );
}