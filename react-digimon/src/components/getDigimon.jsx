const BASE_URL = "https://digi-api.com/api/v1/digimon/";

async function getDigimon(name) {
    try {
        const response = await fetch(`${BASE_URL}${name}`);
        if (!response.ok) {
            throw new Error("Digimon not found");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getDigimon;
