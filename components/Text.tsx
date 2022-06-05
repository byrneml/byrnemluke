export const Text: React.FC = ({ children }) => {
  return (
    <div className="max-w-none prose prose-a:text-pink-600 dark:prose-invert">
      {children}
    </div>
  );
};
