import Layout from "@/components/Layout";

import clsx from "clsx";

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
        <span className="py-1 px-2 text-green bg-primary rounded-md">
          Pebblebed
        </span>
        , a new type of venture capital firm that builds and invests in
        companies from the ground up. We lead pre-seed & seed rounds in
        companies solving hard technical problems across many verticals. We’ve
        partnered with companies like{" "}
        <span className="py-1 px-2 text-green bg-primary rounded-md">
          Northflank
        </span>
        ,{" "}
        <span className="py-1 px-2 text-green bg-primary rounded-md">Krea</span>
        ,{" "}
        <span className="py-1 px-2 text-green bg-primary rounded-md">Lynq</span>
        ,{" "}
        <span className="py-1 px-2 text-green bg-primary rounded-md">
          Meliora
        </span>{" "}
        and many more wonderful companies.
      </p>
    </div>
  );
};
const IndexPage = () => {
  return (
    <Layout between={true}>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
