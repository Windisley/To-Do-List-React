import { useState, useRef, useEffect } from 'react'
import './App.css'
import List from './components/List'
import { AiFillDelete } from "react-icons/ai";
import { MdDataSaverOn } from "react-icons/md";


function App() {
  const [list, setList] = useState([])
  const $inputref = useRef()


  function handlevalue(){
   const newtask = $inputref.current.value 
   
   if(newtask){
     setList((lists)=> [...lists, newtask])   
     $inputref.current.value = "" 

   }else{
     alert("Campo Vazio Digite Uma Tarefa!")
   }
  
   console.log(list)
  }

  function delitem(index){

    setList((prevList)=>{
        const updatedList = prevList.filter((_, i) => i !== index);
        localStorage.setItem("taskList", JSON.stringify(updatedList));
        return updatedList;

    })
    
  }

  function savelist() {
    localStorage.setItem("taskList", JSON.stringify(list));
    
  alert("Tasks saved!");
  }

useEffect(() => {
    
const savedList = localStorage.getItem("taskList");
    
  
if (savedList) {
      
setList(JSON.parse(savedList));
  }
}, []);


  return (
    <div className='bg-background w-full min-h-dvh flex justify-center items-center flex-col pt-6 pb-6'>
        <div className='max-w-5xl min-h-96 border-2 border-secundary p-6 rounded-xl flex flex-col gap-y-8'>
            <div className='flex justify-center gap-8'>
               <input ref={$inputref}  type="text" placeholder='Digite uma tarefa!' className='max-w-80 px-12 py-1 border-2 text-primary text-center outline-none border-secundary bg-secundary'/>
               <button onClick={handlevalue} className='min-w-36 max-w-26 px-8 bg-red-500 border-2 border-secundary bg-secundary text-primary capitalize hover:scale-110 ease-in-out duration-300 rounded-lg'>enviar</button>
            </div>

            <div className='flex flex-col justify-center items-center '>
              {list && 
              list.map((iten, index)=>(
                <div  key={index} className='w-full justify-center items-center  p-2 border-2 border-gray-300 border-b-1 flex justify-center items-center relative'>
                   <ul>
                     <li className='text-secundary truncate capitalize'>
                        {iten}
                     </li>
                   </ul>
                  <div onClick={()=>{delitem(index)}} className='absolute bottom-1 mx-2 translate-y-1/2 left-full  cursor-pointer'>
                    <AiFillDelete className='hover:text-red-600 ease-in-out duration-300  text-size-4'/>
                  </div>
                  <div onClick={()=>{savelist()}} className='absolute top-0 mx-2 translate-y-1/2 left-full cursor-pointer'>
                     <MdDataSaverOn className='hover:text-green-500 ease-in-out duration-300  text-size-4'/>
                  </div>
                </div>
              ))
                
              }
           </div>
        </div>
       
    </div>
  )
}

export default App
