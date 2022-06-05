import type { ExternalLinkProps } from "@/lib/types";

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  text,
  linkStyles,
  textStyles,
}) => {
  return (
    <a href={href} target="_blank" className={`${linkStyles}`}>
      {" "}
      <span className={`${textStyles}`}>{text}</span>
    </a>
  );
};
