async function getPokemon(event) {
    const sectionAbout = getQuerySelectorOf(".section-about");
    const pokeAttacks = getQuerySelectorOf(".attacks");
    const footer = getQuerySelectorOf(".footer");

    if (event.key == "Enter" || event.type == "click") {
        // Define Pokemon
        const pokeData = await definePokemon(event);

        getQuerySelectorOf("input").value = pokeData.name || "";

        // Hide previous and next buttons when necessary
        hideButtonPreviousOrNext(pokeData.id);

        // Hide information if data is invalid
        if (isInvalid(pokeData)) {
            sectionAbout.classList.add("hidden");
            footer.classList.add("hidden");
        } else {
            // AVATAR
            setPokemonAvatar(pokeData, sectionAbout);

            // NAME
            setPokemonName(pokeData);

            // POWERS
            setPokemonPowers(pokeData);

            // ATTACKS
            removePokemonData(pokeAttacks);
            const getMovesIds = await getPokemonMoves(pokeData, pokeAttacks);
            hideAndShowAttackDetails(getMovesIds);

            // FOOTER
            setFooter(pokeData, footer);
        }
    }
}
