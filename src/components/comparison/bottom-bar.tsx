import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useWixModules } from '@wix/sdk-react';
import { items } from '@wix/data';
import {useWindowWidth} from '@/lib/hooks/use-window-width';
import {BREAKPOINTS} from '@/constants/breakpoints';

export const BottomBar = () => {
    const screenSize = useWindowWidth();

    return (
        <motion.div
            className="fixed bottom-0 left-0 w-full max-h-[160px] flex flex-row justify-center items-center z-50"
        >
            <motion.div
                className="glass w-full max-w-[90%] md:max-w-[80%] mx-auto flex flex-row justify-between items-center rounded-xl min-h-[80px] max-h-[160px] px-4 my-4 z-60"
            >
                <BottomBarSidePart />

            </motion.div>

        </motion.div>
    )
}



const BottomBarSidePart = ({platformSlug}:{platformSlug?: string}) => {
    const { queryReferencedDataItems } = useWixModules(items);
    function allowDrop(ev:any) {
        console.log('allowDrop')
        ev.preventDefault();
      }
      

      function drop(ev:any) {
        ev.preventDefault();
        console.log(ev.dataTransfer.getData("text"));
        var data = ev.dataTransfer.getData("text");
      }

    return (
        <motion.div 
            onDrop={drop}
            onDragOver={allowDrop}
            className="glass w-1/2 max-w-[90%] md:max-w-[80%] mx-auto flex flex-row justify-between items-center rounded-2xl min-h-[80px] max-h-[160px] px-4 my-4 z-40"
        >

        </motion.div>
    )
}