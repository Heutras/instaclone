import { useState, useEffect, useRef } from "react";
import { useField } from "formik";
import classNames from "classnames";
export default function Input({label, type='text', ...props}) {
    
    const [field, meta, helpers] = useField(props);
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
        <input ref={inputRef} type={inputType} className={classNames({
          "w-full h-[38px] text-xs outline-none": true,
          "pt-[10px]": field.value

        })} {...field} {...props}/>
        <small className={classNames({
          "absolute left-[9px] cursor-text pointer-events-none text-gray-400 -translate-y-1/2 transition-all": true,
          "text-xs top-1/2": !field.value,
          "text-[10px] top-2.5" : field.value
        })}>{label}</small>
        {type === 'password' && field.value && (
            <div onClick={() => setShow(show => !show)} className="h-full flex cursor-pointer select-none items-center text-sm font-semibold pr-2">
                { show ? 'Hide' : 'Show'}
            </div>
        )}
    </label> 
    )
}