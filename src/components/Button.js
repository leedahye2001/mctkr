import React from "react";

const Button = () => {
  return (
    <div>
      <a href="/login">
        <button
          className="py-2 px-5 bg-black hover:bg-white border-2 border-white
            hover:border-black hover:border-2 font-bold text-white
            hover:text-black rounded-full transition duration-300"
        >
          로그인
        </button>
      </a>
    </div>
  );
};

export default Button;
