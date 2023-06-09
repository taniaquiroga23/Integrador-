import styled from "styled-components";

import {ReactComponent as MagnifyingGlass} from "../../assets/lupa.svg";

export const SearchContainer = styled.div`
  margin-top: 30px;
  height: 30px;
  width: 70%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const SearchInput = styled.input`
  width: 30%;
  padding: 12px 20px;
  border: solid #b9375e 1px;
  border-radius: 7px 0px 0px 7px;
  box-sizing: border-box;
  box-shadow: inset 0 0 5px #808080;
`;

export const SearchIcon = styled(MagnifyingGlass)`
  width: 20px;
  height: 30px;
  fill: #ea698b;

  &:hover {
    scale: 1.1;
  }
`;

export const SearchIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: black;
  padding: 10px;
  border: solid #b9375e 1px;
  border-radius: 0px 7px 7px 0px;

  &:hover {
    box-shadow: inset 0 0 10px #b9375e;
  }
`;
