import { BackButton } from "../ui/Button";
import Container from "../ui/Container";
import Header from "../ui/Header";
import { RadioButton } from "../ui/Input";
import { ListContainer, ListItem, ListItemText } from "../ui/List";
const languages = [];
export const LanguageSelection = ({ onSelect, country }) => {
  const filteredLanguages = languages.filter(
    (lang) => lang.region === country.name || lang.region === "Other"
  );

  return (
    <Container>
      <Header>
        <BackButton>←</BackButton>
        Language
      </Header>
      <ListContainer>
        {filteredLanguages.map((language, index) => (
          <ListItem key={index}>
            <ListItemText>{language.name}</ListItemText>
            <RadioButton type="radio" name="language" />
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
};
