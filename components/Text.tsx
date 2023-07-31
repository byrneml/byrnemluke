import clsx from "clsx";

interface PebblebedProps {
  children?: React.ReactNode;
  className?: string;
}

export const Text: React.FC<PebblebedProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={clsx("max-w-none prose dark:prose-invert", className)}>
      {children}
    </div>
  );
};
