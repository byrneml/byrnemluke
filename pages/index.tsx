import config from "@/data/config";
import Layout from "@/components/Layout";
import { Text } from "@/components/Text";

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

const IndexPage = () => (
  <Layout
    title="About"
    description="Hi! I’m Luke - I invest in computing infrastructure platforms."
    includeLine={true}
  >
    <Text>
      <p>
        I’m a General partner at{" "}
        <span className="inline-flex items-center">
          <a
            href="https://pebblebed.com"
            target="_blank"
            className="no-underline hover:underline decoration-black dark:decoration-blue-400 underline-offset-2"
          >
            <Badge href="https://pebblebed.com">
              <Pebblebed className="w-4 h-4 mr-1" />
              <Text className="font-regular text-xs">Pebblebed</Text>
            </Badge>
          </a>
        </span>
        . I split my time between working with founders, building companies, and
        hacking on side projects/new technologies.
      </p>

      <p>
        I’m lucky to work with some amazing companies - some of the companies
        I’ve partnered with in the past include{" "}
        {config.portfolio.map((company, index) => {
          const LogoComponent = logos[company.name];
          return (
            <span key={index}>
              {/* Seperate each link by a comma  */}
              {index > 0 && ", "}

              <a
                href={company.href}
                target="_blank"
                className="no-underline hover:underline decoration-black dark:decoration-blue-400 underline-offset-2"
              >
                <Badge>
                  {LogoComponent && <LogoComponent className="w-4 h-4 mr-1" />}
                  <Text className="font-regular text-xs">{company.name}</Text>
                </Badge>
              </a>
            </span>
          );
        })}
        . Full list coming soon.
      </p>
      <p>
        In my spare time, I work on side projects. More on this coming soon!
      </p>
    </Text>
  </Layout>
);

export default IndexPage;
