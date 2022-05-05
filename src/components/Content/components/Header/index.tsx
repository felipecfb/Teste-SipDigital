import React from 'react';
import { Searchbar } from './components/SearchBar';

import Image from "next/image";

import * as S from "./styles";

export function Header() {
    return (
        <S.Container>
            <Searchbar />
            <S.UserSettings>
                <Image src={'/images/notification.svg'} width={20} height={20} />
                <Image src={'/images/user-icon.svg'} width={40} height={40} />
            </S.UserSettings>
        </S.Container>
    )
}