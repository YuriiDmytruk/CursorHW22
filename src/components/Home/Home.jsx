import { useNavigate } from "react-router-dom";

import Button from "../styledComponents/Button";
import Wrapper from "../styledComponents/Wrapper";

function Home() {
  const userList = JSON.parse(localStorage.getItem("userList"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();
  if (loggedInUser) {
    const user = userList.find((e) => e.email === loggedInUser.email);
    

    return (
      <Wrapper>
        <h1>Welcome back</h1>
        <h1>{user.firstName} {user.lastName}</h1>
        <p>{user.email}</p>
        <Button onClick={() => {logOut(); navigate("/signin")}}>Log out</Button>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h1>Please Sign in</h1>
        <Button onClick={() => {navigate("/signin")}}>Move to Sign in form</Button>
      </Wrapper>
    );
  }
}

function logOut(){
  localStorage.removeItem("loggedInUser")
}

export default Home;
