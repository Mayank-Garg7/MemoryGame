import { SlMagnifier } from "react-icons/sl";

const SearchBox = () => {
    return (
        <div className="flex items-center h-8 pl-5 gap-4 rounded bg-blue-100 ">
            <SlMagnifier />
            <input
                type="search"
                placeholder="Search here..."
                className="bg-transparent outline-none"
            />
        </div>
    );
};

export default SearchBox;