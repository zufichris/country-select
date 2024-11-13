import styled from "styled-components";
import Container from "./Container";

const Header = styled(Container)({
  background:
    "linear-gradient(151.43deg, rgba(123, 62, 253, 0.75) 10.95%, rgba(234, 75, 237, 0.85) 29.4%)",
  width: "100%",
  paddingBottom: "50px",
  paddingTop: "50px",
  color: "white",
  fontSize: "1.3em",
  fontWeight: "600",
  position: "absolute",
  top: 0,
  zIndex: -100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default Header;
