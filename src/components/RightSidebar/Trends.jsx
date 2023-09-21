import { BsThreeDots } from "react-icons/bs";
import { PiSmileySad } from "react-icons/pi";
import { useState } from "react";

const TrendsCard = ({ topic, title, count }) => {
    const [isToggle, setToggle] = useState(false);

    return (
        <div className="px-4 py-3 ease-in-out duration-300 hover:bg-dark-hover relative">
            <span className="font-medium text-xs text-gray-400">{topic}</span>
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="font-medium text-xs text-gray-400">{count}</span>
            <div className="absolute z-10 flex items-end flex-col right-4 top-3">
                <button
                    onClick={() => setToggle((prev) => !prev)}
                    className="relative z-10  rounded-full w-9 h-9 p-0 flex items-center justify-center border-0 bg-transparent hover:bg-primary/[.1] focus:outline-0"
                >
                    <BsThreeDots className="text-xl" />
                </button>
                {isToggle ? (
                    <div className="relative z-20 bg-black rounded-lg shadow-lg shadow-slate-50/20">
                        <div className="px-4 py-2 flex gap-3">
                            <PiSmileySad />
                            <span className="font-bold">Not interested in this</span>
                        </div>
                        <div className="px-4 py-2 flex gap-3">
                            <PiSmileySad />
                            <span className="font-bold">Not interested in this</span>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

const Trends = () => {
    const tranding = [
        {
            id: 1,
            topic: "Trending in nepal",
            title: "Gojo",
            count: "293K posts",
        },
        {
            id: 2,
            topic: "Trending in nepal",
            title: "Nepal",
            count: "9,142 posts",
        },
        {
            id: 3,
            topic: "Politics · Trending",
            title: "Arsenal",
            count: "70.9K posts",
        },
    ];

    return (
        <div className="py-2">
            <div className="bg-dark py-3 rounded-[1rem]">
                <h2 className="text-xl px-4 font-bold mb-3">Trends for you</h2>

                <div className="relative">
                    {tranding.map((trend) => (
                        <TrendsCard key={trend.id} topic={trend.topic} title={trend.title} count={trend.count} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trends;
