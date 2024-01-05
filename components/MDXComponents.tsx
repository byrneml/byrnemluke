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
    className="text-gray-900 dark:text-green dark:no-underline hover:underline break-words"
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

const Subscribe: React.FC = () => {
  return (
    <div
      id="revue-embed"
      className="border border-gray-300 rounded-2xl px-6 pb-6 pt-2 my-4 w-full dark:border-gray-800 dark:bg-gray-900 bg-gray-50 dark:bg-blue"
    >
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
        Subscribe to future posts
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        I've got many more posts in the works. Subscribe to be the first to hear
        about them.
      </p>
      <form
        action="https://www.getrevue.co/profile/byrneml/add_subscriber"
        method="post"
        className="relative my-4"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <input
          placeholder="Your email address..."
          type="email"
          name="member[email]"
          id="member_email"
          className="px-4 py-2 mt-1 focus:outline-0 block w-full rounded-md bg-gray-200 dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-100 text-gray-30 dark:text-gray-100"
        />

        <div className="cursor-pointer flex items-center justify-center absolute right-1 top-0 h-9 mt-1 px-4 font-medium bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md w-28">
          <input
            type="submit"
            value="Subscribe"
            name="member[subscribe]"
            id="member_submit"
            className="cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

const allMDXComponents = {
  Callout,
  GithubLink,
  Subscribe,
  h4: HeadingFour,
  a: CustomLink,
};

export default allMDXComponents;
