import styled from "styled-components";
import Container from "./Container";
import Text from "./Text";

export const ListContainer = styled.ul({
  background: "yellow",
});
export const ListItemText=styled(Text)({
    color:"purple"
})
export const ListItem = styled.li({
  border: "1px solid green",
});
