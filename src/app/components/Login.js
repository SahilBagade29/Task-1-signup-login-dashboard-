"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "../page.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const navigate = useRouter();
  const validUser = "sahil";
  const validPassword = "123";
  console.log(username, "username");

  const handleLogin = () => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    // Check if the entered username and password match the stored data

    if (
      storedUserData &&
      username === storedUserData.userName &&
      password === storedUserData.password
    ) {
      console.log("Login Success");
      alert("Login Success");
      router.push("/Home");
    } else {
      console.log("Login Failed");
      alert("Login Failed");
    }
  };
  return (
    <>
      <h2>Login Page</h2>
      <br />
      <input
        className={style.inputfield}
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
      <input
        className={style.inputfield}
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <br />
      <button className={style.loginbutton} onClick={handleLogin}>
        Login
      </button>
      <br />
      <br />
      <button
        className={style.loginbutton}
        onClick={() => router.push("/SignUp")}
      >
        SignUp
      </button>
    </>
  );
};

export default Login;
