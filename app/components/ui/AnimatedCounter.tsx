"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((current) => {
        if (current >= value) {
          return 0;
        }

        return current + 1;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}