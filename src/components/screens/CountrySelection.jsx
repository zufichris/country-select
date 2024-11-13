import { useState } from "react";
import Container from "../ui/Container";
import Header from "../ui/Header";
import { BackButton } from "../ui/Button";
import { SearchContainer, SearchIcon, SearchInput } from "../ui/Search";
import Flag from "../ui/Flag";
import { ListContainer, ListItem, ListItemText } from "../ui/List";
import { RadioButton } from "../ui/Input";
import Text from "../ui/Text";
import countries from "../../data/countries.json";
export const CountrySelection = ({ onSelect }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    onSelect(country);
  };
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Header>
        <BackButton>←</BackButton>
        <Text> Country/Region</Text>
      </Header>
      <SearchContainer>
        <Text>Country/Region Available in English</Text>
        {/* <SearchIcon>🔍</SearchIcon> */}
        <SearchInput
          placeholder="Search for country"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <ListContainer>
        {filteredCountries.map((country, index) => (
          <ListItem
            key={country.name}
            onClick={() => handleCountrySelect(country)}
          >
            <ListItemText>
              <Flag src={`https://countryflagsapi.com/png/${country.code}`} />
              {country.name}
            </ListItemText>
            <RadioButton
              type="radio"
              checked={selectedCountry?.name === country.name}
              onChange={() => handleCountrySelect(country)}
            />
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
};
