import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    height:80vh; 

`;

export const header = styled.header`
    position: absolute;
    margin: 0;
    padding: 0;
    left: 3rem;

    @media(max-width: 600px){
        position: static;
        margin-left:6.5rem;
        padding:0;

    }

    @media(max-width: ){
        margin-left:5.6rem;
    }


`;

export const sidebar = styled.div`
    width: 20rem;
    top: 1.5rem;
    right: 0rem;
    position: absolute;

    @media(max-width: 600px){
        position: static;
        margin-left:3rem;
        padding:0;
    }

    @media(max-width: 415px){
        margin-left:2rem;
    }
`;

export const socialMedia = styled.div`
    bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const sideLink = styled.a`
    background-color: #000 ;
    color: #fff;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: background-color 2s;
    text-decoration:none;
    margin-right: 2rem;

    &:hover{
    opacity:0.9;
    }

`;

export const Container = styled.div`
    width: 60vw;
    display:flex;
    align-items: center;
    margin-left:auto;
    justify-content: center;

    @media(max-width: 600px){
        margin-bottom: 50vh;
        margin-right:3.3rem;
        margin-left:none;
        
    }

    @media(max-width: 415px){
        margin-bottom: 50vh;
        margin-right:.5rem;
        
    }

`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus, &:active{
        outline:none;
        box-shadow:none;
    }

`;


export const button = styled.button`
    height:2.6rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    cursor: pointer;
    
    &:focus, &:active, &:hover{
        outline:none;
        box-shadow:none;
        opacity:0.9;
    }
`;

export const ErrorMsg = styled.span`
    display:block;
    font-size:0.65rem;
    color:red;
    font-weight: 600;
    margin-top:1rem;
`;