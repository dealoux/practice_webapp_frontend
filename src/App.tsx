import { useState } from "react";
import Message from "./components/Message";
import Footer from "./components/Footer";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Form from "./components/Form";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisability] = useState(false);
  const [emotion, setEmotion] = useState("Happy");

  return (
    <>
      <div>
        <Message />
        <CheckBox />
        <Form />
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
          <Alert onClose={() => setAlertVisability(false)}>{emotion}</Alert>
        )}
        <Button
          colour="primary"
          onClick={() => {
            setAlertVisability(true);
            setEmotion("Happy");
          }}
        >
          Happy
        </Button>
        <Button
          colour="danger"
          onClick={() => {
            setAlertVisability(true);
            setEmotion("Sad");
          }}
        >
          Sad
        </Button>
      </div>
      <div>

      </div>
      <div>
        <Footer author="DeaLoux" year={new Date().getFullYear()} />
      </div>
    </>
  );
}

export default App;
