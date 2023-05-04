import React from 'react';
import styled from 'styled-components';

export const SearchInput = ({ ...restProps }) => {
  return (
    <>
      <S.Label htmlFor="search_disease">질환명</S.Label>
      <S.Input
        id="search_disease"
        name="search_disease"
        placeholder="질환명을 입력해 주세요."
        autoComplete="off"
        {...restProps}
      />
    </>
  );
};

const S = {
  Input: styled.input`
    padding: 20px 10px 20px 24px;
    font-size: 18px;
    border: none;
    flex-grow: 1;
    border-radius: inherit;
  `,
  Label: styled.label`
    position: absolute;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  `,
};
