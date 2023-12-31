import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { Container } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;


const App = () => {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  return (
    <Container>
      <div className="App">
        <Header title="My Images Gallery" />
        <Search
          word={word}
          setWord={setWord}
          handleSubmit={handleSearchSubmit}
        />
      </div>
    </Container>
  );
};

export default App;
