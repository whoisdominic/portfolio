"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Million app downloads",
    suffix: "+",
  },
  {
    num: 2,
    text: "Certifications",
  },
  {
    num: 844,
    text: "Global Hack The Box Ranking",
    prefix: "#",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-16 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap justify-center lg:flex-row  gap-6 xl:flex-wrap ">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-between px-16 lg:justify-start lg:px-0"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
                <p className={"max-w-[80px] leading-snug text-white/80"}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
