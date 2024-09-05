import './main-page.css';
import profile_image from '../../images/profile_image.png';
import main_icon from '../../images/mail_icon.png';
import phone_icon from '../../images/phone_icon.png';
import github_icon from '../../images/github_icon.png';
import { FaQuestionCircle } from "react-icons/fa";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import i18n from '../../language/i18n';
import { useTranslation } from "react-i18next";

function MainPage() {
  // 카카오 브라우저로 오픈 시 외부 브라우저 사용
  const currentInfo = window.navigator.userAgent.toLowerCase();
  if (currentInfo.indexOf('kakaotalk') !== -1) {
    var target_url = 'http://resume-ym.duckdns.org';
    window.location.href = 'kakaotalk://web/openExternal?url='+encodeURIComponent(target_url);
  }

  // 테마 변경
  const [darkFlag, setDarkState] = useState(true);  // 기본: 다크
  const handleSelectTheme = () => {
    setDarkState(prev => {
      localStorage.setItem('darkTheme', !prev);
      return !prev;
    });
  }

  // 언어 변경
  const langList = [
    { value: "en", name: "English" },
    { value: "ko", name: "한국어" }
  ];
  const [selectedLang, setSelectedLang] = useState("ko");   // 기본: 한국어
  const handleSelectLang = (e) => {
    setSelectedLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
  };

  // init
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    const darkTheme = localStorage.getItem('darkTheme');
    if (lang && ['en', 'ko'].includes(lang)) {
      setSelectedLang(lang);
      i18n.changeLanguage(lang);
    }
    if (darkTheme !== null) {
      setDarkState(darkTheme === 'true');
    }
  }, []);

  return (
    <div className={`main-test ${darkFlag ? 'darkTheme' : 'lightTheme'}`}>
      <div className="topLine">
        <ToggleButton
          className="toggleSwitch"
          selected={darkFlag}
          onChange={handleSelectTheme}
          value=""
        >
          {darkFlag ? 'Light Mode' : 'Dark Mode'}
        </ToggleButton>
        <select
          className="langSelect"
          onChange={handleSelectLang} value={selectedLang}
        >
          {langList.map((item) => {
            return <option value={item.value} key={item.value}>
              {item.name}
            </option>;
          })}
        </select>
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
  const { t } = useTranslation();
  return (
    <div className="profile-info">
      <img className="my-image" src={profile_image}/>
      <div className="description">
        <div className="my-name">{t("profile_info.name")}</div>
        <div className="line" style={{marginTop: "3%"}}>
          <img src={phone_icon}/> {t("profile_info.phone_number")}
        </div>
        <div className="line">
          <img src={main_icon}/>yeomyeong26@gmail.com
        </div>
        <div className="line">
          <img src={github_icon}/>
          <a href="https://github.com/TIRANO-ym" target="_blank" style={{color: "#1d9bf0"}}>
            https://github.com/TIRANO-ym
          </a>
        </div>
      </div>
    </div>
  );
}

function Introduce() {
  const { t } = useTranslation();
  return (
    <div className="introduce">
      <div className="header">INTRODUCE</div>
      <div className="content">
      {t("introduce.content")}
      </div>
    </div>
  );
}

function Skill() {
  const { t } = useTranslation();
  return (
    <div className="skill">
      <div className="header">SKILL</div>
      <div className="table">
        <table style={{width:"100%"}}><tbody>
          <tr>
            <td scope="col"> </td>
            <td scope="col">Languages</td>
            <td scope="col">Frameworks<br/>& Libraries</td>
            <td scope="col">Infrastructure<br/>& Databases</td>
            <td scope="col">Tools<br/>& IDEs</td>
            <td scope="col">Misc</td>
          </tr>
          <tr>
            <td>{t("skill.production_level")}</td>
            <td>TypeScript<br/>JavaScript<br/>HTML<br/>CSS/SCSS</td>
            <td>Angular<br/>Express<br/>Node.js</td>
            <td>MariaDB<br/>MySQL</td>
            <td>VS Code<br/>Webstorm<br/>GitLab</td>
            <td>Linux<br/>Agile<br/>DevOps<br/>Redux</td>
          </tr>
          <tr>
            <td>{t("skill.hobby_level")}</td>
            <td>Java<br/>Python<br/>C#</td>
            <td>React<br/>REST API</td>
            <td>Elasticsearch<br/>MongoDB</td>
            <td>Unity<br/>Andriod Studio</td>
            <td>Jest</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  );
}

function WorkExp() {
  const { t } = useTranslation();
  return (
    <div className="work-exp">
      <div className="header">WORK EXPERIENCE</div>
      <div className="exp">
        <div className="period">
          2021.02 ~ 2024.02
          <br/>
          <div className="box">{t("work_exp.3y1m")}</div>
        </div>
        <div className="content">
          <div className="company-name">{t("work_exp.company_wins")}</div>
          <div className="company-role">{t("work_exp.web_front_and_back_developer")}</div>
          <div>[{t("work_exp.assigned_task")}]</div>
            <li>{t("work_exp.task1")}</li>
            <li>{t("work_exp.task2")}</li>
          <br/>
          <div>[{t("work_exp.use_skill")}]</div>
            <li>{t("work_exp.web")} Front-end: Angular, TypeScript, HTML, CSS, SCSS</li>
            <li>{t("work_exp.web")} Back-end: Express, Node.js, JavaScript, MySQL, MariaDB, Loopback</li>
            <li>{t("work_exp.test_code")}: Jest, Python</li>
            <li>{t("work_exp.version_control_and_code_review")}: GitLab</li>
        </div>
      </div>
    </div>
  );
}

function Project() {
  const { t } = useTranslation();
  // -------- 서브코맨드
  const SubCommand = ({command}) => {
    const [isShow, setIsShow] = useState(false);
    const onClick = () => {
      setIsShow(c => !c);
    }
    return (
      <div className='sub-command'>
        <span className='why-button' onClick={onClick}>Why? {isShow ? '▽' : '▷'}</span>
        {isShow ? <li>{command}</li> : null}
      </div>
    );
  }
  // ------------------
  return (
    <div className="project">
      <div className="header">PROJECT</div>
      <div className="exp">
        <div className="period">
          2021.02 ~ 2024.02
        </div>
        <div className="content">
          <div className="project-name">{t("project.ai_security_operation_service")}</div>
          <div className="project-client">{t("work_exp.company_wins")}</div>
          <li>
            {t("project.custom_dashboard_command")}
            <SubCommand command={t("project.custom_dashboard_command_sub")}/>
          </li>
          <li>
            {t("project.traffic_monitoring_command")}
            <SubCommand command={t("project.traffic_monitoring_command_sub")}/>
          </li>
          <li>
            {t("project.query_logic_command")}
            <SubCommand command={t("project.query_logic_command_sub")}/>
          </li>
          <li>
            {t("project.pattern_semiauto_command")}
            <SubCommand command={t("project.pattern_semiauto_command_sub")}/>
          </li>
          <li>{t("project.login_mfa_command")}</li>
          <li>{t("project.jwt_login_session_command")}</li>
          <li>
            {t("project.test_automation_command")}
            <SubCommand command={t("project.test_automation_command_sub")}/>
          </li>
          <li>{t("project.multilingual_command")}</li>
          <div className="table">
            <table style={{width:"100%"}}><tbody>
              <tr>
                <td scope="col"> </td>
                <td scope="col">OS</td>
                <td scope="col">Framework</td>
                <td scope="col">Language</td>
                <td scope="col">DB</td>
              </tr>
              <tr>
                <td>{t("work_exp.web")} FE</td>
                <td rowSpan='2'>Window<br/>Linux</td>
                <td>Angular</td>
                <td>TypeScript<br/>HTML<br/>CSS/SCSS</td>
                <td>-</td>
              </tr>
              <tr>
                <td>{t("work_exp.web")} BE</td>
                <td>Express<br/>(Node.js)<br/>Loopback(REST API)</td>
                <td>JavaScript<br/>MySQL<br/>Python</td>
                <td>MariaDB<br/>MongoDB<br/>ES</td>
              </tr>
            </tbody></table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  const { t } = useTranslation();
  return (
    <div className="education">
      <div className="header">EDUCATION</div>
      <div className="exp">
        <div className="period">
          2019.03 ~ 2021.02
        </div>
        <div className="content">
          <div className="title">{t("education.hanbat_university")}</div>
          <div className="sub-content">{t("education.cse")} / {t("education.graducation")}</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2017.03 ~ 2019.02
        </div>
        <div className="content">
          <div className="title">{t("education.seoul_cyber_university")}</div>
          <div className="sub-content">{t("education.cse")} / {t("education.transfer")}</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2014.06 ~ 2017.02
        </div>
        <div className="content">
          <div className="title">{t("education.daejeon_high_school")}</div>
          <div className="sub-content">{t("education.semiconductor_department")} / {t("education.graducation")}</div>
        </div>
      </div>
    </div>
  );
}

function License() {
  const { t } = useTranslation();
  return (
    <div className="education">
      <div className="header">LICENSE</div>
      <div className="exp">
        <div className="period">
          2020.11
        </div>
        <div className="content">
          <div className="title">{t("license.engineer_information_processing")}</div>
          <div className="sub-content">{t("license.get_license")} / {t("license.human_resources_development_service_of_korea")}</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2020.10
        </div>
        <div className="content">
          <div className="title">{t("license.13th_hanbat_competition")}</div>
          <div className="sub-content">{t("license.get_bronze_award")} / {t("license.hanbat_center")}</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2017.01
        </div>
        <div className="content">
          <div className="title">{t("license.driver_license")}</div>
          <div className="sub-content">{t("license.get_driver_license")} / {t("license.daejeon_police")}</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2016.07
        </div>
        <div className="content">
          <div className="title">{t("license.craftsman_information_processing")}</div>
          <div className="sub-content">{t("license.get_license")} / {t("license.human_resources_development_service_of_korea")}</div>
        </div>
      </div>
      <div className="exp">
        <div className="period">
          2014.11
        </div>
        <div className="content">
          <div className="title">{t("license.itq_excel_a")}</div>
          <div className="sub-content">{t("license.get_license")} / {t("license.korea_productivity_center")}</div>
        </div>
      </div>
    </div>
  );
}

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
    min-width: 110px;
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
  const { t } = useTranslation();
  // -------- 프리뷰 이미지
  const PreviewImg = ({imgUrl}) => {
    const [isShow, setIsShow] = useState(false);
    const onClick = () => {
      setIsShow(c => !c);
    }
    return (
      <div className='preview-image-box'>
        <span className='preview-button' onClick={onClick}>Preview {isShow ? '▽' : '▷'}</span>
        {isShow ? <img className="preview-img" src={imgUrl}/> : null}
      </div>
    );
  }
  // ------------------
  return (
    <div className="etc">
      <div className="header">OTHERS
        <Tooltip message={t("others.tooltip")}>
          <FaQuestionCircle />
        </Tooltip>
      </div>
      <div className="content">
        <ul>
          <li>(2024, {t("others.updating")}) {t("others.twitter_imitating")}</li>
          <ul>
            <li>Keyword: 
              <a className="stag">React</a>
              <a className="stag">TypeScript</a>
              <a className="stag">Firebase</a>
            </li>
            <li>GitHub: <a href="https://github.com/TIRANO-ym/Twitter-imitate" target="_blank">https://github.com/TIRANO-ym/Twitter-imitate</a></li>
            <li><PreviewImg imgUrl={'/preview_twitter.png'}/></li>
          </ul>
          <li>(2024) {t("others.movie_web_service")}</li>
          <ul>
            <li>Keyword: 
              <a className="stag">React</a>
              <a className="stag">JavaScript</a>
            </li>
            <li>GitHub: <a href="https://github.com/TIRANO-ym/movie-web-app" target="_blank">https://github.com/TIRANO-ym/movie-web-app</a></li>
            <li><PreviewImg imgUrl={'/preview_movie_web.png'}/></li>
          </ul>
          <li>(2020) {t("others.vr_safty_training_program")}</li>
          <ul>
            <li>Keyword: 
              <a className="stag">VR</a>
              <a className="stag">Unity</a>
              <a className="stag">C#</a>
            </li>
            <li>GitHub: <a href="https://github.com/TIRANO-ym/Unity-VR-Project" target="_blank">https://github.com/TIRANO-ym/Unity-VR-Project</a></li>
            <li><PreviewImg imgUrl={'/preview_vr_safty.png'}/></li>
          </ul>
          <li>(2020) {t("others.self_ordering_system")}</li>
          <ul>
            <li>Keyword: 
              <a className="stag">{t("others.software_design_pattern")}</a>
              <a className="stag">Java</a>
            </li>
            <li>GitHub: <a href="https://github.com/TIRANO-ym/Java_SoftwareDesign-Project" target="_blank">https://github.com/TIRANO-ym/Java_SoftwareDesign-Project</a></li>
          </ul>
          <li>(2019) {t("others.mobile_match_game")}</li>
          <ul>
            <li>Keyword: 
              <a className="stag">Andriod</a>
              <a className="stag">Java</a>
            </li>
            <li>GitHub: <a href="https://github.com/TIRANOym/Android_Project/tree/master/app/src/main/java/com/tirano/myapplication" target="_blank">https://github.com/TIRANOym/Android_Project/tree/master/app/src/main/java/com/tirano/myapplication</a></li>
            <li><PreviewImg imgUrl={'/preview_match_game.png'}/></li>
          </ul>
          <li>(2019) {t("others.specific_person_tracking_program")}</li>
          <ul>
            <li>Keyword: 
              <a className="stag">OpenCV</a>
              <a className="stag">Python3</a>
            </li>
            <li>GitHub: <a href="https://github.com/TIRANO-ym/Python_VideoProcessing-Project" target="_blank">https://github.com/TIRANO-ym/Python_VideoProcessing-Project</a></li>
            <li><PreviewImg imgUrl={'/preview_python_video.png'}/></li>
          </ul>
          <li>(2019) {t("others.smart_window")}</li>
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
