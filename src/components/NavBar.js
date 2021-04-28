import { ReactComponent as LogoNav } from "../images/logo_Nav.svg";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavSection>
      <div style={{ height: "100px", width: "150px", margin: "0px 80px" }}>
        <LogoNav />
      </div>
      <NavSection>
        <NavA href="/profile">Profile</NavA>
        <NavA href="/recipes">Recipes</NavA>
        <LogoutSection className="logout">
          <LogoutA href="/logout">Logout</LogoutA>
        </LogoutSection>
      </NavSection>
    </NavSection>
  );
}

// Styled Components

const NavSection = styled.section`
  background-color: white;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Courier New", monospace;
  font-weight: 700;
  text-decoration: bold;
`;

const NavA = styled.a`
  display: flex;
  flex-direction: row;
  color: #8586a5;
  justify-content: space-evenly;
  width: 150px;
  padding: 5px;
  margin: 15px;
  /* border: 1px solid black; */
  :hover {
    text-decoration: none;
  }
`;

const LogoutSection = styled.section`
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

const LogoutA = styled.a`
  background-color: #8586a5;
  color: white;
  height: 30px;
  height: 30%;
  border-radius: 25px;
  padding: 5px 0;
  text-align: center;
  :hover {
    background-color: white;
    color: #8586a5;
  }
`;
