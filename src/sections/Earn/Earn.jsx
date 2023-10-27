import React from "react";

const Earn = () => {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-extrabold dark:text-gray-200 text-gray-800 mb-4 text-center">
        Earn
      </h1>
      <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-500">$ROMI</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                $ROMI Price
              </h3>
              <p className="text-xl text-gray-600">$80.00</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Wallet</h3>
              <p className="text-xl text-gray-600">... $ROMI ($...)</p>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy $ROMI
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-500">$ZLP </h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                $ZLP Price
              </h3>
              <p className="text-xl text-gray-600">$60.00</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Wallet</h3>
              <p className="text-xl text-gray-600">... $ZLP ($...)</p>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy $ZLP
            </button>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Earn;
