import TrendsItem from "./TrendsItem";

const Trends = () => {
    const trending = [
        {
            id: 1,
            topic: "Trending in nepal",
            title: "Gojo",
            count: "293K posts",
            url: "#",
        },
        {
            id: 2,
            topic: "Trending in nepal",
            title: "Nepal",
            count: "9,142 posts",
            url: "#",
        },
        {
            id: 3,
            topic: "Politics · Trending",
            title: "Arsenal",
            count: "70.9K posts",
            url: "#",
        },
        {
            id: 4,
            topic: "Trending in Singapore",
            title: "#LeoPosterFeast",
            count: "140K posts",
            url: "#",
        },
        {
            id: 5,
            topic: "Technology · Trending",
            title: "Apple",
            count: "294K posts",
            url: "#",
        },
    ];

    return (
        <div className="py-2">
            <div className="bg-dark pt-3 overflow-hidden rounded-[1rem]">
                <h2 className="text-xl px-4 font-bold mb-3">Trends for you</h2>

                <div className="relative">
                    {trending.map((trend) => (
                        <TrendsItem key={trend.id} topic={trend.topic} title={trend.title} count={trend.count} url={trend.url} />
                    ))}
                    <button className="p-4 block w-full text-start hover:bg-dark-hover text-primary">Show more</button>
                </div>
            </div>
        </div>
    );
};

export default Trends;
