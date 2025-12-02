import { useState } from "react";
import { mockData } from "./data/mockData";

import "./App.css";
import GameCard from "./components/GameCard/GameCard";
import FilterGroup from "./components/FilterGroup/FilterGroup";

function App() {
    const games = mockData;
    const genres = [...new Set(games.map((g) => g.genere))];
    const platforms = [...new Set(games.map((g) => g.piattaforma))];
    const [filters, setFilters] = useState({ search: "", genre: "all", platform: "all", rating: 0 });

    const filteredGames = games.filter((game) => {
        const genreMatch = filters.genre === "all" || game.genere.toLowerCase() === filters.genre;
        const platformMatch = filters.platform === "all" || game.piattaforma.toLowerCase() === filters.platform;
        const ratingMatch = game.voto >= filters.rating;

        /*         // STEP 3: Controllo visti
        const watchedMatch = !showWatchedOnly || movie.watched;
        // Traduzione: "Va bene se NON sto filtrando per visti,
        //              oppure se il film è effettivamente visto" */

        const searchMatch = game.titolo.toLowerCase().includes(filters.search.toLowerCase());

        return genreMatch && ratingMatch && searchMatch && platformMatch;
    });

    return (
        <>
            <div>
                <header>
                    🎮 Gamehub {games.length} gioc{games.length > 0 ? "hi" : "o"}
                </header>
                <nav>
                    <FilterGroup genres={genres} platforms={platforms} filters={filters} setFilters={setFilters} />
                </nav>
                <main>
                    <div className="game-grid">
                        {filteredGames.length > 0
                            ? filteredGames.map((g) => <GameCard key={g.id} game={g} />)
                            : "Nessun gioco corrisponde ai filtri di ricerca"}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
