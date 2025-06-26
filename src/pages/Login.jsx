import React, { useContext } from 'react';
import { Mycontext } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import Images from '../constants/Images';

const Login = () => {
    const {log,lognam,logpass,setLognam,setLogpass}= useContext(Mycontext)
    const navi = useNavigate()
    
    const login = ()=>{
        if (log(lognam, logpass)) {
            navi("/")
        }else{
            alert("rak ralati")
        }
    }
    return (
        <div className='  flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50'>
                            <div className='w-[70vw] h-[80vh]  bg-white rounded-2xl shadow-2xl flex mt-5'>
                <div className='overflow-x-hidden w-[50%] h-[100%]'>
                    <img src={Images.images} alt="" className='object-cover h-[100%] rounded-[10px]' />
                </div>
                <div className='flex  flex-col items-center pl-12 pt-20 pb-9 gap-15'>
                   <div className='flex  flex-col items-center'>
                     <h1 className='font-bold text-[40px]'>ANIME</h1>
                    <p className='font-bold text-[15px] text-black/60'>Hey enter you details to sign in to your account</p>
                   </div>
                    <div className='flex flex-col items-center gap-2'>
                    <input value={lognam} onChange={(e)=>{setLognam(e.target.value)}} type="text" placeholder='Enter your username/email'className= ' border-2 text-center w-[25vw] h-[6vh] bg-white rounded-[10px]'/>
                    <input value={logpass} onChange={(e)=>{setLogpass(e.target.value)}} type="password" placeholder='Enter your password'className= ' border-2 text-center text-center w-[25vw] h-[6vh] bg-white rounded-[10px]' />
                    <button onClick={()=>login()} className= ' border-2    bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold  mt-4 cursor-pointer '>Login In</button>
                    </div>
                    <p>Don't have an account? <Link to="/Signup"><span className='font-bold'>Signup Now</span></Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;