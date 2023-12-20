import { PostCardProps } from "@/lib/types";
import { Text } from "@/components/Text";
import Link from "next/link";

export const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <Link href="/writing/webassembly">
      <div className="w-full mb-8 hover:cursor-pointer group">
        <h3 className="text-xl font-semibold group-hover:text-green">
          {title}
        </h3>
        <Text>
          <p className="mt-2">{description}</p>
        </Text>
      </div>
    </Link>
  );
};
