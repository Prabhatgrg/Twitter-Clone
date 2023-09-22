import Searchbar from "./Searchbar";
import Subscription from "./Subscription";
import Trends from "./Trends";
import WhoToFollow from "./WhoToFollow";

const RightSidebar = () => {
    return (
        <div className="sticky top-0">
            <Searchbar />
            <Subscription />
            <Trends />
            <WhoToFollow />
        </div>
    );
};

export default RightSidebar;
