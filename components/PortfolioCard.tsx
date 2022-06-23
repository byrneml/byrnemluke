import { PortfolioCardProps } from "@/lib/types";
import { Text } from "@/components/Text";
import Link from "next/link";

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  dateInvested,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="block no-underline p-4 bg-white rounded-lg border border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </a>
  );
};
