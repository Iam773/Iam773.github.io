import React, { useState } from "react";
import Tesseract from "tesseract.js";

const ImageToText = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const extractText = async () => {
    if (!file) return;


    Tesseract.recognize(
      file,
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      console.log(text);
      setText(text);
    })

    // const result = await Tesseract.recognize(file, {
    //   lang: "eng",
    // });

  };

  return (
    <div>
      {/* <form> */}
        <input type="file" accept="image/*" onChange={handleChange} />
        {file && <p>{file.name}</p>}
        <button onClick={extractText}>Extract Text</button>
      {/* </form> */}
      {text && <p>{text}</p>}
    </div>
  );
};

export default ImageToText;
