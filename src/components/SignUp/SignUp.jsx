import { useState } from "react";
import {NavLink} from "react-router-dom";

import Input from "../styledComponents/Input.js";
import Wrapper from "../styledComponents/Wrapper.js";
import Image from "../styledComponents/Image.js";
import SplitedWrapper from "../styledComponents/SplitedWrapper.js";
import Button from "../styledComponents/Button.js";
import User from "../../models/userModel.js";

import {
  validateEmail,
  validateName,
  validatePassword,
  isEmailUnique,
} from "../../scripts/validator.js";


function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isReceive: false,
  });
  const IMAGE_LINK = "https://cdn-icons-png.flaticon.com/512/565/565547.png";

  return (
    <div>
      <Wrapper>
        <Image src={IMAGE_LINK} alt="lock" />
        <h1>Sign Up</h1>
        <div>
          <SplitedWrapper float="left">
            <Input
              type="text"
              id="fName"
              name="fName"
              placeholder="First Name *"
              value={state.firstName}
              onChange={(e) =>
                setState((existingValues) => ({
                  ...existingValues,
                  firstName: e.target.value,
                }))
              }
              isValid={validateName(state.firstName)}
            />
          </SplitedWrapper>
          <SplitedWrapper float="right">
            <Input
              type="text"
              id="lName"
              name="lName"
              placeholder="Last Name *"
              value={state.lastName}
              onChange={(e) =>
                setState((existingValues) => ({
                  ...existingValues,
                  lastName: e.target.value,
                }))
              }
              isValid={validateName(state.lastName)}
            />
          </SplitedWrapper>
        </div>
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
          isValid={
            validateEmail(state.email) ? isEmailUnique(state.email) : false
          }
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
          isValid={validatePassword(state.password)}
        />

        <div>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onChange={(e) =>
              setState((existingValues) => ({
                ...existingValues,
                isReceive: e.target.checked,
              }))
            }
            checked={state.isReceive}
          />
          <label>
            I want to receive inspiration, marketing, promotions and updates via
            email
          </label>
        </div>

        <Button onClick={() => register(state)}>SIGN UP</Button>

        <div style={{ height: "40px" }}>
          <SplitedWrapper float="right">
            <NavLink className="link" to="/">Already have an account? Sign in</NavLink>
          </SplitedWrapper>
        </div>
      </Wrapper>
    </div>
  );
}

function register(state) {
  if (!validateName(state.firstName)) {
    alert("Enter your first name");
    return;
  }
  if (!validateName(state.lastName)) {
    alert("Enter your last name");
    return;
  }
  if (!validateName(state.email)) {
    alert("Wrong email");
    return;
  }
  if (!isEmailUnique(state.email)) {
    alert(
      "This email is alredy exist"
    );
    return;
  }
  if (!validateName(state.password)) {
    alert(
      "Password must contain Upper and Lower case letters and 8 characters"
    );
    return;
  }

  let userList = JSON.parse(localStorage.getItem("userList"));
  if (!userList) {
    userList = [];
  }

  const newUser = new User(
    state.firstName,
    state.lastName,
    state.email,
    state.password,
    state.isReceive
  );

  userList.push(newUser);

  localStorage.setItem("userList", JSON.stringify(userList));
}

export default SignUp;
