// import Welcome from "./Welcome";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hallo } from "./Hallo";
import { HalloWithoutJSX } from "./Hallo";
import { UserProfile } from "./UserProfile";

import { Card } from "./assets/Card";
import { CardWithoutJSX } from "./assets/Card";
import "./App.css";

function App() {
  return (
    <div>
      <UserProfile />
      <Hallo />
      <HalloWithoutJSX />
      <Welcome />
      <Button />

      <Card />
      <CardWithoutJSX />
    </div>
  );
}

export default App;