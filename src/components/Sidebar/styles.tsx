import styled from 'styled-components';

export const Container = styled.div`
    background: var(--white);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    height: 100vh;
    box-shadow: 4px 0px 16px rgba(16, 30, 115, 0.08);
    justify-content: space-between;
    font-weight: bold;
    max-width: 15%;
`

export const UpContent = styled.div`
`

export const BottomContent = styled.div`
`


export const Logo = styled.h1`
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: calc(2rem + 0.75vw);
    text-align: center;
`

export const Menu = styled.ul`
    
`

export const MenuItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
    
    span {
        margin-right: 1rem !important;
    }
`

export const LoginBar = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-right: 1rem !important;
    }
`