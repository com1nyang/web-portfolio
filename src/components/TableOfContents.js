// src/components/TableOfContents.js
import styled from 'styled-components';

const TOCWrapper = styled.div`
  max-width: 740px;
  margin: 4vh auto 8vh auto;
  padding: 4rem 2rem;
  border: 1px solid #ccc;
  background-color: white;
  text-align: left;
  page-break-after: always;
`;

const TOCHeading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const TOCList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 20px;
  line-height: 2;
`;

function TableOfContents() {
  return (
    <TOCWrapper>
      <TOCHeading>목차</TOCHeading>
      <TOCList>
        <li>요 약 ....................................................................................................... 1</li>
        <li>그의 이야기 .............................................................................................. 1</li>
        <li>I. 클라우드 아키텍처 설계 및 가이드 작성 - 기업 모의 컨설팅 진행 ........................ 3</li>
        <li>II. “정량적 자체 위험성 평가 체계화” - 소논문 작성 ........................................... 4</li>
        <li>III. 입상 .................................................................................................. 5</li>
        <li>IV. 결론 및 향후 과제 .......................... 6</li>
        <li>참고문헌 ............................................. 7</li>
      </TOCList>
    </TOCWrapper>
  );
}

export default TableOfContents;
