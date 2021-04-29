import { ReactComponent as LogoNav } from "../images/logo_Nav.svg";
// import styled from "styled-components";
import { NavSection, NavA, LogoutSection, LogoutA } from "./Styling"

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
