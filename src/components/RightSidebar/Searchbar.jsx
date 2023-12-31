import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="sticky top-0 z-20 py-1 bg-black">
            <form className="flex gap-2 items-center bg-dark px-5 rounded-full" onSubmit={(e) => handleSubmit(e)}>
                <FiSearch />
                <input type="text" className="p-3 border-0 bg-transparent focus:outline-0 grow" placeholder="Search" />
            </form>
        </div>
    );
};

export default Searchbar;
