import React, { useState } from "react";
import Inputs from "../layout/Inputs";
import axios from "axios";
import Spinner from "../layout/Spinner";

const Encrypt = () => {
  const [loading, setLoading] = useState(null);

  const handleSubmit = (data) => {
    setLoading(true);
    // Encrypt data
    handleEncrypt(data);
  };

  const handleEncrypt = async (d) => {
    const data = {
      text: d.text,
      secret: d.secret,
    };

    try {
      const res = await axios.post("/encrypt", { data });
      if (res) {
        setLoading(false);
        axios({
          url: "/download",
          method: "GET",
          responseType: "blob", // important
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "text.txt");
          document.body.appendChild(link);
          link.click();
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-5">
      <h1>
        {" "}
        <span className="text-success">En</span>cryption
      </h1>
      <Inputs name="encrypt" submit={handleSubmit} />
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default Encrypt;
