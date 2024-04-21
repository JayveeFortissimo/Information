import { useContext } from "react";
import Create from '../Provider/Create.js';

const Dialog = () => {

    const {functionality} = useContext(Create);

  return (
    <>
     <div className="fixed z-10 ">
        <div className="min-h-56 min-w-96 bg-slate-400 px-12 py-1 flex flex-col gap-5">
   {/*///////////////Exit/////*/}

   <div className="min-w-96 text-end">
    <button onClick={functionality.opens}>X</button>
   </div>


   {/*///////////Container//////*/}
   {
      functionality.information.map((elements,index)=>{
        
      return(
        <div  key={index} className="min-h-auto flex gap-4 items-center">
               
        <img  src={URL.createObjectURL(elements.picture)} alt="" style={{height:"5rem"}}/>
        <div className="flex gap-5">
        <h1>{elements.name}</h1>
        <h1>{elements.address}</h1>
        <h1>{elements.age}</h1>
        <div>
          <button className="border border-gray-700 py-1 px-1" onClick={()=> functionality.DeleteInfo(elements.name)}>Delete</button>
        </div>
        </div>
        </div>
      )
     
      })
   }
          
        </div>
   </div>
    
    </>
  )
}

export default Dialog