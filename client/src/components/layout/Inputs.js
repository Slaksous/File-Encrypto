import React, { useState } from "react";

const Inputs = (props) => {
  const [inputs, setInputs] = useState({
    text: "",
    secret: "",
  });

  const [error, setError] = useState("");

  let fileReader;

  const handleFileRead = () => {
    const content = fileReader.result;
    setInputs({
      ...inputs,
      text: content,
    });
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    setError("");
    if (file.type.includes("image")) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsDataURL(file);
    } else if (file.type.includes("text/plain")) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    } else {
      return setError("Incorrect FileType");
    }
  };

  const handleSecret = (e) => {
    setInputs({
      ...inputs,
      secret: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(inputs);
  };

  return (
    <div className="mt-5">
      {error !== "" ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <label htmlFor="file-input">
            Input the file you would like to {props.name}
          </label>
          <input
            style={inputStyle}
            type="file"
            className="form-control-file"
            id="file-input"
            onChange={(e) => handleFileChosen(e.target.files[0])}
            required
          />
        </div>
        <div className="input-group flex-nowrap my-4">
          <div className="input-group-prepend">
            <span className="input-group-text" id="addon-wrapping">
              Secret Key
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={handleSecret}
            required
          />
        </div>
        <button
          disabled={error !== ""}
          type="submit"
          className="btn btn-info btn-block my-3"
        >
          {props.name.toUpperCase()}
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  backgroundColor: "#e9ecef",
};

export default Inputs;
