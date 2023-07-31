import { LogoProps } from "@/lib/types";

export const Pebblebed: React.FC<LogoProps> = ({ children, className }) => {
  return (
    <svg
      width="52"
      height="56"
      viewBox="0 0 52 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_1402_106760" fill="white">
        <rect width="7.10768" height="55.9999" rx="1" />
      </mask>
      <rect
        width="7.10768"
        height="55.9999"
        rx="1"
        stroke="#FAFAFA"
        className="dark:stroke-[#FAFAFA] stroke-[#0d0d0e]"
        stroke-width="3"
        mask="url(#path-1-inside-1_1402_106760)"
      />
      <path
        d="M30.5628 39.5995C30.4654 41.1579 29.908 42.25 29.097 42.9583C28.2779 43.6736 27.1218 44.0655 25.7113 44.0655C22.9482 44.0655 20.8613 42.2753 20.8613 39.6463C20.8613 38.1209 21.4078 37.046 22.2373 36.3408C23.0835 35.6214 24.2965 35.2271 25.7113 35.2271C27.1302 35.2271 28.4 35.6236 29.2735 36.347C30.1221 37.0497 30.6561 38.1065 30.5628 39.5995Z"
        stroke="#48D597"
        stroke-width="1.5"
      />
      <path
        d="M30.5628 16.6146C30.4654 18.173 29.908 19.2651 29.097 19.9734C28.2779 20.6888 27.1218 21.0806 25.7113 21.0806C22.9482 21.0806 20.8613 19.2905 20.8613 16.6614C20.8613 15.136 21.4078 14.0611 22.2373 13.3559C23.0835 12.6365 24.2965 12.2422 25.7113 12.2422C27.1302 12.2422 28.4 12.6388 29.2735 13.3621C30.1221 14.0648 30.6561 15.1216 30.5628 16.6146Z"
        stroke="#48D597"
        stroke-width="1.5"
      />
      <mask id="path-4-inside-2_1402_106760" fill="white">
        <rect x="43.9375" width="7.10768" height="55.9999" rx="1" />
      </mask>
      <rect
        x="43.9375"
        width="7.10768"
        height="55.9999"
        rx="1"
        stroke="#FAFAFA"
        className="dark:stroke-[#FAFAFA] stroke-[#0d0d0e]"
        stroke-width="3"
        mask="url(#path-4-inside-2_1402_106760)"
      />
    </svg>
  );
};
