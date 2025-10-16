import React, { useEffect, useRef, useState } from "react";

const Otp = () => {
  const COUNT = 5;
  const [digit, setDigit] = useState([...Array(COUNT).fill("")]);

  const handleDigit = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...digit];
    newArr[index] = newValue.slice(-1);
    setDigit(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleBackspace = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight") {
      refArr.current[index + 1]?.focus();
    }

    if (e.key === "ArrowLeft") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-6">ENTER OTP</h1>
        <div className="flex justify-center space-x-4">
          {digit.map((i, index) => (
            <input
              className="h-[60px] w-[60px] border-2 border-gray-500 rounded-lg text-center text-xl text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 transform hover:scale-105"
              key={index}
              type="text"
              value={i}
              onChange={(e) => handleDigit(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(input) => (refArr.current[index] = input)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Otp;
