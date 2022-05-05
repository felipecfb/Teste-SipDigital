import React from "react";
import * as S from "./styles";

import Image from 'next/image'

export function Pagination() {
  return (
    <S.Container>
      <S.SquarePagination>
        <span>
            <Image src={'/images/arrow-left.svg'} width={10} height={10} />
        </span>
      </S.SquarePagination>
      <S.SquarePagination>
        <span>1</span>
      </S.SquarePagination>
      <S.SquarePagination>
        <span>2</span>
      </S.SquarePagination>
      <S.SquarePagination>
        <span>3</span>
      </S.SquarePagination>
      <S.SquarePagination>
        <span>
            <Image src={'/images/arrow-right.svg'} width={10} height={10} />
        </span>
      </S.SquarePagination>
    </S.Container>
  );
}
