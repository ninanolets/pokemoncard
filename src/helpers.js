function removePokemonData(parentContainer) {
    const parent = parentContainer;
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    return parent;
}

function getInputValue(params = null) {
    const inputValue = getQuerySelectorOf("input").value;
    return inputValue;
}

function getQuerySelectorOf(cssElement) {
    return document.querySelector(cssElement);
}

function isInvalid(pokeData) {
    return (
        pokeData === "Not Found" ||
        pokeData === undefined ||
        pokeData.next ===
            `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`
    );
}
