import Link from "next/link";
import config from "@/data/config";
import Layout from "@/components/Layout";
import { PortfolioCard } from "@/components/PortfolioCard";

const InvestmentsPage = () => {
  return (
    <Layout
      title="Investments"
      description="Some of the companies I'm lucky to work with."
      includeLine={true}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {config.portfolio.map((company, index) => {
          return (
            <PortfolioCard
              key={index}
              title={company.name}
              description={company.description}
              dateInvested={company.date}
              url={company.href}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default InvestmentsPage;
