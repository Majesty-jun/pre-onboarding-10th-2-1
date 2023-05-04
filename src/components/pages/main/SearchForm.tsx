import React from 'react';
import styled from 'styled-components';
import { SearchButton, SearchInput } from '../../common';

export const SearchForm = () => {
  return (
    <>
      <S.form>
        <SearchInput />
        <SearchButton />
      </S.form>
    </>
  );
};

const S = {
  form: styled.form`
    width: 490px;
    height: 70px;
    background-color: #fff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
  `,
};
