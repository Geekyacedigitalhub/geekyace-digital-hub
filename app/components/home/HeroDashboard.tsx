"use client";

import {
  Globe,
  Bot,
  Cog,
  Smartphone,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

import AnimatedCounter from "@/app/components/ui/AnimatedCounter";
import LiveActivity from "@/app/components/ui/LiveActivity";


const services = [
  {
    icon: Globe,
    title: "Website Development",
    progress: 98,
    color: "bg-blue-500",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    progress: 92,
    color: "bg-violet-500",
  },
  {
    icon: Cog,
    title: "Business Automation",
    progress: 95,
    color: "bg-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    progress: 90,
    color: "bg-orange-500",
  },
];


function AnimatedProgress({
  value,
  color,
}: {
  value: number;
  color: string;
}) {

  return (

    <div className="h-2 overflow-hidden rounded-full bg-slate-800">

      <motion.div

        initial={{
          width: "0%",
        }}

        animate={{
          width:[
            "0%",
            `${value}%`,
            "0%",
          ],
        }}

        transition={{
          duration:3,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className={`h-full rounded-full ${color}`}

      />

    </div>

  );
}



function AnimatedPercentage({
  value,
}:{
  value:number;
}){

  return (

    <motion.span

      initial={{
        opacity:0,
      }}

      animate={{
        opacity:1,
      }}

      transition={{
        duration:1,
      }}

      className="text-sm font-semibold text-white"

    >

      <AnimatedCounter
        value={value}
        suffix="%"
      />

    </motion.span>

  );

}



export default function HeroDashboard(){

return (

<motion.div

initial={{
opacity:0,
y:40,
}}

animate={{
opacity:1,
y:0,
}}

transition={{
duration:0.8,
}}

className="relative"

>


<div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />


<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">


{/* Header */}

<div className="border-b border-slate-800 px-6 py-5">

<div className="flex items-center justify-between">


<div>

<h3 className="text-lg font-semibold text-white">
Geekyace Digital Hub
</h3>


<p className="mt-1 text-sm text-slate-400">
Business Performance
</p>


</div>



<div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">


<motion.span

animate={{
scale:[1,1.8,1],
opacity:[1,0.4,1],
}}

transition={{
duration:1,
repeat:Infinity,
}}

className="h-2 w-2 rounded-full bg-emerald-400"

/>


<span className="text-xs font-medium text-emerald-300">
Live
</span>


</div>


</div>

</div>





{/* Services */}

<div className="space-y-6 p-6">


{services.map((service,index)=>{


const Icon = service.icon;


return (

<motion.div

key={service.title}

initial={{
opacity:0,
x:30,
}}

animate={{
opacity:1,
x:0,
}}

transition={{
delay:index * 0.15,
}}

>


<div className="mb-2 flex items-center justify-between">


<div className="flex items-center gap-3">


<div className="rounded-xl bg-slate-900 p-2">

<Icon className="h-5 w-5 text-white"/>

</div>


<span className="font-medium text-slate-200">
{service.title}
</span>


</div>


<AnimatedPercentage
value={service.progress}
/>


</div>



<AnimatedProgress
value={service.progress}
color={service.color}
/>


</motion.div>


);

})}


</div>




<div className="border-t border-slate-800" />



{/* Stats */}

<div className="grid grid-cols-3 divide-x divide-slate-800">


<div className="py-6 text-center">

<h4 className="text-2xl font-bold text-white">

<AnimatedCounter
value={50}
suffix="+"
/>

</h4>


<p className="mt-1 text-xs text-slate-400">
Projects
</p>

</div>



<div className="py-6 text-center">

<h4 className="text-2xl font-bold text-white">

<AnimatedCounter
value={10}
suffix="+"
/>

</h4>


<p className="mt-1 text-xs text-slate-400">
Industries
</p>

</div>




<div className="py-6 text-center">

<h4 className="text-2xl font-bold text-white">

<AnimatedCounter
value={24}
suffix="/7"
/>

</h4>


<p className="mt-1 text-xs text-slate-400">
Support
</p>


</div>


</div>





{/* Live Activity */}

<div className="border-t border-slate-800 p-6">

<LiveActivity />

</div>





{/* Footer */}

<div className="border-t border-slate-800 bg-slate-900/50 px-6 py-4">


<div className="flex items-center gap-2 text-sm text-emerald-400">


<TrendingUp className="h-4 w-4"/>


<span>
Growing businesses through digital innovation
</span>


</div>


</div>



</div>


</motion.div>

);

}