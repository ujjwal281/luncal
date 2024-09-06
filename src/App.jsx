import Gallery from "./pages/Gallery"
import './pages/global.css';
import ChipTabs from "./pages/Navbar";

function App() {
  return (
    <div className="grid grid-cols-2 " style={{color : "#969696"}}>
      <div>
      </div>
      <div  className="relative flex flex-col justify-center bg-slate-500 p-10 gap-6" style={{ backgroundColor:"#363C43"}}>
      <div className="absolute top-9 left-3">
        <div className="rounded-full bg-gradient-to-b from-slate-500 to-slate-50 px-1.5  text-white text-xs font-bold">?</div>
        <div className="mt-20">{
          
          }</div>
      </div>
      <ChipTabs/>
      
      <Gallery/>
      </div>
    </div>
  )
}

export default App
