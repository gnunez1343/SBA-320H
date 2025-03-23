import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import DigimonCard from "./components/DigimonCard";
import getDigimon from "./components/getDigimon";

function App() {
    const [digimon, setDigimon] = useState(null);

    const handleSearch = async (name) => {
        const data = await getDigimon(name.toLowerCase());
        setDigimon(data);
    };

    return (
        <div className="container">
            <h1>Digi-Data</h1>
            <SearchBar onSearch={handleSearch} />
            {digimon && <DigimonCard data={digimon} />}
        </div>
    );
}

export default App;
