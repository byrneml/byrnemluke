import Link from "next/link";
import { GitHub } from "react-feather";

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

function GithubLink(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="mb-6 block no-underline p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="flex items-center mb-1">
        <GitHub className="mr-2 mt-1 w-4" />
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 m-0 p-0 no-underline">
        {props.body}
      </p>
    </a>
  );
}

const allMDXComponents = {
  Callout,
  GithubLink,
  h4: HeadingFour,
  a: CustomLink,
};

export default allMDXComponents;
