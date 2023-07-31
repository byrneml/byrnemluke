import { LogoProps } from "@/lib/types";

export const Cloudsmith: React.FC<LogoProps> = ({ children, className }) => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.8302 11.9246V14.9057L14.9057 26.8303H11.9245L0 14.9057V11.9246L11.9245 0H14.9057L26.8302 11.9246ZM13.4151 20.4143C17.2805 20.4143 20.414 17.2808 20.414 13.4155C20.414 9.55007 17.2805 6.41654 13.4151 6.41654C9.54973 6.41654 6.41627 9.55007 6.41627 13.4155C6.41627 17.2808 9.54973 20.4143 13.4151 20.4143Z"
        fill="#8496A2"
      />
    </svg>
  );
};
