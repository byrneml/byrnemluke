import { LogoProps } from "@/lib/types";

export const Dynaboard: React.FC<LogoProps> = ({ children, className }) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 1.16641C24.1257 0.858457 19.8915 0.944493 18.4785 0.984751C18.2099 0.992407 18 1.21267 18 1.48146V8.48085C18 8.76436 18.2342 8.99206 18.5176 8.98676C19.9808 8.9594 24.2212 8.95059 27 9.66641C30.2145 10.4945 32.2707 11.0406 34.5 13.5C37.4904 16.799 37.5536 20.2141 37.5 24.6664C37.4486 28.9307 37.3515 31.9954 34.5 35.1664C32.2804 37.6347 30.2145 38.3383 27 39.1664C24.2405 39.8773 20.0395 39.6547 18.5484 39.545C18.254 39.5234 18 39.7556 18 40.0509V47.5037C18 47.7784 18.2195 48.0013 18.4942 48.0013C19.9225 48.0012 24.1363 47.9732 27 47.6664C29.9699 47.3482 31.7414 47.3117 34.5 46.1664C37.8545 44.7737 39.623 43.4127 42 40.6664C44.0605 38.2858 44.9109 36.6206 46 33.6664C47.2325 30.3232 47.5 28.2296 47.5 24.6664C47.5 21.1032 47.1659 19.0335 46 15.6664C44.9138 12.5297 44.148 10.6972 42 8.16641C39.6497 5.39724 37.8545 4.0591 34.5 2.66641C31.7414 1.5211 29.9699 1.48462 27 1.16641Z"
        fill="#4C4ACD"
      />
      <rect x="9" y="10" width="8" height="29" rx="1" fill="#4C4ACD" />
      <rect y="1" width="8" height="8" rx="1" fill="#4C4ACD" />
    </svg>
  );
};
