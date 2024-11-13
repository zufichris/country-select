import styled from "styled-components";

const Button = styled.button({
  padding: "0.5rem",
  border: "none",
  outline: "none",
});
export const BackButton = styled(Button)({
  width: "24px",
  height: "24px",
  padding: "0px 7px 0px 7px",
  background: "transparent",
  color: "white",
  position: "absolute",
  top: "50%",
  left: "0",
  fontWeight: "bolder",
});
export const DoneButton = styled(Button)`
  font-size: 3em;
`;

export default Button;
