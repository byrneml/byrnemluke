import Link from "next/link";

function Callout(props) {
  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg pl-4 pr-8 py-2 mb-2">
      <div className="flex items-center w-2 mr-2">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function HeadingFour(props) {
  return <h4 className="font-bold text-lg">{props.children}</h4>;
}

const CustomLink = (props) => (
  <a
    className="text-gray-900 dark:text-blue-400 dark:no-underline hover:underline break-words"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

const allMDXComponents = {
  Callout,
  h4: HeadingFour,
  a: CustomLink,
};

export default allMDXComponents;
