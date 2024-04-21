import { useContext } from "react";
import Create from '../Provider/Create.js';

const Header = () => {

  const {functionality} = useContext(Create)

  return (
    <header className="min-h-20 flex justify-between items-center px-20 text-2xl font-Google text-amber-500 sm:gap-0  xs:gap-12">
        <h1>Information.io</h1>
           
           <h1 onClick={functionality.opens}>Profile</h1>
    </header>
  )
}

export default Header