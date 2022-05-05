import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const SquarePagination = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid #c8c8c8;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0.5rem 0.25rem;

    &:nth-child(2) {
        background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
        color: var(--white);
    }
`;