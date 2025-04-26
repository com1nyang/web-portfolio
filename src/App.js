// src/App.js
import GlobalStyle from './styles/GlobalStyle';
import TableOfContents from './components/TableOfContents'
import { Layout, FooterNote, LeftCol, RightCol } from './components/Layout';
import { Section, Heading, Paragraph } from './components/Section';

function App() {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <h1>껌냥에 관한 연구*</h1>
        <p style={{ fontSize: '20px' }}>
          이원찬<br />
          한세사이버보안고등학교 (학생)
        </p>
        <p style={{ fontSize: '25px' }}>
          <b>A Study on COM_NYANG*</b>
        </p>
        <p style={{ fontSize: '20px' }}>
          Won Chan Lee<br />
          Hansei Cyber Security High School (Student)
        </p>

        <Section>
          <Heading>요 약</Heading>
          <Paragraph>
            본 연구는 고등학생의 관점에서 클라우드 보안과 위험 평가 체계의 실무적 접근을 중심으로 진행되었다.
            일반고에서 특성화고로의 전학 후, 화이트햇 스쿨 2기 과정을 수료하며 클라우드 및 개발 트랙의 기초를
            다졌고, 이를 바탕으로 금융권 클라우드 도입 현황 분석 및 자체 위험 평가 체계 수립 프로젝트를
            수행하였다. 또한 AWS 환경에서 CIS Benchmark 기반의 보안 감사 실습과 자산목록표 기반의 인프라
            진단 및 대책 수립까지 포괄적인 컨설팅 시뮬레이션을 진행하였다. 다양한 사이버보안 경진대회 및
            해킹방어 콘테스트 수상 경험을 통해 실전 역량을 검증받았으며, 본 포트폴리오는 그간의 학습 및
            실습 결과를 정리한 결과물이다.
          </Paragraph>
        </Section>

        <Section>
          <Heading>ABSTRACT</Heading>
          <Paragraph>
            This study was conducted from the perspective of a high school student, focusing on practical approaches
            to cloud security and risk assessment frameworks. After transferring from a general high school to a
            specialized cybersecurity high school, the author completed the WhiteHat School 2nd program and built a
            solid foundation in cloud and development tracks. Based on this, the author conducted a project to analyze
            the current state of cloud adoption in the financial sector and establish a self-assessment framework for
            cloud-related risks. Additionally, a comprehensive consulting simulation was carried out, including
            security audits based on CIS Benchmarks in AWS environments, infrastructure diagnosis using asset inventory
            templates, and the formulation of protective strategies. The author has validated their practical
            capabilities through multiple awards in cybersecurity competitions and defense contests. This portfolio
            presents a structured summary of the author’s learning and practical experience.
          </Paragraph>
        </Section>

        {/* 다른 섹션은 여기에 계속 추가 가능 */}

        <FooterNote>
          <LeftCol>
            Received(3. 17. 2007), Modified(3. 17. 2007),<br />
            Accepted(3. 17. 2007)<br />
            <small>* 본 연구는 원짜이의 지원으로 수행됨</small>
          </LeftCol>
          <RightCol>
            (과제번호 WN-2007-CH12345)<br />
            주저자: wonjjani@gmail.com<br />
          </RightCol>
        </FooterNote>
      </Layout>
      <TableOfContents />
    </>
  );
}

export default App;
