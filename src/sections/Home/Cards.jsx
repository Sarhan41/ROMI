import React from "react";

const Cards = () => {
  return (
    <div className="flex-center flex-col mt-8">
      <div className="flex-start flex-col">
        <h1 className="text-4xl font-young">Two tokens create</h1>
        <h1 className="text-4xl font-young">our ecosystem</h1>
      </div>
      <div className="flex-col sm:flex-row flex-between mt-8 gap-4">
        <div className="rounded-md shadow-lg dark:border-2 p-4 m-4 max-w-md">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-500">$ROMI</h1>
            <p className="text-gray-600">
              $ZOMI is the utility and governance token. Accrues 30% of the
              platform's generated fees.
            </p>
            <h4 className="text-blue-500">Ethereum APR: 0.00%</h4>
            <div className="flex flex-col justify-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                Buy
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-md shadow-lg p-4 m-4 max-w-md dark:border-2 ">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-500">$RLP</h1>
            <p className="text-gray-600">
              $ZLP is the liquidity provider token. Accrues 70% of the
              platform's generated fees.
            </p>
            <h4 className="text-blue-500">Ethereum APR: 1,656,602,917.66%</h4>
            <div className="flex justify-center flex-col mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                Buy
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
