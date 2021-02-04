import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full"></img>
      <div className="px-6 py-4">
        <ul>
          <li>
            <p className="font-mono text-sm a-gray-900"> Views: {image.views} </p>
          </li>
          <li>
            <p className="font-mono text-sm a-gray-900">Downloads: {image.downloads} </p>
          </li>
          <li>
            <p className="font-mono text-sm a-gray-900">Likes: {image.likes}</p>
          </li>
        </ul>
        <div className="text-blue-500 text-base text-xl-mb-2 mt-2">
          Photo by {image.user}
        </div>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
