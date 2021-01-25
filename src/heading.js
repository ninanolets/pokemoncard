function setPokemonAvatar(pokeData, parentTag) {
    const pokeAvatar = getQuerySelectorOf(".about__avatar");

    removePokemonData(pokeAvatar);

    const img = document.createElement("img");
    const pokeSrc = pokeData.sprites.front_default;
    img.src = pokeSrc;
    img.classList.add("central-img");
    parentTag.classList.remove("hidden");
    pokeAvatar.appendChild(img);
}

function formatName(word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
}

async function setPokemonName(pokeData) {
    const pokeName = getQuerySelectorOf(".about__title");
    const { name } = await pokeData;
    pokeName.innerHTML = formatName(name);
}

async function setPokemonPowers(pokeData) {
    const powersContainer = getQuerySelectorOf("#details");
    removePokemonData(powersContainer);

    const powersList = [...pokeData.types];
    for (const power of powersList) {
        const div = document.createElement("div");
        div.classList.add("about__detail");
        div.innerHTML = power.type.name;
        powersContainer.appendChild(div);
    }
}
