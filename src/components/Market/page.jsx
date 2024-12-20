import Image from 'next/image';

export default function Market() {
    const data = [
        { name: "Bitcoin", symbol: "BTC", price: "$56,290.30", change: "+1.68%", graph: "/vector1.png", trade: "Trade Now →", changeColor: "text-green-400" },
        { name: "Ethereum", symbol: "ETH", price: "$4,284.81", change: "+4.36%", graph: "/vector2.png", trade: "Trade Now →", changeColor: "text-green-400" },
        { name: "Cardano", symbol: "ADA", price: "$1.88", change: "+3.43%", graph: "/vector3.png", trade: "Trade Now →", changeColor: "text-green-400" },
        { name: "Wax", symbol: "WAXP", price: "$0.97", change: "-2.62%", graph: "/vector4.png", trade: "Trade Now →", changeColor: "text-red-400" },
        { name: "Polkadot", symbol: "DOT", price: "$42.22", change: "+7.56%", graph: "/vector5.png", trade: "Trade Now →", changeColor: "text-green-400" },
    ];

    return (
        <section id='grow' className="relative pt-16 pb-10">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(to right, #0B0B0F, #211C32, #110E1B, #211C35)',
                }}
            ></div>

            {/* Overlay Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/lai.png"
                    alt="Overlay Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="opacity-40"
                />
            </div>

            {/* Content */}
            <div className="relative px-1 z-10 m-auto text-center text-[#ffe6fe]">
                <div className="mx-w-lg ">
                    <h2 className="text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-2 font-semibold text-[#ffe6fe]">
                        Buy and sell with the lowest <br /> fees in the industry
                    </h2>
                    <p className="text-[13px] lg:text-lg md:text-lg xl:text-lg text-[#e3dcffb8]">
                        Trade effortlessly with the lowest fees in the industry, 
                        <p> maximizing your profits on every transaction.</p>
                    </p>
                </div>

                {/* Centered Table with Large Width */}
                <div className="md:overflow-hidden overflow-x-auto bg-gradient-to-r from-[#824FAD]/20 to-[#211C35]/40 p-6 rounded-lg shadow-lg mx-auto mt-10 w-full max-w-3xl">
                    <table className="w-full text-left min-w-[600px]">
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
                        <tbody className="text-white">
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`hover:bg-[#1A1A2C] transition border-b border-gray-800 duration-200 ${index % 2 === 0 ? "bg-[#121222]" : "bg-[#0E0E1E]"}`}
                                >
                                    <td className="py-3 px-4">{item.name}</td>
                                    <td className="py-3 px-4 text-purple-400">{item.symbol}</td>
                                    <td className="py-3 px-4">{item.price}</td>
                                    <td className={`py-3 px-4 font-semibold ${item.changeColor}`}>{item.change}</td>
                                    <td className="py-3 px-4">
                                        <Image
                                            src={item.graph}
                                            alt={`${item.name} graph`}
                                            width={130}
                                            height={30}
                                            className="rounded-md"
                                        />
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <button className="text-purple-400  hover:underline">{item.trade}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
