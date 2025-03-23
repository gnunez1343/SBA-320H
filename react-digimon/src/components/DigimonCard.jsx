import React from "react";

function DigimonCard({ data }) {
    if (!data) {
        return <p className="error">Digimon not found</p>;
    }

    const { name, images, levels, types, attributes, skills } = data;
    const imageUrl = images.length > 0 ? images[0].href : "placeholder.png";
    const level = levels.length > 0 ? levels[0].level : "Unknown";
    const type = types.length > 0 ? types[0].type : "Unknown";
    const attribute = attributes.map(attr => attr.attribute).join(", ") || "Unknown";
    const skillList = skills.slice(0, 3).map(skill => (
        <li key={skill.skill}>
            {skill.skill}: <span>{skill.description}</span>
        </li>
    ));

    return (
        <div className="id-card">
            <div className="id-header">Digi-ID</div>
            <div className="id-content">
                <img src={imageUrl} alt={name} className="digimon-image" />
                <div className="id-info">
                    <h2 className="digimon-name">{name}</h2>
                    <p><strong>Level:</strong> {level}</p>
                    <p><strong>Type:</strong> {type}</p>
                    <p><strong>Attribute:</strong> {attribute}</p>
                    <h3>Skills:</h3>
                    <ul className="skill-list">{skillList}</ul>
                </div>
            </div>
        </div>
    );
}

export default DigimonCard;
