export async function pokes(limit=10){
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit='+limit);
    let allpoke = await response.json();
    let pokes = allpoke.results.map(poke => pokeInfo(poke));
    
    return  await Promise.all(pokes);
}

async function pokeInfo(poke){
    response = await fetch(poke.url);
    info = await response.json();
    types = info.types.map(type => type.type.name)
    return {"name": poke.name, "type": types, "id": String(info.id)};
}




