"use client";

import { useEffect, useState } from "react";

/**
 * Shows real time in Lagos (WAT, UTC+1) as "HH:MM WAT · Lagos, NG".
 */
export default function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      // WAT is UTC+1
      const utcMs = d.getTime() + d.getTimezoneOffset() * 60000;
      const wat = new Date(utcMs + 60 * 60000);
      const hh = String(wat.getHours()).padStart(2, "0");
      const mm = String(wat.getMinutes()).padStart(2, "0");
      const ss = String(wat.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="tabular-nums">
      {time} <span className="text-slate-500 dark:text-slate-400">WAT</span>
      <span className="hidden sm:inline text-slate-400 dark:text-slate-500"> · Lagos, NG</span>
    </span>
  );
}
