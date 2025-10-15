import { useState } from "react";

const Otp = () => {
  const OTP_DIGIT_COUNT = 5;

  const [digit, setDigit] = useState([...Array(OTP_DIGIT_COUNT).fill("")]);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...digit];
    newArr[index] = newValue.slice(-1);
    setDigit(newArr);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex space-x-2">
        {digit.map((item, index) => (
          <input
            className="w-12 h-12 text-center text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
            key={index}
            type="text"
            value={item}
            onChange={(e) => handleOnChange(e.target.value, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
