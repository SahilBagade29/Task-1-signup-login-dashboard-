"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "../page.module.css";

const SignUp = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = () => {
    const userData = { userName, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup Successful");
    router.push("/");
  };

  return (
    <>
      <h2>SignUp Page</h2>
      <br />
      <input
        className={style.inputfield}
        type="text"
        placeholder="Enter User Name"
        value={userName}
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
      <button className={style.signupbutton} onClick={() => handleSignUp()}>
        {" "}
        Submit{" "}
      </button>
    </>
  );
};

export default SignUp;
