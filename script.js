document.getElementById("searchButton").addEventListener("click", handleSearch);
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});

async function handleSearch() {
    const searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput === "") {
        alert("Please enter a Digimon name.");
        return;
    }

    const digimonData = await getDigimon(searchInput.toLowerCase());
    displayDigimon(digimonData);
}

function displayDigimon(data) {
    const digimonCard = document.getElementById("digimonCard");
    digimonCard.innerHTML = "";

    if (!data) {
        digimonCard.innerHTML = `<p class="error">Digimon not found</p>`;
        return;
    }

    const { name, images, levels, types, attributes, skills } = data;

    const imageUrl = images.length > 0 ? images[0].href : "placeholder.png";
    const level = levels.length > 0 ? levels[0].level : "Unknown";
    const type = types.length > 0 ? types[0].type : "Unknown";
    const attribute = attributes.map(attr => attr.attribute).join(", ") || "Unknown";
    const skillList = skills.slice(0, 3).map(skill => `<li>${skill.skill}: <span>${skill.description}</span></li>`).join("");

    digimonCard.innerHTML = `
        <div class="id-card">
            <div class="id-header">Digi-ID</div>
            <div class="id-content">
                <img src="${imageUrl}" alt="${name}" class="digimon-image">
                <div class="id-info">
                    <h2 class="digimon-name">${name}</h2>
                    <p><strong>Level:</strong> ${level}</p>
                    <p><strong>Type:</strong> ${type}</p>
                    <p><strong>Attribute:</strong> ${attribute}</p>
                    <h3>Skills:</h3>
                    <ul class="skill-list">${skillList}</ul>
                </div>
            </div>
        </div>
    `;
}
