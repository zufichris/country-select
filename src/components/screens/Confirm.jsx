import { DoneButton } from "../ui/Button";
import Container from "../ui/Container";
import Header from "../ui/Header";
import { ListContainer, ListItemText } from "../ui/List";

export const ConfirmationScreen = ({ country, language }) => (
    <Container>
      <Header>
        Country/region and language
      </Header>
      <ListContainer>
        <ListItemText>Country/Region: {country.name}</ListItemText>
        <ListItemText>Language: {language || 'English'}</ListItemText>
      </ListContainer>
      <DoneButton>DONE</DoneButton>
    </Container>
  );