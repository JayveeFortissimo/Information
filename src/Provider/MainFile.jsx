import Create from './Create.js'
import { useReducer,useState,useEffect } from 'react'

const Elements ={
    PUSH:"push",
    DELETE:"Delete"
}

const reduce = (state,action) =>{
  switch(action.type){
    case Elements.PUSH:
   return [...state,action.Credentials];
    break;
    
    case Elements.DELETE:
      return state.filter(elements => elements.name !== action.deleteID)
      break;
  }
}

const MainFile = ({children}) => {
    const [Open,setOpen] = useState(false);
    const [pics,setPics] = useState(null);
    const [information,dispatch] = useReducer(reduce,[]);
    
    const [info,setinfo] = useState({
        name:"",
        address:"",
        age:""
    })

const Infos = (value,Categoty) =>{
      setinfo(callBack =>{
           return{
            ...callBack,
            [Categoty]:value
           }
      })
}

const Pushing = (e) =>{
    e.preventDefault();
    dispatch({type:Elements.PUSH, Credentials:{name:info.name,address:info.address,age:info.age,picture:pics}})
    setinfo({ name: "", address: "", age: "" }); // Clear input values
    setPics(null);

  }

  const DeleteInfo =(name) =>{
   dispatch({type:Elements.DELETE, deleteID:name})
  }


const opens = () => setOpen(element => !element);

const functionality ={
     Infos,
     Pushing,
     setPics,
     opens,
     Open,
    information,
    info,
    pics,
    DeleteInfo
}


console.log(information)
  return (
    <Create.Provider value={{functionality}}>
    {children}
    </Create.Provider>
  )
}

export default MainFile