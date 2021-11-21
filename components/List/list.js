import React from "react";

function List(props) {
  return (
    <div className="flex w-full mx-auto my-0 p-3 md:p-4 lg:p-5 justify-center items-center border-b border-gray-200">
      <div>
        <img
          className="h-auto w-32 md:w-42 md:h-auto lg:w-48 rounded object-cover"
          src={props.urlToImage}
        />
      </div>
      <div className="w-full flex flex-col ml-5 md:ml-10">
        <a href={props.url} target="_blank">
          <p className="text-xs overflow-hidden lg:py-2 py-1 lg:text-sm w-full text-gray-800 font-semibold">
            {props.title}
          </p>
          <p className="hidden overflow-hidden md:flex md:text-xs text-gray-800">
            {props.description}
          </p>
        </a>
      </div>
    </div>
  );
}

export default List;
