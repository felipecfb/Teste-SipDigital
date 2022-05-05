import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        
    }
`;

export const Section = styled.div`
    background: var(--white);
    padding: 1rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);

    &:first-child {
        margin-left: 0;
    }
    
    &:last-child {
        margin-right: 0;
    }
`

export const Image = styled.div`
    padding: 1rem;
`

export const Description = styled.div`
    h3 {
        margin-bottom: 0.5rem;
    }

    p {
        color: #3374AB;
    }
`