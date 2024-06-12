import React from 'react';
import { InfiniteMovingCards } from '../../components/showroom-components/infinite-moving-cards'; // Update the path accordingly

interface BlogCardProps {
  imageUrls?: string[];
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrls = [], title }) => {
  return (
    <div className="bg-black overflow-hidden">
      <div className="flex flex-row justify-between p-4 bg-black rounded-lg leading-normal">
        <h5 className="text-2xl p-3 text-left font-bold tracking-tight border-2 border-black dark:border-black uppercase bg-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] text-black dark:text-black">
          {title}
        </h5>
      </div>

      <InfiniteMovingCards items={imageUrls} />
    </div>
  );
};

export default BlogCard;
