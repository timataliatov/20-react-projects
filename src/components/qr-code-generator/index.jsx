import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
  }

  function handleReset() {
    setQrCode('');
    setInput('');
  }

  function handleCopy() {
    navigator.clipboard.writeText(qrCode);
    // You can add additional visual feedback for copy action if needed
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-4">QR Code Generator</h1>
      <div className="mb-4">
        <input
          className="border rounded py-2 px-4 mr-2"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here."
        />
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleReset}
        >
          Reset
        </button>
        {qrCode && (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCopy}
          >
            Copy
          </button>
        )}
      </div>
      <div className="mt-14">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
