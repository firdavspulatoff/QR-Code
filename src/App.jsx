import React,{useState} from "react";
import QRCode from 'react-qr-code'

function App() {
  const [value,setValue]=useState("")
  return (
    <div>
     <h1 className="title">Содержимое QR-кода</h1>
    
    <form className="inputt" action="">
      <input type="text" 
      onInput={(e)=> setValue(e.target.value)}
       placeholder="ВВедите QR-код " 
       className="input"/>
      </form> 
      <div className="qr_code">
      <QRCode
      className="qr_codee"
      value={value}
      />
      </div>
    </div>
  );
}

export default App;
