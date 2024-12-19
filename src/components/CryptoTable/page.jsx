import React from "react";

export default function CryptoTable() {
  const data = [
    { name: "Bitcoin", symbol: "BTC", price: "$56,290.30", change: "+1.68%", graph: "📈", trade: "Trade Now →", changeColor: "text-green-400" },
    { name: "Ethereum", symbol: "ETH", price: "$4,284.81", change: "+4.36%", graph: "📈", trade: "Trade Now →", changeColor: "text-green-400" },
    { name: "Cardano", symbol: "ADA", price: "$1.88", change: "+3.43%", graph: "📈", trade: "Trade Now →", changeColor: "text-green-400" },
    { name: "Wax", symbol: "WAXP", price: "$0.97", change: "-2.62%", graph: "📉", trade: "Trade Now →", changeColor: "text-red-400" },
    { name: "Polkadot", symbol: "DOT", price: "$42.22", change: "+7.56%", graph: "📈", trade: "Trade Now →", changeColor: "text-green-400" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0B0B0F] to-[#211C32] p-6 rounded-lg shadow-lg  mx-auto mt-10">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Symbol</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Change</th>
            <th className="py-3 px-4">Graph</th>
            <th className="py-3 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="text-white overflow-x-scroll max-w-md">
          {data.map((item, index) => (
            <tr
              key={index}
              className={`hover:bg-[#1A1A2C] transition duration-200 ${
                index % 2 === 0 ? "bg-[#121222]" : "bg-[#0E0E1E]"
              }`}
            >
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4 text-purple-400">{item.symbol}</td>
              <td className="py-3 px-4">{item.price}</td>
              <td className={`py-3 px-4 font-semibold ${item.changeColor}`}>{item.change}</td>
              <td className="py-3 px-4">{item.graph}</td>
              <td className="py-3 px-4 text-right">
                <button className="text-purple-400 hover:underline">{item.trade}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
