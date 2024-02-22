import React, { useEffect, useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('users')) || [];
    // access 토큰 존재 여부
  })
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>

      {/* 로그인 여부에 따라 조건부 렌더링 */}
      {isLoggedIn? (
        <p>안녕하세요, {nickname}님!</p>
      ):(
        <p>로그인을 해주세요.</p>
      )}
    </div>
  );
};

export default Home;
