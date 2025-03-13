import { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-2">QR Code Generator</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        className="border p-2 rounded"
      />
      <div className="mt-4">
        {text && <QRCode value={text} size={200} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
