// import Welcome from "./Welcome";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hallo } from "./Hallo";
import { HalloWithoutJSX } from "./Hallo";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { StyleForm } from "./StyleForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";

import { Card } from "./assets/Card";
import { CardWithoutJSX } from "./assets/Card";
import "./App.css";

function App() {
  return (
    <div>
      <Product 
        title='Gaming laptop' 
        price={1299.9} 
        inStock={true} 
        categories={['Electronics', 'Computers', 'Gaming']} 
      />
      <Welcome name='Bruce' alias='Batman' />
      <Welcome name='Clark' alias='Superman' />
      <Welcome name='Diana' alias='Wonder Woman' />

      <CandidateProfile />
      <StyleForm />
      <UserProfile />
      <Hallo />
      <HalloWithoutJSX />
      
      <Button />
      <ContactForm />

      <Card />
      <CardWithoutJSX />
    </div>
  );
}

export default App;