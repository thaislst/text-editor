
import './App.css'
import Editor from './components/Editors'

function App() {
 
  return (
    <>
    <div className='p-8 min-h-screen text-zin-900 bg-gradient-to-r from-cyan-200 to-cyan-400 '>
      <div className='bg-white w-[1100px] mx-auto rounded-xl min-h-[520px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr] '>
        <aside className='bg-zinc-50 border-r border-r-zinc-100 p-4'>
          <div className='flex gap-2 group'>
          <button className='w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-red-400'/>
          <button className='w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-yellow-400'/>
          <button className='w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-green-400'/>
          </div>
        </aside>
        <main className='p-4'>
        <Editor />
        </main>

      </div>
   

    
    </div>
    </>
  )
}

export default App
