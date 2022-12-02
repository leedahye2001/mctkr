// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";

// const Account = () => {
//   const { user, logout } = UserAuth();
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate("/");
//       console.log("로그아웃 하셨습니다.");
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
//   return (
//     <div>
//       <h1>계정</h1>
//       <p>User Email: {user && user.email}</p>
//       <button
//         onClick={handleLogout}
//         className="border-2 border-[#b0b0b0] bg-[#b0b0b0]
//         hover:bg-[#d9d9d9] hover:border-[#d9d9d9] text-white rounded-full px-6 py-2 my-4"
//       >
//         로그아웃
//       </button>
//     </div>
//   );
// };

// export default Account;
