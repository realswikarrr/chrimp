import type { RouterOutputs } from "~/utils/api";

import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Link from "next/link";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

dayjs.extend(relativeTime);

export const PostView = (props: PostWithUser) => {
  const { post, author } = props;

  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4 ">
      <Image
        src={author.profileImageUrl}
        alt={`@${author.username} profile image`}
        className="h-14 w-14 rounded-full"
        height={56}
        width={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-1  text-slate-300">
          <Link href={`/@${author.username}`}>
            <span>{`@${author.username}`}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span className="font-thin">{`  ·  ${dayjs(
              post.createdAt
            ).fromNow()}`}</span>
          </Link>
        </div>
        <span className="text-2xl">{post.content}</span>
      </div>
    </div>
  );
};
