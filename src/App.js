import React, { useState, useEffect } from "react";
import "./App.css";
import { MasonryComponent } from "./Components/Masonry";
import { TextField, Container } from "@material-ui/core";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "QsykgWwg_a_rTCG-4fGZl_mBVJJKg3ZeN1eq_tXoAnw",
});

function App() {
  const [inputText, setInputText] = useState("");
  const [photos, setPhotos] = useState([]);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    api.search
      .getPhotos({ query: inputText, page: 1, perPage: 100 })
      .then((response) => {
        setPhotos(response.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [inputText]);

  return (
    <div className="App">
      <Container>
        <TextField
          type="text"
          label="Search"
          fullWidth
          margin="normal"
          name="userName"
          value={inputText}
          onChange={onChange}
        />
        <MasonryComponent photos={photos} />
      </Container>
    </div>
  );
}

export default App;
