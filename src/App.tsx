import { useState } from "react";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisability] = useState(false);

  return (
    <>
      <div>
        <Message />
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisability(false)}>Alert</Alert>
        )}
        <Button colour="danger" onClick={() => setAlertVisability(true)}>
          Button
        </Button>
      </div>
      <div>
        <Footer year = {(new Date().getFullYear())}>
          Dealoux
        </Footer>
      </div>
    </>
  );
}

export default App;
