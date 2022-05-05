import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  margin-top: 2rem;
  padding: 1rem 0;
`;

export const Title = styled.h2``;

export const TableOrders = styled.table`
  width: 100%;

  tr {
    background: var(--white);

    &:nth-child(1) {
      background: #fafafa;
    }
    
    &:nth-child(3) {
      background: #fafafa;
    }

    &:nth-child(5) {
      background: #fafafa;
    }
  }

  td,
  th {
    border-bottom: 1px solid #c8c8c8;
    padding: 2rem !important;
    text-align: center;
  }

  span {
    color: #3374ab;
  }

  button {
    background: linear-gradient(90deg, #3374ab 0%, #5ab1f3 59.9%, #6bd8fe 100%);
    color: var(--white);
    padding: 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    width: 100%;
    border: none;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
