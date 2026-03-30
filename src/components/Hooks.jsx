// Hooks in React
//1 useState Hook 
//2 useEffect Hook
//3 useRef Hook
//4 useContext Hook
//5 useReducer Hook
//6 useMemo Hook
//7 useCallback Hook
//8 Custom Hooks
//9 useLayoutEffect Hook

  import { useEffect, useState } from "react";

     function Hooks() {
        const [formdata , setFormdata] = useState({
           username: "",
           email: "",
           password: "",
            confirmPassword: ""
        });
        useEffect(() =>{
            if(formdata.email){
               alert("This is a Email")
            }
        },[formdata.email])
           const handleinput = (event)=>{
                const name = event.target.name;
                 const value = event.target.value;
                    setFormdata({...formdata ,  [name]:value});  
                    //                 
                    // console.log(`The input name is ${name} and value of input field is ${value}`);
           }     

          return(
              <>
              <div className="h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md bg-pink-700 mx-auto p-4 rounded-lg">
    <label className="text-white">Name:</label>
    <input type="text" placeholder="Search name" name="username" onChange={handleinput} className="w-full max-w-lg mb-4 p-2 rounded-lg"/>

    <label className="text-white">Email:</label>
    <input type="email" placeholder="Search Email" name="email" onChange={handleinput} className="w-full max-w-lg p-2 mb-4 rounded-lg"/>

    <label className="text-white">Password:</label>
    <input type="password" placeholder="Search Password" onChange={handleinput} name="password" className="w-full max-w-lg p-2 mb-4 rounded-lg"/>

    <label className="text-white">Confirm Password:</label>
    <input type="password" placeholder="Search Confirm Password" onChange={handleinput} name="confirmPassword" className="w-full max-w-lg p-2 mb-4 rounded-lg"/>

    <button className="block px-5 py-3 bg-black text-white rounded-xl mt-4">
      Click Me
    </button>
   <p className="text-white">{`Username is ${formdata.username} and Email is ${formdata.email}`}</p>
  </div>
</div>
  </>
          )
     }
   export default Hooks;