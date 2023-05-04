import React, { useState } from 'react';
import styled from 'styled-components';
import { IData } from '../types/types';
import { debounce } from '../utils/debounce';
import { SearchButton, SearchInput } from '.';
import { SearchList } from './SearchList';
import { fetchData } from '../utils/fetchData';

export const SearchForm = () => {
  const [data, setData] = useState<IData[]>([]);

  const onInputHandler = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      const response = await fetchData(e.target.value);
      setData(await response?.json());
    }
  });

  return (
    <>
      <S.form>
        <SearchInput onInput={onInputHandler} />
        <SearchButton />
      </S.form>
      <div>{data?.length ? <SearchList dataList={data} /> : null}</div>
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

    &:focus-within {
      outline: #007be9 2px solid;
    }
  `,
};
