import styled from "styled-components";
import Container from "./Container";
import Input from "./Input";

export const SearchContainer = styled(Container)({
  borderRadius: "20px 20px 0px 0px",
  padding: "1.5rem",
  background: "white",
  marginTop: "100px",
  width: "100%",
});
export const SearchIcon = styled.div({
  fontSize: "25px",
});
export const SearchInput = styled(Input)({
  border: "none",
  borderRadius: "20px",
  outline: "none",
  boxShadow: " 0px 4px 20px 0px #0000000F",
  padding: "0.8rem",
  width: "100%",
});
