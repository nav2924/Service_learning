import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Rajesh",
    username: "@rajesh",
    body: "This center has truly changed my life. I am grateful for the support and care provided here.",
    img: "https://avatar.vercel.sh/rajesh",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "The environment here is supportive and healing. I feel like a new person.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Amit",
    username: "@amit",
    body: "The staff is compassionate and understanding. I couldn't have asked for better care.",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Suresh",
    username: "@suresh",
    body: "This place helped me regain control of my life. I am forever thankful.",
    img: "https://avatar.vercel.sh/suresh",
  },
  {
    name: "Rohan",
    username: "@rohan",
    body: "I was lost, but now I have a new purpose. This center has given me hope.",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Kiran",
    username: "@kiran",
    body: "A safe haven for those seeking to rebuild their lives. I highly recommend it.",
    img: "https://avatar.vercel.sh/kiran",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Slidingreview() {
  return (
    <div className="relative flex  h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-white rounded-lg border bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

