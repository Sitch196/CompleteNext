"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-end items-center gap-4 cursor-pointer ">
          <Image
            src={session.user.image}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3>{session.user.name}</h3>
            <p>{session.user.email}</p>
            <p className="text-gray-500 text-xs">{post.prompt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
