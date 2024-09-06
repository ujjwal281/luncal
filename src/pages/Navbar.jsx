import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import './global.css'
import About from "./About";
import Experience from "./Experience";
import Recommend from "./Recommend";
const tabs = [ "About Me", "Recommends", "Experince"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const containerRef = useRef();
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = (scrollAmount) => {
  //   const newScrollPosition = scrollPosition + scrollAmount;
  //   setScrollPosition(newScrollPosition);
  //   containerRef.current.scrollLeft = newScrollPosition;
  // };
  return (
    <div className="flex justify-center flex-col">
    <div className="p-2 bg-black flex items-center flex-wrap justify-between rounded-xl w-full" >
      {tabs.map((tab,index) => (
        <div  key={tab}  onClick={() => containerRef.current.scroll(0,index*150)} >
          <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          />
        </div>
      ))}
    </div>
    <div className="flex flex-col gap-10 h-36 overflow-auto w-full mt-5 scroll-smooth" id="scroller" ref= {containerRef}>
      <About/>
      <Recommend/>
      <Experience/>
    </div>

    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:rounded-xl hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10 text-2xl">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-slate-500 rounded-xl px-6 py-3"
          id="navbar"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;