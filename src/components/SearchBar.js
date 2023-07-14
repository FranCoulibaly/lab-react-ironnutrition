import { Input } from "antd";
import { useState } from "react";

function SearchBar({ searchQueryFunc }){
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
        searchQueryFunc(search);
    }
    
    return (
        <div>
            <Input onChange={handleChange} placeholder="Search..."/>
        </div>
    )
}

export default SearchBar;