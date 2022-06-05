import { Twitter, GitHub, Linkedin } from "react-feather";
import config from "@/data/config";
import clsx from "clsx";

const iconProps = { className: "w-4 h-4" };

const socialIcons: { [key: string]: React.ReactNode } = {
  twitter: <Twitter {...iconProps} />,
  github: <GitHub {...iconProps} />,
  linkedin: <Linkedin {...iconProps} />,
};

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8">
      <ul className="flex justify-center space-x-4">
        {config.socials.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.href}
                className={clsx(
                  "w-8 h-8 grid place-items-center rounded-md",
                  "bg-gray-900 text-gray-50",
                  "dark:bg-gray-800 dark:text-gray-50"
                )}
              >
                {socialIcons[item.label]}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
