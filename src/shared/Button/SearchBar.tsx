import { SlMagnifier } from "react-icons/sl";

const SearchBox = () => {
    return (
        <div className="flex items-center h-8 gap-4 px-4 rounded bg-blue-100 border-2 border-red-500">

            <input
                type="search"
                placeholder="Search"
                className="w-20 bg-transparent outline-none flex-end border-blue-600 border-2"
            />
        </div>
    );
};

export default SearchBox;