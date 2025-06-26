
import { createContext, useEffect, useState } from "react";
import axios from 'axios';



export const Mycontext = createContext();

export const MyProvider = ({ children }) => {

    
  useEffect(() => {
        //* fetch data

        const getComments = async () => {
            let response = await axios.get(import.meta.env.VITE_APP_Anime_URL)
            let data = await response.data
            setData(await data.data)
        }
        getComments()
    }, [])

    const [daata,setData] =useState([])
    const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [cpas, setCpas] = useState("");
  const [lognam, setLognam] = useState("");
  const [logpass, setLogpass] = useState("");
  const [mostakhdim, setMostakhdim] = useState("");
   let user = {
    Email: email,
    Name: nom,
    Password: password,
    Cpassword: cpas,
  };
    // ********************************
  const log = (lognam, logpass) => {
    const found = users.find(
      (val) =>
        (val.Email == lognam || val.Name == lognam) && val.Password == logpass
    );
    setMostakhdim(found);
    return !!found;
  };

// ********************************
  const sin = () => {
    if (
      cpas == password &&
      password !== "" &&
      nom.trim() !== "" &&
      email.split("@").length == 2
    ) {
    
      const updated = [...users];
      updated.push(user);
      setUsers(updated);
      setEmail("");
      setCpas("");
      setPassword("");
      setNom("");
      console.log(users);

      return true;
    }else{
       return false;
    }
      
     
    
   
  };
  const all = { daata,sin,log,mostakhdim, setMostakhdim,logpass, setLogpass,lognam, setLognam,nom, setNom,password, setPassword,cpas, setCpas,email, setEmail};


  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};