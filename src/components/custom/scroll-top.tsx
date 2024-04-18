import { useCallback } from "react"

export function ScrollTop() {
   const clickHandler = useCallback(() => window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    }), [])
   return (
      <div className="group rounded-full fixed right-8 bottom-8 cursor-pointer z-50 " onClick={clickHandler}>
         <div className="relative w-20 h-20 flex flex-col justify-end items-end">

            <svg xmlns="http://www.w3.org/2000/svg" className=" border border-gray-200  p-4 duration-300 ease-out h-16 w-16 rounded-full text-gray-200 dark:text-gray-200 opacity-40 group-hover:opacity-100 group-hover:z-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>

         </div>
      </div>)
}
