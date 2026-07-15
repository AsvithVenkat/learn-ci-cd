import {useState, useEffect} from "react";


const useDebounce = (value:string,delay:number) =>{
    const [searchVal, setsearchVal] = useState(value);

    useEffect(()=>{
       let timer = setTimeout(()=>{setsearchVal(value)},delay);

        return ()=> clearTimeout(timer);
    },[delay,value])
return searchVal;

}
 export default useDebounce;