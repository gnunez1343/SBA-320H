import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");

    const handleSearch = async () => {
        if (input.trim() === "") {
            alert("Please enter a Digimon name.");
            return;
        }
        onSearch(input);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Digimon name"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
