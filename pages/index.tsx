import config from "@/data/config";
import Layout from "@/components/Layout";
import { Text } from "@/components/Text";
import { ExternalLink } from "@/components/ExternalLink";

const IndexPage = () => (
  <Layout
    title="About"
    description="Hi! I’m Luke - I invest in developer tools & infrastructure for builders."
    includeLine={true}
  >
    <Text>
      <p>
        I’m a General partner at{" "}
        <a
          href="https://pebblebed.com"
          target="_blank"
          className="no-underline hover:underline decoration-black dark:decoration-blue-400 underline-offset-2"
        >
          {" "}
          <span className="text-black dark:text-blue-400 font-semibold italic">
            pebblebed
          </span>
        </a>
        , a seed-stage fund. I split my time between investing in & working with founders,
        and hacking on side projects/new technologies
      </p>
      <p>
        I’m lucky to work with some amazing companies - some of the companies
        I’ve invested in in the past include{" "}
        {config.portfolio.map((company, index) => {
          return (
            <span key={index}>
              {/* Seperate each link by a comma  */}
              {index > 0 && ", "}
              <ExternalLink
                href={company.href}
                linkStyles="no-underline hover:underline decoration-black underline-offset-4 dark:decoration-white"
                textStyles="text-black font-semibold italic dark:text-white"
                text={company.name}
              />
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
