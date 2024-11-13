import React from "react";
import { CountrySelection } from "./components/screens/CountrySelection";
import { LanguageSelection } from "./components/screens/LanguageSelection";
import { ConfirmationScreen } from "./components/screens/Confirm";
import Container from "./components/ui/Container";

const App = () => {
  return (
    <Container
      style={{
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <CountrySelection onSelect={() => {}} />
      {/* <LanguageSelection country={{}} onSelect={() => {}} />
      <ConfirmationScreen country={{}} language={""} /> */}
    </Container>
  );
};

export default App;
