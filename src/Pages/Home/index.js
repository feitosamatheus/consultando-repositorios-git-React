// import logo from './logo.svg';
// import './App.css';
import React, {useState} from "react";
import axios from "axios";
import * as S from './styled'
import {useNavigate} from 'react-router-dom';
import '../../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <>

    <div>
      <S.header>
        <h2>Matheus Feitosa</h2>
      </S.header>
      
      <S.sidebar>
        <S.socialMedia>
          <S.sideLink href="https://www.linkedin.com/in/matheus-feitosa-681697155/"><i class="fa-brands fa-linkedin"></i></S.sideLink>
          <S.sideLink href="https://github.com/feitosamatheus"><i className="fab fa-github-alt"></i></S.sideLink>
          <S.sideLink href="https://www.instagram.com/mtfeitosa"><i class="fa-brands fa-instagram"></i></S.sideLink>
        </S.socialMedia>
      </S.sidebar>
    </div>

    <S.HomeContainer>
      <S.Container>
        <S.Input name='usuario' id='usuario' className='usuario' placeholder='Usuario' value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.button type="button" onClick={handlePesquisa}>Pesquisar</S.button>
      </S.Container>
      {erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente </S.ErrorMsg> : ''}
    </S.HomeContainer></>
  );


}

export default Home;
