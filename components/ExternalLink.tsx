import type { ExternalLinkProps } from "@/lib/types";

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  text,
  styles,
}) => {
  return (
    <a href={href} className={` ${styles}`} target="_blank">
      {text}
    </a>
  );
};
