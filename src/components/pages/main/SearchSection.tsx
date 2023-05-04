import React from 'react';
import styled from 'styled-components';
import { SearchForm } from './SearchForm';

export const SearchSection = () => {
  return (
    <S.section>
      <S.h2>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </S.h2>
      <SearchForm />
    </S.section>
  );
};

const S = {
  h2: styled.h2`
    text-align: center;
    margin-bottom: 40px;
    font-size: 34px;
    line-height: 54px;
  `,
  section: styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 80px 0 160px 0;
    width: 1040px;
    background-color: #cae9ff;
    margin: auto;
  `,
};
