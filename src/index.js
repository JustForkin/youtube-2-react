import React from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
