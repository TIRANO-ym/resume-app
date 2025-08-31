import './block-page.css';
import { useEffect, useState } from "react";

function BlockPage() {
  const [darkFlag, setDarkState] = useState(true);

  // default theme init
  useEffect(() => {
    const darkTheme = localStorage.getItem('darkTheme');
    if (darkTheme !== null) {
      setDarkState(darkTheme === 'true');
    }
  }, []);

  return (
    <div className={`block-page ${darkFlag ? 'darkTheme' : 'lightTheme'}`}>
      <div className='container'>
        <div className='header-text'>
          페이지 접근권한이 없거나 링크가 오래되어 키가 만료되었습니다
        </div>
        <div>
          해당 링크는 개인의 경력기술서 페이지이기 때문에 천년만년 공개할 수가 없습니다 🙇‍♀️
          <br/>
          <span className='contact-text'>연락처: yeomyeong26@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default BlockPage;
