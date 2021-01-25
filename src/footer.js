function hideButtonPreviousOrNext(pokemonId) {
    // there are 898 pokemons
    if (pokemonId <= 1) {
        getQuerySelectorOf("#prev").classList.add("invisible");
    } else {
        getQuerySelectorOf("#prev").classList.remove("invisible");
    }

    if (pokemonId >= 898) {
        getQuerySelectorOf("#next").classList.add("invisible");
    } else {
        getQuerySelectorOf("#next").classList.remove("invisible");
    }
}

function setFooter(pokeData, footer) {
    const footerPrevious = getQuerySelectorOf("#prev");
    const footerCurrentId = getQuerySelectorOf("#curr-id");
    const footerCurrentName = getQuerySelectorOf("#curr-name");
    const footerNext = getQuerySelectorOf("#next");

    const { id, name } = pokeData;

    footer.classList.remove("hidden");
    footerPrevious.innerHTML = `# ${Number(id) - 1} </br> &larr;`;
    footerCurrentId.innerHTML = `# ${id}`;
    footerCurrentName.innerHTML = `${formatName(name)}`;
    footerNext.innerHTML = `# ${Number(id) + 1} </br> &rarr;`;
}
