// src/components/Layout.js
import styled from 'styled-components';

const Layout = styled.div`
  max-width: 740px;
  margin: 4vh auto 8vh auto;  /* 아래 여백 5vh → 8vh로 늘림 */
  padding: 4rem 2rem;
  text-align: center;
  border: 1px solid #ccc;
  background-color: white;
`;

const FooterNote = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  margin-top: 3rem;
  font-size: 0.9rem;
  text-align: left;
`;

const LeftCol = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

const RightCol = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

export {
  Layout,
  FooterNote,
  LeftCol,
  RightCol,
};
