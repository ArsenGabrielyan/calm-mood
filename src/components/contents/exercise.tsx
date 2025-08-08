"use client"
import AppLayout from "@/components/layout";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const EXERCISE_INTERVAL_TIME = 8000;
const HOLD_TIME = EXERCISE_INTERVAL_TIME/5;
const GROW_TIME = HOLD_TIME*2

export default function ExerciseContent(){
     const [text, setText] = useState("Շունչ");
     const [isGrowing,setIsGrowing] = useState(true);
     useEffect(() => {
          const startBreathCycle = () => {
               setText("Շունչ");
               setIsGrowing(true);
                    setTimeout(() => {
                    setText("Պահում");
                    setTimeout(() => {
                         setText("Արտաշունչ");
                         setIsGrowing(false);
                    }, HOLD_TIME);
               }, GROW_TIME);
          };
          startBreathCycle(); // start immediately
          const intervalId = setInterval(startBreathCycle, EXERCISE_INTERVAL_TIME);
          return () => clearInterval(intervalId);
     }, []);
     return (
          <AppLayout screenHeight>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Շնչառական վարժություն</h1>
               <div className="mt-4 space-y-2 flex justify-center items-center">
                    <div className="bg-card text-card-foreground border shadow-sm rounded-md p-3 flex justify-center items-center flex-col gap-4 max-w-80">
                         <div className="size-72 flex justify-center items-center rounded-full border-2 border-primary">
                              <div className={cn("bg-primary rounded-full size-64",isGrowing ? 'animate-grow-circle' : 'animate-shrink-circle')}/>
                         </div>
                         <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">{text}</p>
                    </div>
               </div>
          </AppLayout>
     );
}