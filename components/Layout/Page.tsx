import Head from "next/head";
import { onlyText } from "react-children-utilities";
import config from "@/data/config";
import { Text } from "@/components/Text";
import clsx from "clsx";

interface PageProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;
  includeLine?: boolean;
}

export const Page: React.FC<PageProps> = ({
  title,
  description,
  children,
  includeLine,
}) => {
  const metaTitle = onlyText(title);
  const metaDescription = onlyText(description);
  const metaThumbnail = config.siteThumbnail;
  return (
    <>
      <Head>
        <title>
          {metaTitle} - {config.siteName}
        </title>
        <meta name="og:url" content={config.siteUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${metaThumbnail}`}
        />
      </Head>
      <header
        className={clsx(
          includeLine ? "mb-8 pb-8 border-b" : "",
          "border-gray-200",
          "dark:border-gray-700"
        )}
      >
        <h1 className="font-bold text-3xl">{title}</h1>
        {description ? (
          <div className="mt-4">
            <Text>
              <p>{description}</p>
            </Text>
          </div>
        ) : null}
      </header>
      {children}
    </>
  );
};
