import React, { useState } from "react";

const LogoutButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

const LoginButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
)

const LoginControll = () => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  }

  if (isLoggedIn) {
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn}></LogoutButton>;
  }

  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
}

export default function App() {
  return <LoginControll />;
}