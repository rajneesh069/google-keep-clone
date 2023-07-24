import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {

  return (
    <div>
      <Header />
      <CreateArea />
        <Note title="Title" content="Content" />
      <Footer />
    </div>
  );
}

export default App;
