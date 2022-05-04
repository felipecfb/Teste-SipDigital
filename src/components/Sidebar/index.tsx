import React from "react";

import Image from "next/image";

import * as S from "./styles";

export function Sidebar() {
  return (
    <S.Container>
      <S.UpContent>
        <S.Logo>Logo</S.Logo>
        <S.Menu>
          <S.MenuItem>
            <Image src={"/images/dashboard.svg"} width={20} height={20} />
            Dashboard
          </S.MenuItem>
          <S.MenuItem>
            <Image src={"/images/orders.svg"} width={20} height={20} />
            Pedidos
          </S.MenuItem>
          <S.MenuItem>
            <Image src={"/images/products.svg"} width={20} height={20} />
            Produtos
          </S.MenuItem>
          <S.MenuItem>
            <Image src={"/images/clients.svg"} width={20} height={20} />
            Clientes
          </S.MenuItem>
          <S.MenuItem>
            <Image src={"/images/financial.svg"} width={20} height={20} />
            Financeiro
          </S.MenuItem>
          <S.MenuItem>
            <Image src={"/images/users.svg"} width={20} height={20} />
            Usuários
          </S.MenuItem>
        </S.Menu>
      </S.UpContent>
      <S.BottomContent>
        <S.LoginBar>
          <Image src={"/images/logout.svg"} width={20} height={20} />
          Logout
        </S.LoginBar>
      </S.BottomContent>
    </S.Container>
  );
}
