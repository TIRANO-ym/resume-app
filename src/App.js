import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import moment from "moment";
import knownTokens from "./secure/known-tokens.json";
import MainPage from "./page/main-page/main-page";
import BlockPage from "./page/second-page/block-page";


function App() {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    // resume-ym token check
    const params = new URLSearchParams(window.location.search);
    const currentToken = params.get('token');
    const checkTokenValid = (token) => {
      if (token) {
        try {
          const decoded = jwtDecode(token);
          if (knownTokens.includes(currentToken) && decoded.create) {
            const createdToken = moment(decoded.create, 'YYYYMMDD');
            return moment().diff(createdToken, 'd') < 32;
          } else if (decoded.isMaster === true) {
            return true;
          }
        } catch(e) {
          console.log(e.message);
          return false;
        }
      }
      return false;
    };
    setIsValid(checkTokenValid(currentToken));
  }, []);

  return (
    <div>
      {isValid ? <MainPage/> : <BlockPage/>}
    </div>
  );
}

export default App;
