import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FiSearch />
                <input type="text" className="p-2 border-0" />
                <div className="p-3 boder-2"></div>
            </form>
        </div>
    );
};

export default Searchbar;
