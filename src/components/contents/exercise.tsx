"use client"
import AppLayout from "@/components/layout";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const EXERCISE_INTERVAL_TIME = 12500;
const HOLD_TIME = EXERCISE_INTERVAL_TIME/5;
const GROW_TIME = HOLD_TIME*2

export default function ExerciseContent(){
     const [text, setText] = useState("Շունչ");
     const [circleType, setCircleType] = useState<'growing'|'shrinking'|'hold'>("growing");
     useEffect(() => {
          const startBreathCycle = () => {
               setText("Շունչ");
               setCircleType('growing')
                    setTimeout(() => {
                    setText("Պահում");
                    setCircleType('hold');
                    setTimeout(() => {
                         setText("Արտաշունչ");
                         setCircleType('shrinking');
                    }, HOLD_TIME);
               }, GROW_TIME);
          };
          startBreathCycle();
          const intervalId = setInterval(startBreathCycle, EXERCISE_INTERVAL_TIME);
          return () => clearInterval(intervalId);
     }, []);
     return (
          <AppLayout screenHeight>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Շնչառական վարժություն</h1>
               <div className="mt-4 space-y-2 flex justify-center items-center breathing-root">
                    <div className="bg-card text-card-foreground border shadow-sm rounded-md p-6 flex justify-center items-center flex-col gap-4 max-w-96">
                         <div className="size-72 flex justify-center items-center rounded-full border-2 border-primary will-change-transform">
                              <div className={cn("bg-primary rounded-full size-full",circleType==='growing' ? 'animate-grow-circle' : circleType==='hold' ? 'animate-hold-circle' : 'animate-shrink-circle')}/>
                         </div>
                         <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary" aria-live="polite">{text}</p>
                    </div>
               </div>
          </AppLayout>
     );
}