import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className="flex gap-2 items-center bg-neutral-800 px-5 py-3 rounded-full" onSubmit={(e) => handleSubmit(e)}>
            <FiSearch />
            <input type="text" className="p-2 border-0 bg-transparent focus:outline-0 grow" />
        </form>
    );
};

export default Searchbar;
