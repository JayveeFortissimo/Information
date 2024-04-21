import { useContext } from 'react';
import Create from '../Provider/Create.js';
import Dialog from './Dialog.jsx';
const Section = () => {

    const {functionality} = useContext(Create);

  return (
   <section className='min-h-screen flex justify-center items-center font-Google text-slate-50 '>
       
       
       {
            functionality.Open &&
            <Dialog/>
        }
        
       
        {/*////Cards To///?*/} 
        <div className='min-h-auto px-12 py-10 border border-current rounded'> 
          <form className='flex gap-2 flex-col' onSubmit={functionality.Pushing}>
            <div>
                <h2 className='text-xl'>Name</h2>
                <input type="text"
                 placeholder="Name"
                 value={functionality.info.name}
                 required
                  onChange={(e)=>functionality.Infos(e.target.value,"name")}
                   className='border border-gray-700 h-10 w-full px-3 bg-transparent'
                   />
            </div>
            <div>
                <h2 className='text-xl'>Address</h2>
                <input type="text"
                 placeholder='Address'
                 value={functionality.info.address}
                 required
                onChange={(e)=>functionality.Infos(e.target.value,"address")}
                 className='border border-gray-700 h-10 w-full px-3 bg-transparent'
                 />
            </div>
            <div>
                <h2 className='text-xl'>Age</h2>
                <input type="number"
                value={functionality.info.age}
                required
                onChange={(e)=>functionality.Infos(e.target.value,"age")}
             className='border border-gray-700 h-10 w-full px-3 bg-transparent'
             />
            </div>
            <div className='bg-amber-500 min-h-5 rounded hover:bg-zinc-800  ease-in duration-300'>
                <h2 className='text-xl relative top-4 text-center text-slate-950 hover:text-yellow-600'>Photos</h2>
                <input type="file"
                accept="image/*"
                required
                onChange={e => functionality.setPics(e.target.files[0])}
                className='border w-full relative opacity-0 z-10 cursor-pointe' />
            </div>
            <div>
                <button type='submit' className='h-10 w-full bg-zinc-800 text-yellow-600 rounded hover:bg-amber-500 hover:text-slate-950 ease-in duration-300'>Submit</button>
            </div>
          </form>
        </div>

      
   </section>
  )
}

export default Section