import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="py-2 px-5 bg-black hover:bg-white border-2 border-white
            hover:border-black hover:border-2 font-bold text-white
            hover:text-black rounded-full transition duration-300"
      >
        로그인
      </button>
    </div>
  );
};

export default Button;
