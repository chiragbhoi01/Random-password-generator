import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowSpecial, setAllowSpecial] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8); // Default password length

  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (allowNumbers) charset += '0123456789';
    if (allowSpecial) charset += '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIdx = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIdx];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied!');
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/twcomponents/header.webp")' }} // Replace with your image URL
    >
      <div className="w-full max-w-sm p-6 mx-auto bg-white bg-opacity-75 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Random Password Generator</h2>

        <div className="text-center">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full p-2 text-lg font-mono bg-gray-100 border rounded-md"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={generatePassword}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Generate
          </button>

          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Copy
          </button>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={allowNumbers}
              onChange={() => setAllowNumbers(!allowNumbers)}
              className="text-blue-500"
            />
            <span>Include Numbers</span>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={allowSpecial}
              onChange={() => setAllowSpecial(!allowSpecial)}
              className="text-blue-500"
            />
            <span>Include Special Characters</span>
          </div>
        </div>

        {/* Length Slider */}
        <div className="flex flex-col items-center">
          <label htmlFor="passwordLength" className="text-sm">Password Length: {passwordLength}</label>
          <input
            id="passwordLength"
            type="range"
            min="8"
            max="20"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        {/* Powered by Marshal */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <span>Powered by </span>
          <a
            href="https://chiragbhoimarshal.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Marshal
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
