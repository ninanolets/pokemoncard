function attackDetailTemplate(attack, name, parent, id) {
    const attackDiv = document.createElement("div");
    attackDiv.classList.add("about__attacks-detail");
    attackDiv.setAttribute("id", `id${id}`);
    if (name === "power") attackDiv.classList.add("about__attacks-last");
    attackDiv.classList.add("hidden");
    attackDiv.innerHTML =
        attack === null
            ? `${formatName(name)} ??`
            : `${formatName(name)} ` + attack;
    parent.appendChild(attackDiv);

    return attackDiv;
}

function hideAttackDetails(attack, attackId1, attackId2, attackId3) {
    if (attack) {
        attack.addEventListener("click", (event) => {
            const currentAttackDetail = document.querySelectorAll(
                `#${attackId1}`
            );
            const otherAttack1 = document.querySelectorAll(`#${attackId2}`);
            const otherAttack2 = document.querySelectorAll(`#${attackId3}`);

            for (const power of currentAttackDetail) {
                if (power.classList.contains("hidden")) {
                    power.classList.remove("hidden");
                } else {
                    power.classList.add("hidden");
                }
            }

            for (const power of otherAttack1) {
                power.classList.add("hidden");
            }

            for (const power of otherAttack2) {
                power.classList.add("hidden");
            }
        });
    }
}

async function getPokemonMoves(pokeData, pokeAttacks) {
    const currentAttackIds = [];
    const currentAttackDetailsIds = [];

    for (let i = 0; i < 3; i++) {
        const { move } = pokeData.moves[i] || 0;
        if (move) {
            const div = document.createElement("div");
            div.classList.add("about__attacks");
            const id = `div${i}`;
            div.setAttribute("id", id);
            currentAttackIds.push(id);

            const titleConfig = move.name
                .split("-")
                .map((word) => formatName(word))
                .join(" ");
            div.innerHTML = titleConfig;
            pokeAttacks.appendChild(div);

            // ATTACKS DETAILS
            let res = await fetchMove(move.url);

            const { accuracy } = res;
            const { power } = res;

            const accDetail = attackDetailTemplate(
                accuracy,
                "accuracy",
                div,
                i
            );
            const powerDetail = attackDetailTemplate(power, "power", div, i);
            currentAttackDetailsIds.push(accDetail.id, powerDetail.id);
        }
    }
    return {
        currentAttackIds: currentAttackIds,
        currentAttackDetailsIds: currentAttackDetailsIds,
    };
}

function hideAndShowAttackDetails(getMovesIds) {
    const { currentAttackIds, currentAttackDetailsIds } = getMovesIds;

    const attacksDiv1 = getQuerySelectorOf(`#${currentAttackIds[0]}`);
    const attacksDiv2 = getQuerySelectorOf(`#${currentAttackIds[1]}`);
    const attacksDiv3 = getQuerySelectorOf(`#${currentAttackIds[2]}`);

    const attackId1 = currentAttackDetailsIds[0];
    const attackId2 = currentAttackDetailsIds[2];
    const attackId3 = currentAttackDetailsIds[4];

    hideAttackDetails(attacksDiv1, attackId1, attackId2, attackId3);
    hideAttackDetails(attacksDiv2, attackId2, attackId1, attackId3);
    hideAttackDetails(attacksDiv3, attackId3, attackId2, attackId1);
}
