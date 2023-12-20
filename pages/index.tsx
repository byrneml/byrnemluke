import config from "@/data/config";
import { Text } from "@/components/Text";
import { Header } from "@/components/Layout/Header";

import {
  Northflank,
  Feathery,
  Cloudsmith,
  Pebblebed,
  nMachine,
  Dynaboard,
  MetaMap,
  Dylibso,
  Grafbase,
  Oxen,
} from "@/components/Logos";

import clsx from "clsx";

interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <a
      target="_blank"
      className={clsx(
        "align-middle border border-gray-200 dark:border-gray-700 bg-neutral-50 dark:bg-black rounded py-1 px-1.5 font-regular text-gray-100 text-xs inline-flex items-center no-underline dark:hover:bg-gray-800 hover:bg-gray-200",
        className
      )}
    >
      {children}
    </a>
  );
};

const logos = {
  Northflank: Northflank,
  Pebblebed: Pebblebed,
  Feathery: Feathery,
  Cloudsmith: Cloudsmith,
  nMachine: nMachine,
  Dynaboard: Dynaboard,
  MetaMap: MetaMap,
  Dylibso: Dylibso,
  Grafbase: Grafbase,
  Oxen: Oxen,
};

// const IndexPage = () => (
//   <Layout
//     title="About"
//     description="Hi! I’m Luke - I invest in computing infrastructure platforms."
//     includeLine={true}
//   >
//     <Text>
//       <p>
//         I’m a General partner at{" "}
//         <span className="inline-flex items-center">
//           <a
//             href="https://pebblebed.com"
//             target="_blank"
//             className="no-underline hover:underline decoration-black dark:decoration-blue-400 underline-offset-2"
//           >
//             <Badge>
//               <Pebblebed className="w-4 h-4 mr-1" />
//               <Text className="font-regular text-xs">Pebblebed</Text>
//             </Badge>
//           </a>
//         </span>
//         . I split my time between working with founders, building companies, and
//         hacking on side projects/new technologies.
//       </p>

//       <p>
//         I’m lucky to work with some amazing companies - some of the companies
//         I’ve partnered with in the past include{" "}
//         {config.portfolio.map((company, index) => {
//           const LogoComponent = logos[company.name];
//           return (
//             <span key={index}>
//               {/* Seperate each link by a comma  */}
//               {index > 0 && ", "}

//               <a
//                 href={company.href}
//                 target="_blank"
//                 className="no-underline hover:underline decoration-black dark:decoration-blue-400 underline-offset-2"
//               >
//                 <Badge>
//                   {LogoComponent && <LogoComponent className="w-4 h-4 mr-1" />}
//                   <Text className="font-regular text-xs">{company.name}</Text>
//                 </Badge>
//               </a>
//             </span>
//           );
//         })}
//         . Full list coming soon.
//       </p>
//       <p>
//         In my spare time, I work on side projects. More on this coming soon!
//       </p>
//     </Text>
//   </Layout>
// );

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
    <div className="flex flex-col justify-between w-screen max-w-[96rem] mx-auto h-screen max-h-screen lg:max-h-[1000px] px-5 pb-8 lg:px-16 lg:pb-16">
      <Header />
      <Hero />
    </div>
  );
};

export default IndexPage;
