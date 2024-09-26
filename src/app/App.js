
import React from 'react';
export  const App = () => {
  return (
    <div>
        <Login/>
    </div>
  )
}


const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg flex w-[1440px] h-[873px]">
  
        <div className="w-1/2 p-10">
          <h2 className="font-futura text-[50px] font-extrabold text-transparent text-stroke">LOGIN</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="p-3 border border-gray-300 w-[595.3px] h-[58.85px] top-[149px] left-[57.51px] rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 w-[595.54px] h-[59.18px] top-[230px] left-[57.51px] rounded "
            />
            <button className="bg-red-600 text-white py-3 rounded hover:bg-red-700 w-[313.99px] h-[60.74px] top-[324.4px] left-[57.51px]">
              LOGIN
            </button>
          </form>
          <div className="flex justify-between mt-4 text-sm text-[#000000]">
            <a href="#" className="w-[241.54px] h-[27.97px] top-[407px] left-[57.88px] font-fatura text-[20px] font-[600]">
              Forgot password
            </a>
            <a href="#" className="w-[130.35px] h-[27.97px] top-[407px] left-[522.25px] font-fatura text-[20px] font-[600]">
              Register
            </a>
          </div>
        </div>

       
        {/* <div className="absolute w-[649.33px] h-[1143.68px] top-[-114.7px] left-[1260.44px] gap-0 opacity-0 rotate-[-28.89] bg-[#DA211C] ">
          <img
            src="/hamburger.png"
            alt="Burger"
            className="w-48 h-48"
          />
         
        </div> */}
        
        <div>
            <img src="/hamburger.png" alt="burger" className="w-80 h-84" />
          </div>
      </div>
    </div>
  );
};

export default Login;
