import { Link } from "react-router-dom";
import FollowItem from "./FollowItem";

const WhoToFollow = () => {
    const users = [
        {
            id: "user-01",
            avatar: "http://localhost:5173/src/assets/img/default-user.png",
            name: "Subash Shrestha",
            username: "subashshrestha",
            varified: true,
            varifiedColor: "gold",
        },
        {
            id: "user-02",
            avatar: "http://localhost:5173/src/assets/img/default-user.png",
            name: "Ram Krishna Shrestha",
            username: "ram_shrestha",
            varified: true,
        },
        {
            id: "user-03",
            avatar: "http://localhost:5173/src/assets/img/default-user.png",
            name: "Pawon Shrestha",
            username: "pawonshrestha",
        },
    ];
    return (
        <div className="py-2">
            <div className="bg-dark pt-3 overflow-hidden rounded-[1rem]">
                <h2 className="text-xl px-4 font-bold mb-3">Who to follow</h2>

                {users.map((user) => (
                    <FollowItem key={user.id} avatar={user?.avatar} name={user?.name} username={user?.username} varified={user?.varified} varifiedColor={user?.varifiedColor} />
                ))}

                <Link to="#" className="p-4 block w-full text-start hover:bg-dark-hover text-primary">
                    Show more
                </Link>
            </div>
        </div>
    );
};

export default WhoToFollow;
