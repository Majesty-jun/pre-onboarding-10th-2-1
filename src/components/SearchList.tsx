import React from 'react';
import { IData } from '../types/types';
import styled from 'styled-components';

interface Props {
  dataList: IData[];
}

export const SearchList = ({ dataList }: Props) => {
  return (
    <S.ul>
      {dataList.map((data: IData) => (
        <S.li key={data.id} tabIndex={0} onClick={() => console.log(data.name)}>
          {data.name}
        </S.li>
      ))}
    </S.ul>
  );
};

const S = {
  ul: styled.ul`
    margin-top: 8px;
    padding: 24px 0;
    width: 486px;
    border-radius: 25px;
    background-color: #fff;
    position: absolute;
    transform: translateX(-50%);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  `,
  li: styled.li`
    text-align: left;
    padding: 8px 24px;
    &:focus,
    &:hover {
      background-color: #eee;
      cursor: pointer;
      outline: none;
    }
  `,
};
