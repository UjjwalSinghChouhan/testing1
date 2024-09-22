import React from 'react';

const Card1 = ({img ,text}) => {
  return (
    <div className="h-8 m-4 p-4 rounded-md w-64 shadow-lg">
      <div>
        {/* <img className="w-full" src={img} /> */}
        <h1 className="text-xl font-bold text-blue-500 p-4 text-center">
         {text}
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default Card1;
