import React, { useEffect ,useState} from 'react'
import getContext from './context/userContext'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function Form() {

    const {user,setUser,password,setPassword}=getContext();

    const [capital,setCapital]=useState(0);//count of capital letters
    const [small,setSmall]=useState(0); //count of small letters
    const [special,setSpecial]=useState(0); //count of special characters
    const [numeric,setNumeric]=useState(0); //count of numeric characters

    const [show,setShow]=useState(true);

    const Submission=(e)=>{
        e.preventDefault();
        console.log("form submitted");
        console.log(user);
        console.log(password);
        if(capital>0 && small>0 && special>0 && numeric>0 && password.length>=6){
            alert('Success');
        }
        else{
            alert('Failure');
        }
    }

    useEffect(()=>{
        
        if(password ){
            let capital=0;
            let small=0;
            let special=0;
            let numeric=0;

            for(let char of password){
                if(char>='A' && char<='Z'){
                    capital++;
                }
                else if(char>='a' && char<='z'){
                    small++;
                }
                else if(char>='0' && char<='9'){
                    numeric++;
                }
                else{
                    special++;
                }

                

        }
                setCapital(capital);
                setSmall(small);
                setNumeric(numeric);
                setSpecial(special);
    }
    },[setPassword])

  return (
    <div>
        <form action="" onSubmit={Submission}>
            <div className='flex flex-col gap-5 w-fit h-fit bg-neutral-400 p-10 rounded-xl '>
                <div className='flex w-full h-full justify-stretch'>
                    <label htmlFor="" className='text-2xl p-2 text-slate-700 font-medium'>User-Name:</label>
                    <input type="text" name="" id="" className='bg-slate-300 text-2xl p-2 w-[70%] rounded-xl border-2 border-blue-600' onChange={(e)=>setUser(e.target.value)} required/>
                </div>
                <div className='flex w-full h-full justify-stretch gap-2 relative'>
                    <label htmlFor="" className='text-2xl p-2 text-slate-700 font-medium'>Password:</label>
                    <input type={show ? "text" : "password"}
                            placeholder='Enter Your Password'
                            value={password}
                             name="" id="" className='bg-slate-300 text-2xl p-2 rounded-xl border-2 border-blue-600 pr-16' onChange={(e)=>setPassword(e.target.value) }  required/>
                    <div className='absolute right-5 top-3'>
                        {
                            show ? <RemoveRedEyeIcon style={{ fontSize: '30px' }} color="action" onClick={()=>setShow(!show)}/> : <VisibilityOffIcon style={{ fontSize: '30px' }} color="action" onClick={()=>setShow(!show)}/>
                        }
                    </div>
                </div>
                <div className='w-[100%] h-[100%] flex flex-col items-start' >
                    <div className={`text-xl font-medium ${(capital>0) ? 'text-green-600' : 'text-gray-600'}`}>*Include Capital Letters</div>
                    <div className={`text-xl font-medium ${(small>0) ? 'text-green-600' : 'text-gray-600'}`}>*Include Small Letters</div>
                    <div className={`text-xl font-medium ${(special>0) ? 'text-green-600' : 'text-gray-600'}`}>*Include special character</div>
                    <div className={`text-xl font-medium ${(numeric>0) ? 'text-green-600' : 'text-gray-600'}`}>*Include numeric character</div>
                    <div className={`text-xl font-medium ${(password.length>=6) ? 'text-green-600' : 'text-gray-600'}`}>*Minimum length of 6</div>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <button type="submit" className='p-2 text-3xl rounded-lg  font-bold text-cyan-50 bg-blue-600 hover:bg-blue-500 hover:text-4xl hover: relative z-10'>Submit</button>
                </div>
                
            </div>
            
        </form>
    </div>
  )
}

export default Form