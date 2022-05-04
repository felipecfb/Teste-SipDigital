import React from "react";

import Image from "next/image";

import * as S from "./styles";

export function ContentInformation() {
  const value = 427300.5;
  const valueFormatted = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <S.Container>
      <S.Section>
        <S.Image>
          <Image src={"/images/units.svg"} width={40} height={40} />
        </S.Image>
        <S.Description>
          <h3>Unidades registradas</h3>
          <p>1</p>
        </S.Description>
      </S.Section>
      <S.Section>
        <S.Image>
          <Image src={"/images/new-clients.svg"} width={40} height={40} />
        </S.Image>
        <S.Description>
          <h3>Novos clientes</h3>
          <p>104</p>
        </S.Description>
      </S.Section>
      <S.Section>
        <S.Image>
          <Image src={"/images/sales.svg"} width={40} height={40} />
        </S.Image>
        <S.Description>
          <h3>Vendas realizadas</h3>
          <p>7270</p>
        </S.Description>
      </S.Section>
      <S.Section>
        <S.Image>
          <Image src={"/images/profit.svg"} width={40} height={40} />
        </S.Image>
        <S.Description>
          <h3>Lucro líquido (Geral)</h3>
          <p>{valueFormatted}</p>
        </S.Description>
      </S.Section>
    </S.Container>
  );
}
