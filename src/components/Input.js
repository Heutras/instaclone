import { useState, useEffect, useRef } from "react";
export default function Input({label, type='text', ...props}) {
    
    const inputRef = useRef();
    
    const [show, setShow] = useState(false);
    const [inputType, setType] = useState(type);

    useEffect(() => {
      if(show) {
        setType('text');
      }
      else if (type === 'password') {
        setType('password');
      }
    }, [show, type])
    
    return (
    <label className="block relative flex bg-zinc-50 px-2 border rounded-sm  focus-within:border-gray-400">
        <input ref={inputRef} required={true} type={inputType} className=" w-full h-[38px] text-xs outline-none valid:pt-[10px] peer" {...props}/>
        <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
        {type === 'password' && props?.value && (
            <div type='button' onClick={() => setShow(show => !show)} className="h-full flex cursor-pointer select-none items-center text-sm font-semibold pr-2">
                { show ? 'Hide' : 'Show'}
            </div>
        )}
    </label>
    )
}