import React, { useContext } from 'react';
import { Mycontext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import Images from '../constants/Images';

const Signup = () => {
  const { sin, cpas, email, nom, password, setCpas, setEmail, setNom, setPassword } = useContext(Mycontext);

  const navig = useNavigate();
  
  const sinn = () => {
    if (sin()) {
      navig("/Login");
    } else {
      alert("rak rlati 3awd");
    }
  };

  return (
    <div className="flex justify-center bg-gradient-to-br from-gray-100 to-blue-50">
      <div className="w-[70vw] h-[80vh] bg-white rounded-2xl shadow-2xl flex mt-5">
        <div className="overflow-x-hidden w-[50%] h-[100%]">
          <img src={Images.images} alt="" className="object-cover h-[100%] rounded-[10px]" />
        </div>
        <div className="flex flex-col items-center pl-12 pt-20 pb-9 gap-15">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-[40px]">ANIME</h1>
            <p className="font-bold text-[15px] text-black/60">Hey enter your details to sign up to your account</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              className="border-2 text-center w-[25vw] h-[6vh] bg-white rounded-[10px]"
            />
            <input
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              type="text"
              placeholder="Enter your username"
              className="border-2 text-center w-[25vw] h-[6vh] bg-white rounded-[10px]"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="border-2 text-center w-[25vw] h-[6vh] bg-white rounded-[10px]"
            />
            <input
              value={cpas}
              onChange={(e) => setCpas(e.target.value)}
              type="password"
              placeholder="Confirm your password"
              className="border-2 text-center w-[25vw] h-[6vh] bg-white rounded-[10px]"
            />
            <button
              onClick={sinn}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold mt-4 cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Signup;