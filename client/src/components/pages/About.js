import React from "react";

const About = () => {
  return (
    <div className="mt-5">
      <h1>About This App</h1>
      <p className="lead">
        <strong>Version:</strong> 1.0.1
      </p>
      <p>
        This app can be used to encrypt or decrypt files. Making sending private
        text or images more secure. Simply just go to the{" "}
        <strong>Encrypt</strong> page, choose the file you would like to
        encrypt, input a secret key, and press the encrypt button. Then a text
        file with the encrypted data will be saved onto your computer which you
        can then send to anyone. Decrypting the text file will then be easy go
        to the <strong>Decrypt</strong> page, choose the encrypted file, enter
        the same secret key used to encrypt the file and press the decrypt
        button. The decrypted text or image will then be displayed on your
        screen.
      </p>
      <p>This application makes use of the following encryption algorithms:</p>
      <ul>
        <li>
          <strong>AES</strong>
        </li>
        <li>
          <strong>Ceaser cipher</strong>
        </li>
        <li>
          <strong>Rail Fence cipher</strong>
        </li>
      </ul>
      <p>This app can encrypt the following types of files:</p>
      <ul>
        <li>
          Basic Text files <strong>(.txt)</strong>
        </li>
        <li>
          Image files <strong>(.jpg, .jpeg, .png, .gif)</strong>
        </li>
      </ul>
    </div>
  );
};

export default About;
