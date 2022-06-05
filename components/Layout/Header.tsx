import { useRouter } from "next/router";
import Image from "next/image";
import config from "@/data/config";
import Page from "@/components/Layout/Page";
import Link from "next/link";
import clsx from "clsx";

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="py-8 flex justify-between items-center">
      <Link href="/">
        <a>
          <span className="flex">
            <Image
              className="rounded-md"
              src={config.avatar}
              width={48}
              height={48}
              alt={config.siteName}
              priority
            />
          </span>
        </a>
      </Link>

      <nav>
        <ul className="flex space-x-8">
          {config.nav.map((item, index) => {
            const isActive = item.href === pathname;
            return (
              <li key={index}>
                <Link href={item.href}>
                  <a
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "text-gray-500 hover:text-gray-900",
                      "dark:text-gray-400 dark:hover:text-gray-300"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
