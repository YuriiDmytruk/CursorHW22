import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Input from "../styledComponents/Input.js";
import Wrapper from "../styledComponents/Wrapper.js";
import Image from "../styledComponents/Image.js";
import SplitedWrapper from "../styledComponents/SplitedWrapper.js";
import Button from "../styledComponents/Button.js";

function SignIn() {
  const remeberedUser = JSON.parse(localStorage.getItem("rememberedUser"));
  const navigate = useNavigate();
  const [state, setState] = useState({
    ...(Boolean(remeberedUser)
      ? { email: remeberedUser.email }
      : { email: "" }),
    ...(Boolean(remeberedUser)
      ? { password: remeberedUser.password }
      : { password: "" }),
    ...(Boolean(remeberedUser) ? { isRemember: true } : { isRemember: false }),
  });
  const IMAGE_LINK = "https://cdn-icons-png.flaticon.com/512/565/565547.png";

  return (
    <div>
      <Wrapper>
        <Image src={IMAGE_LINK} alt="lock" />
        <h1>Sign In</h1>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email *"
          value={state.email}
          onChange={(e) =>
            setState((existingValues) => ({
              ...existingValues,
              email: e.target.value,
            }))
          }
          isValid
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password *"
          value={state.password}
          onChange={(e) =>
            setState((existingValues) => ({
              ...existingValues,
              password: e.target.value,
            }))
          }
          isValid
        />

        <div>
          <SplitedWrapper float="left">
            <input
              type="checkbox"
              id="scales"
              name="scales"
              onChange={(e) =>
                setState((existingValues) => ({
                  ...existingValues,
                  isRemember: e.target.checked,
                }))
              }
              checked={state.isRemember}
            />
            <label>Remember me</label>
          </SplitedWrapper>
        </div>

        <Button
          onClick={() => {
            if (signIn(state)) {
              navigate("/home");
            }
          }}
        >
          SIGN IN
        </Button>

        <div style={{ height: "40px" }}>
          <SplitedWrapper float="left">
            <a href="https://zenwise.com/blogs/news/want-to-be-smarter-learn-these-research-proven-ways-to-improve-your-memory-brain-health?gclid=CjwKCAjw5P2aBhAlEiwAAdY7dMZC1hNeC3USXO0UQfGtNGIG-dpQX6Y5NvSFFIC796zP6SQHgGKtRRoC8NUQAvD_BwE">
              Forgot password?
            </a>
          </SplitedWrapper>
          <SplitedWrapper float="right">
            <NavLink className="link" to="/registration">
              Don't have an account? Sign Up
            </NavLink>
          </SplitedWrapper>
        </div>
      </Wrapper>
    </div>
  );
}

function signIn(state) {
  const userList = JSON.parse(localStorage.getItem("userList"));
  const loggedInUser = userList.find(
    (e) => e.email === state.email && e.password === state.password
  );
  if (loggedInUser) {
    if (state.isRemember) {
      localStorage.setItem("rememberedUser", JSON.stringify(loggedInUser));
    } else {
      if (
        JSON.parse(localStorage.getItem("rememberedUser")).email ===
        loggedInUser.email
      ) {
        localStorage.removeItem("rememberedUser");
      }
    }
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    return true;
  } else {
    alert("Wrong email or password");
    return false;
  }
}

export default SignIn;
