"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
  end: number;
  suffix?: string;
};

export default function Counter({
  end,
  suffix = "",
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={2}
          suffix={suffix}
        />
      ) : (
        0
      )}
    </span>
  );
}