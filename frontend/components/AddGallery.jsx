import React, { useRef } from "react";

export default function App() {
  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length) {
      console.log("Selected files:", files);
    }
  };

  return (
    <div className="min-h-screen bg-[#ccd1bb] text-black font-['Anton']">
      <header className="bg-black text-white py-4 flex items-center justify-between px-6 shadow-md">
        <img src="../src/assets/images/iste-logo-final 1.svg" className="h-[10vh] float-left mx-4"/>
        <h1 className="text-3xl">ISTE</h1>
        <div className="w-10"></div> 
      </header>

      <button className="text-4xl mt-[6vh] ml-[6vw] cursor-pointer">Back</button>

      <div className="flex flex-col items-center mt-12">
        <h2 className="text-2xl mb-4 font-bold">Add Gallery Photos</h2>
        <div
          className="w-[300px] h-[150px] border border-dashed border-gray-400 bg-white flex flex-col items-center justify-center cursor-pointer"
          onClick={handleBoxClick}>
          <p className="mt-2 text-sm text-gray-700">Click to upload photos</p>
        </div>

        <input type="file" multiple ref={fileInputRef} onChange={handleFileChange} className="hidden"/>

        <button className="mt-6 bg-[#bfc9a4] text-black font-bold px-8 py-2 border border-black">Submit</button>
      </div>
    </div>
  );
}
