import { useRouter } from "next/router";
import Image from "next/image";
import config from "@/data/config";
import Link from "next/link";
import clsx from "clsx";
import { MobileHeader } from "@/components/Layout/MobileHeader";

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  console.log(pathname);
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
      <div className="flex ">
        <span className="md:invisible ">
          <MobileHeader />
        </span>

        <nav className="md:visible sm: invisible">
          <ul className="flex space-x-8">
            {config.nav.map((item, index) => {
              const isActive = item.href === pathname;
              return (
                <li key={index}>
                  <Link href={item.href}>
                    <a
                      aria-current={isActive ? "page" : undefined}
                      className={clsx(
                        pathname === item.href ? "font-semibold" : "",
                        "text-black hover:text-gray-900",
                        "dark:text-gray-200 dark:hover:text-gray-100"
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
      </div>
    </header>
  );
};
