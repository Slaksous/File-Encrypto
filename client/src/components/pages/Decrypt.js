import React, { useState } from "react";
import Inputs from "../layout/Inputs";
import crypto from "crypto-js";
import Spinner from "../layout/Spinner";

const Decrypt = () => {
  const [originalText, setOriginalText] = useState("");
  const [loading, setLoading] = useState(null);

  const handleSubmit = (data) => {
    setLoading(true);
    handleDecrypt(data);
  };

  const handleDecrypt = (d) => {
    const { text, secret } = d;

    try {
      const bytes = crypto.AES.decrypt(text, secret);
      const original = bytes.toString(crypto.enc.Utf8);
      if (original.length > 0) {
        setLoading(false);
        setOriginalText(original);
      } else {
        setOriginalText(
          "Text File you selected is empty or you entered the wrong secret key"
        );
      }
    } catch (err) {
      setOriginalText(
        "Something went wrong with decryption please make sure you are using the correct secret key"
      );
    }
  };

  return (
    <div className="mt-5">
      <h1>
        {" "}
        <span className="text-warning">De</span>cryption
      </h1>
      <Inputs name="decrypt" submit={handleSubmit} />
      {originalText !== "" ? (
        <textarea
          defaultValue={originalText}
          className="form-control mt-2"
          rows="10"
        />
      ) : null}
      {originalText !== "" ? (
        <div className="card">
          <img src={originalText} alt="" className="card-img-top my-3" />
        </div>
      ) : null}
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default Decrypt;
