import { PostCardProps } from "@/lib/types";
import { Text } from "@/components/Text";
import Link from "next/link";

export const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <Link href="/posts/webassembly">
      <div className="w-full mb-8 hover:cursor-pointer">
        <h3 className="text-xl font-semibold">{title}</h3>
        <Text>
          <p className="mt-2">{description}</p>
        </Text>
      </div>
    </Link>
  );
};
