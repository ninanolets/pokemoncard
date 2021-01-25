async function fetchPokemon(param) {
    try {
        const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${param}`,
            {
                validateStatus: false,
            }
        );
        return res.data;
    } catch (err) {
        console.log(err.response);
    }
}

async function fetchMove(param) {
    try {
        const res = await axios.get(`${param}`, {
            validateStatus: false,
        });
        return res.data;
    } catch (err) {
        console.log(err.response);
    }
}
