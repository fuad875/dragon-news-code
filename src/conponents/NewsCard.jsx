import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({news}) => {
     const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

    return (
       <div className="card bg-base-100  mx-auto">
      
      {/* Author */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={author.img}
          alt="author"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="font-semibold text-sm">{author.name}</h2>
          <p className="text-xs text-gray-500">
            {new Date(author.published_date).toDateString()}
          </p>
        </div>

        <button className='text-gray-500 hover:text-primary flex  gap-2'>
        <CiBookmark/>
        <CiShare2/>
      </button>
      </div>
      

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-lg h-48 w-full object-cover"
        />
      </figure>

      {/* Tags + Description */}
      <div className="px-4 pt-3 text-sm text-gray-600">
        <p>
          <span className="font-semibold">Tags:</span>{" "}
          {tags.join(", ")}
        </p>

        <p className="mt-2 line-clamp-3">
          {details}
        </p>

        <button className="text-orange-500 font-semibold mt-1">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-3">
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700 text-sm">
            {rating.number}.0
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
    );
};

export default NewsCard;