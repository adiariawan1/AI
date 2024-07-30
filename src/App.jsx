import { useState } from 'react'
import './App.css'
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import {darcula} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { rquestToGroq } from './utils/groq'

function App() {
 const [data ,setData]= useState("")
  
  
  
  
  
  const aisubmit =async() => {
     const ai =await rquestToGroq(content.value)
   setData(ai)
  }
  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
        <div className="text-purple-600 text-4xl  ">
          <h1 className=" font-semibold">ADI AI</h1>
        </div>
        <div className="text-indigo-500 font-bold font-serif ">
          <h2 className="flex justify-center">Welcome dude,im Adi</h2>
          <p>enter this button and you ready explor in the world</p>
        </div>
        <form className="gap-3">
          <input 
          placeholder="Do you have questions?"
          className="rounded-md py-1 text-black pr-1 pl-1"
          id="content"
          type="text"
          />
          <button 
          onClick={aisubmit}
          type="button"
          className="bg-indigo-500 py-1 text-white px-2 font-bold rounded-md"
          >Search</button>
        </form>
      <div className="max-w-xl" >
        {data ?
          <SyntaxHighlighter language="swift" style={darcula} wrapLongLines={true}>{data}</SyntaxHighlighter>
        :null
       }
        </div>
        
    </main>
   )
}

export default App
