import { useRef } from "react";

function App() {

  const ref = useRef();
  
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]">
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="ss1"/>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="ss1"/>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="ss1"/>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="ss1"/>
        </div>
      </div>
    </div>
  );
}

export default App;
