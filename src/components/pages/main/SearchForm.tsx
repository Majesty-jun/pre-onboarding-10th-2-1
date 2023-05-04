import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { IData } from '../../../types/types';
import { debounce } from '../../../utils/debounce';
import { SearchButton, SearchInput } from '../../common';

export const SearchForm = () => {
  const [data, setData] = useState<IData[]>([]);

  const onInputHandler = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      const response = await axios.get(`api/v1/search-conditions/?name=${e.target.value}`);
      setData(response.data);
    } else {
      setData([]);
    }
  });

  return (
    <>
      <S.form>
        <SearchInput onInput={onInputHandler} />
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
