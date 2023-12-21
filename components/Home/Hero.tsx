import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const TextPill = ({ children }: Props) => {
  return (
    <span className="py-1 px-2 text-green bg-primary rounded-md hover:bg-[#1f5047]">
      {children}
    </span>
  );
};
const Hero = () => {
  return (
    <div>
      <h1 className="text-4xl 2xl:text-6xl leading-relaxed max-w-[600px] mb-2">
        Engineer,{" "}
        <span className="py-1 px-2 text-green bg-primary rounded-md">
          Investor
        </span>
        , <br />
        <span className="inline md:inline-block">& Company Builder.</span>
      </h1>

      <p className="text-lg leading-relaxed">
        I’m an engineer & investor. I co-founded{" "}
        <TextPill>
          <a href="https://pebblebed.com" target="_blank">
            Pebblebed
          </a>
        </TextPill>
        , a new type of venture capital firm that builds and invests in
        companies from the ground up. We lead pre-seed & seed rounds in
        companies solving hard technical problems across many verticals. We’ve
        partnered with companies like{" "}
        <TextPill>
          <a href="https://northflank.com" target="_blank">
            Northflank
          </a>
        </TextPill>
        ,{" "}
        <TextPill>
          <a href="https://krea.ai" target="_blank">
            Krea
          </a>
        </TextPill>
        ,{" "}
        <TextPill>
          <a href="https://lynq.ai" target="_blank">
            Lynq
          </a>
        </TextPill>
        ,{" "}
        <TextPill>
          <a href="https://melioratx.com" target="_blank">
            Meliora
          </a>
        </TextPill>{" "}
        and many more wonderful companies.
      </p>
    </div>
  );
};

export default Hero;
