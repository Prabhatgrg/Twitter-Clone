const TrendsCard = ({ topic, title, count }) => {
    return (
        <div className="px-4 py-3 ease-in-out duration-300 hover:bg-dark-hover">
            <span className="font-medium text-xs text-gray-400">{topic}</span>
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="font-medium text-xs text-gray-400">{count}</span>
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

                {tranding.map((trend) => (
                    <TrendsCard key={trend.id} topic={trend.topic} title={trend.title} count={trend.count} />
                ))}
            </div>
        </div>
    );
};

export default Trends;
