import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center boder-b border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
