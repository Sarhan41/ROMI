import React from "react";
import { FcNeutralTrading } from "react-icons/fc";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import Cards from "./Cards";

const Home = () => {
  const cardsData = [
    {
      icon: <FcNeutralTrading className="text-white w-6 h-6" />,
      title: "Total Trading Volume",
      content: "$0",
      color: "green-400",
    },
    {
      icon: <BsCoin className="text-green w-6 h-6" />,
      title: "Open Interest",
      content: "$0",
      color: "blue-400",
    },
    {
      icon: <FaMoneyBillWave className="text-blue w-6 h-6" />,
      title: "Total Users",
      content: "0",
      color: "red-400",
    },
  ];

  return (
    <section className="mt-16 flex-center flex-col">
      <div className="text-center">
        <h1 className="font-roboto font-bold text-4xl md:text-5xl lg:text-7xl mb-2">
          Experience the Power of
        </h1>
        <h1 className="font-roboto font-bold text-4xl md:text-5xl lg:text-7xl">
          Decentralized Trading
        </h1>
      </div>
      <p className="font-medium text-base md:text-lg lg:text-xl mt-4 text-center mx-4 md:mx-8">
        Trade top cryptocurrencies like BTC, ETH, and AVAX with leverage of up
        to 30x, directly from your secure wallet.
      </p>
      <div className="flex flex-col mt-6 md:flex-row w-full justify-center items-center gap-4 md:gap-32">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
          Connect Wallet
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto mt-4 md:mt-0">
          Start Trading
        </button>
      </div>

      <div className="flex flex-wrap justify-between w-full mt-16">
        {cardsData.map((card, index) => (
          <div key={index} className={`rounded-md shadow-lg p-4 m-4 max-w-sm`}>
            <div className="flex items-center shadow-lg dark:border-2 p-4">
              <div className={`rounded-full bg-${card.color} p-4`}>
                {card.icon}
              </div>
              <div className="ml-4 ">
                <h1 className="text-xl font-bold ">{card.title}</h1>
                <p className="text-gray-600 text-2xl pt-4">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
        <Cards />
    </section>
  );
};

export default Home;
