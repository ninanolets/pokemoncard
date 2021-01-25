async function definePokemon(event) {
    let pokeData;

    if (event.key == "Enter") {
        pokeData = await fetchPokemon(event.target.value);
    } else {
        const inputValue = getInputValue();
        pokeData = await fetchPokemon(inputValue);

        let pokeId;
        if (event.target.id === "prev") pokeId = (pokeData.id - 1).toString();
        if (event.target.id === "next") pokeId = (pokeData.id + 1).toString();

        if (pokeId) {
            pokeData = await fetchPokemon(pokeId);
        }
    }
    if (pokeData === "Not Found") {
        console.log("Pokemon not found");
    }

    return pokeData;
}
