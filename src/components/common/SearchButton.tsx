import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchLogo } from '../../assets/search.svg';

export const SearchButton = () => {
  return (
    <S.button>
      <SearchLogo />
    </S.button>
  );
};

const S = {
  button: styled.button`
    background-color: #007be9;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    color: #fff;
  `,
};
