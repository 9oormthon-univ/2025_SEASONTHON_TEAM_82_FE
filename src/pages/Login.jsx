import "./Login.css"; 
import {useNavigate} from "react-router-dom"; 
import loginImg from "../images/Login.png";

const Login = () => { 
  const navigate = useNavigate();
   const handleKakaoLogin = () => { 
    // 실제 카카오 로그인 API 연동 가능 
     navigate("/Home"); 
  }; 
  return ( 
    <div className="AppFrame"> 
      <div className="Login"> 
        <img src={loginImg} alt="배경" className="bg" /> 
        <button onClick={handleKakaoLogin} className="start">카카오로 시작하기</button> 
      </div> 
    </div> 
  ); 
} 
export default Login;