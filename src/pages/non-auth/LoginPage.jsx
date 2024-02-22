import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    const storedUser = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUser.find(user => user.id === id && user.password == password);
    try{
      if(user) {
        // id와 password 모두 같을 시 회원가입 성공
        alert("로그인에 성공하였습니다. 메인 페이지로 이동할게요");
        navigate('/');
      } else {
        alert("존재하지 않는 유저입니다.");
      }
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form onSubmit={async (e) => {}}>
        <div>
          <label htmlFor="id">id</label>
          <input value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
        </div>

        <button type="submit" onClick={loginHandler}>Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
