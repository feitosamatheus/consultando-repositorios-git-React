// import logo from './logo.svg';
// import './App.css';
import React, {useState} from "react";
import axios from "axios";
import * as S from './styled'
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [usuario , setUsuario] = useState('');
  const [erro , setErro] = useState(false);
 
  function recebeNome(){
    axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => {
      const loginUsuario = response.data.login
      localStorage.setItem('loginUsuario', JSON.stringify(loginUsuario));   
      });
      
    };
    
  recebeNome()

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response =>{
      const repositories = response.data;
      const repositoriesName =[]
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false);
      navigate({ pathname: '/repositories' })
    })
    .catch(err =>{
      setErro(true);
    });
  };

  return (
    <S.HomeContainer>
      <S.Container>
        <S.Input name='usuario' id='usuario' className='usuario' placeholder='Usuario' value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.button type="button" onClick={handlePesquisa}>Pesquisar</S.button> 
      </S.Container>
      { erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente </S.ErrorMsg> : ''}
    </S.HomeContainer>
  );


}

export default Home;
