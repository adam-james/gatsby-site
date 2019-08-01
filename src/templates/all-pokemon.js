import React from "react"

import Layout from "../components/layout"

export default ({ pageContext: { allPokemon } }) => (
  <Layout>
    <div>
      <h1>Behold, the Pokémon!</h1>
      <ul>
        {allPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)
