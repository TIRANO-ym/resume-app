import './main-page.css';
import profile_image from '../../images/profile_image.png';
import main_icon from '../../images/mail_icon.png';
import phone_icon from '../../images/phone_icon.png';
import { FaQuestionCircle } from "react-icons/fa";
import styled from 'styled-components'
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';

function MainPage() {
  const [darkFlag, setDarkState] = useState(true);
  // if (window.location.href.indexOf('kakaotalk') !== -1) {
    var target_url = 'http://resume-ym.duckdns.org';
    window.location.href = 'kakaotalk://web/openExternal?url='+encodeURIComponent(target_url);
  // }

  return (
    <div className={`main-test ${darkFlag ? 'darkTheme' : 'lightTheme'}`}>
      <div className="themeToggleButton">
        <ToggleButton
          className="toggleSwitch"
          selected={darkFlag}
          onChange={() => {
            setDarkState(!darkFlag);
          }}
        >
          {darkFlag ? 'Light Mode' : 'Dark Mode'}
        </ToggleButton>
      </div>
      <div><ProfileInfo/></div>
      <div><HLine /></div>
      <div><Introduce/></div>
      <br/><br/>
      <div><Skill/></div>
      <br/><br/>
      <div><WorkExp/></div>
      <br/><br/>
      <div><Project/></div>
      <br/><br/>
      <div><Education/></div>
      <br/><br/>
      <div><License/></div>
      <br/><br/>
      <div><ETC/></div>
      <br/><br/>
    </div>
  );
}

function HLine() {
  return (
    <div className="h-line"></div>
  );
}

function ProfileInfo() {
  return (
    <div className="profile-info">
      <img className="my-image" src={profile_image}/>
      <div className="description">
        <div className="my-name">성여명</div>
        <div className="line" style={{marginTop: "3%"}}>
          <img src={phone_icon}/> 010-4200-7897
        </div>
        <div className="line">
          <img src={main_icon}/>yeomyeong26@gmail.com
        </div>
      </div>
    </div>
  );
}

function Introduce() {
  return (
    <div className="introduce">
      <div className="header">INTRODUCE</div>
      <div className="content">
      Node.js, TypeScript, JavaScript, HTML, CSS, MySQL 등을 활용한 웹 프론트엔드 및 백엔드 개발에 3년의 경험을 보유하고 있습니다. 실시간 모니터링을 위한 웹 서비스를 개발하는 프로젝트에 참여하면서 복잡한 기능들을 개발한 경험을 가지고 있습니다.
      <br/><br/>
      웹에서 기본적으로 지켜야 하는 보안 이슈, 빅데이터를 모니터링하며 생기는 성능 이슈, 각 기능들이 독립적으로 수행 가능하고 사용성/확장성/유지보수성을 고려하여 프론트부터 DB까지 좋은 설계를 하기 위해 고민하는 등 웹 개발자로서 다양한 문제를 접하고 해결해본 경험이 있습니다.
      <br/><br/>
      또한 팀 리더에게 개발 생산성이 좋고 제품 개선을 위한 설계를 적극적으로 제안하는 팀원으로 인정받은 경험이 있습니다. 다른 팀원이 봉착한 문제를 같이 고민하고 리뷰함으로서 팀이 다 같이 성장하는 팀워크와 커뮤니케이션의 중요성을 잘 알고 실천하기 위해 항상 노력합니다.
      </div>
    </div>
  );
}

function Skill() {
  return (
    <div className="skill">
      <div className="header">SKILL</div>
      <div className="table">
        <table style={{width:"100%"}}>
          <tr>
            <td scope="col"> </td>
            <td scope="col">Languages</td>
            <td scope="col">Frameworks<br/>& Libraries</td>
            <td scope="col">Infrastructure<br/>& Databases</td>
            <td scope="col">Tools<br/>& IDEs</td>
            <td scope="col">Misc</td>
          </tr>
          <tr>
            <td>Production<br/>개발 가능 수준</td>
            <td>TypeScript<br/>JavaScript<br/>HTML<br/>CSS/SCSS</td>
            <td>Angular<br/>Express<br/>Node.js</td>
            <td>MariaDB<br/>MySQL</td>
            <td>VS Code<br/>Webstorm<br/>GitLab</td>
            <td>Linux<br/>Agile<br/>DevOps<br/>Redux</td>
          </tr>
          <tr>
            <td>취미 개발 수준</td>
            <td>Java<br/>Python<br/>C#</td>
            <td>React</td>
            <td>Elasticsearch<br/>MongoDB</td>
            <td>Unity<br/>Andriod Studio</td>
            <td>Jest</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function WorkExp() {
  return (
    <div className="work-exp">
      <div className="header">WORK EXPERIENCE</div>
      <div className="exp">
        <div className="period">
          2021.02 ~ 2024.02
          <br/>
          <div className="box">3년 1개월</div>
        </div>
        <div className="content">
          <div className="company-name">(주)윈스</div>
          <div className="company-role">웹 프론트엔드 및 백엔드 개발자</div>
          <div>[담당업무]</div>
            <li>실시간 모니터링을 위한 웹 서비스 프론트엔드 및 백엔드 개발</li>
            <li>프로젝트 신규 개발 단계부터 출시 후 기능 고도화와 유지보수 수행</li>
          <br/>
          <div>[사용기술]</div>
            <li>웹 Front-end: Angular, TypeScript, HTML, CSS, SCSS</li>
            <li>웹 Back-end: Express, Node.js, JavaScript, MySQL, MariaDB</li>
            <li>테스트 코드: Jest</li>
            <li>버전관리 및 코드리뷰: GitLab</li>
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="project">
      <div className="header">PROJECT</div>
      <div className="exp">
        <div className="period">
          2021.02 ~ 2024.02
        </div>
        <div className="content">
          <div className="project-name">AI 보안관제 솔루션</div>
          <div className="project-client">(주)윈스</div>

          <li>다양한 Chart를 활용한 데이터 시각화를 중심으로 Componet 단위의 위젯을 사용자가 커스터마이징 가능한 대시보드 개발</li>
          <li>특정 시간대의 트래픽 추이 정보 시각화 기능 개발</li>
          <li>사용자가 구성한 쿼리 유효성 검사 및 실제 쿼리로 변환 로직 개발</li>
          <li>패턴 매핑 알고리즘을 적용한 로그 패턴 반자동 분류 기능 개발</li>
          <li>회원가입, 로그인, 계정 권한 및 2차 SMS 인증 기능 개발</li>
          <li>JWT 토큰 기반 로그인 세션 관리 프로세스 구축</li>
          <li>테스트 자동화: 웹 모니터링 성능 테스트를 위한 스크립트 작성 및 공유하여 5000만 종의 이벤트 수집 시 성능 테스트 환경 제공</li>
          <div className="table">
            <table style={{width:"100%"}}>
              <tr>
                <td scope="col"> </td>
                <td scope="col">OS</td>
                <td scope="col">Framework</td>
                <td scope="col">Language</td>
                <td scope="col">DB</td>
              </tr>
              <tr>
                <td>웹 FE</td>
                <td rowspan='2'>Window<br/>Linux</td>
                <td>Angular</td>
                <td>TypeScript<br/>HTML<br/>CSS/SCSS</td>
                <td>-</td>
              </tr>
              <tr>
                <td>웹 BE</td>
                <td>Express<br/>(Node.js)<br/>REST API</td>
                <td>JavaScript<br/>MySQL<br/>Python</td>
                <td>MariaDB<br/>MongoDB<br/>ES</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <div className="header">EDUCATION</div>
      <div className="exp">
        <div className="period">
          2019.03 ~ 2021.02
        </div>
        <div className="content">
          <div className="title">한밭대학교</div>
          <div className="sub-content">컴퓨터공학과 / 졸업</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2017.03 ~ 2019.02
        </div>
        <div className="content">
          <div className="title">서울사이버대학교</div>
          <div className="sub-content">컴퓨터공학과 / 편입</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2014.06 ~ 2017.02
        </div>
        <div className="content">
          <div className="title">대전공업고등학교</div>
          <div className="sub-content">반도체학과 / 졸업</div>
        </div>
      </div>
    </div>
  );
}

function License() {
  return (
    <div className="education">
      <div className="header">LICENSE</div>
      <div className="exp">
        <div className="period">
          2020.11
        </div>
        <div className="content">
          <div className="title">정보처리기사</div>
          <div className="sub-content">자격증 취득 / 한국산업인력공단</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2020.10
        </div>
        <div className="content">
          <div className="title">제 13회 창의적 종합설계 경진대회</div>
          <div className="sub-content">동상 수상 / 한밭대학교 공학교육혁신센터</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2017.01
        </div>
        <div className="content">
          <div className="title">운전면허1종보통</div>
          <div className="sub-content">면허증 취득 / 대전지방경찰청</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2016.07
        </div>
        <div className="content">
          <div className="title">정보처리기능사</div>
          <div className="sub-content">자격증 취득 / 한국산업인력공단</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2014.11
        </div>
        <div className="content">
          <div className="title">ITQ한글엑셀 A등급</div>
          <div className="sub-content">자격증 취득 / 한국생산성본부</div>
        </div>
      </div>
    </div>
  );
}

const tooltipMsg = `핵심 경력과 무관한\n기타 프로젝트입니다`;
const Tooltip = ({ children, message }) => {
  return (
    <Container>
      {children}
      <div className="tooltip">{message}</div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: inline-block;
  color: gray;
  font-size: 1.2rem;
  margin-left: 1%;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }

  .tooltip {
    white-space: pre-line;
    display: none;
    position: absolute;
    top: -380%;
    width: max-content;
    max-width: 10vw;
    background-color: rgb(180, 180, 180);
    height: auto;
    padding: 30%;
    border-radius: 5px;
    color: black;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: -0.25px;
    z-index: 100;
    transform: translate(-44%, 110%);
  }
`;

function ETC() {
  return (
    <div className="etc">
      <div className="header">OTHERS
        <Tooltip message={tooltipMsg}>
          <FaQuestionCircle />
        </Tooltip>
      </div>
      <div className="content">
        <ul>
          <li>(2020) VR 안전교육 프로그램</li>
            <ul>
              <li>Keyword: 
                <a className="stag">VR</a>
                <a className="stag">Unity</a>
                <a className="stag">C#</a>
              </li>
              <li>GitHub: <a href="https://github.com/TIRANO-ym/Unity-VR-Project">https://github.com/TIRANO-ym/Unity-VR-Project</a></li>
            </ul>
          <li>(2020) 어떤 분식집의 셀프 주문 시스템</li>
            <ul>
              <li>Keyword: 
                <a className="stag">소프트웨어 디자인 패턴</a>
                <a className="stag">Java</a>
              </li>
              <li>GitHub: <a href="https://github.com/TIRANO-ym/Java_SoftwareDesign-Project">https://github.com/TIRANO-ym/Java_SoftwareDesign-Project</a></li>
            </ul>
          <li>(2019) 모바일 짝맞추기 게임 앱</li>
            <ul>
              <li>Keyword: 
                <a className="stag">Andriod Studio</a>
                <a className="stag">Java</a>
              </li>
              <li>GitHub: <a href="https://github.com/TIRANOym/Android_Project/tree/master/app/src/main/java/com/tirano/myapplication">https://github.com/TIRANOym/Android_Project/tree/master/app/src/main/java/com/tirano/myapplication</a></li>
            </ul>
          <li>(2019) 영상 속 특정 인물 추적 프로그램</li>
            <ul>
              <li>Keyword: 
                <a className="stag">OpenCV</a>
                <a className="stag">Python3</a>
              </li>
              <li>GitHub: <a href="https://github.com/TIRANO-ym/Python_VideoProcessing-Project">https://github.com/TIRANO-ym/Python_VideoProcessing-Project</a></li>
            </ul>
          <li>(2019) 스마트 윈도우</li>
            <ul>
              <li>Keyword: 
                <a className="stag">Arduino</a>
                <a className="stag">IoT</a>
                <a className="stag">C</a>
              </li>
            </ul>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
