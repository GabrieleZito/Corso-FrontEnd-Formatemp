import { useState } from "react";
import { mockData } from "./data/mockData";

import "./App.css";
import GameCard from "./components/GameCard/GameCard";
import FilterGroup from "./components/FilterGroup/FilterGroup";
import useFilters from "./hooks/useFilters";

function App() {
    const games = mockData;
    const genres = [...new Set(games.map((g) => g.genere))];
    const platforms = [...new Set(games.map((g) => g.piattaforma))];
    const { filters, setFilter, resetFilters } = useFilters({
        search: "",
        genre: "all",
        platform: "all",
        rating: 0,
        status: "all",
    });

    const filteredGames = games.filter((game) => {
        const statusMatch = filters.status === "all" || game.stato.toLowerCase() === filters.status;
        const genreMatch = filters.genre === "all" || game.genere.toLowerCase() === filters.genre;
        const platformMatch = filters.platform === "all" || game.piattaforma.toLowerCase() === filters.platform;
        const ratingMatch = game.voto >= filters.rating;

        /*         // STEP 3: Controllo visti
        const watchedMatch = !showWatchedOnly || movie.watched;
        // Traduzione: "Va bene se NON sto filtrando per visti,
        //              oppure se il film è effettivamente visto" */

        const searchMatch = game.titolo.toLowerCase().includes(filters.search.toLowerCase());

        return genreMatch && ratingMatch && searchMatch && platformMatch && statusMatch;
    });

    return (
        <>
            <div>
                <header>
                    🎮 Gamehub {games.length} gioc{games.length > 0 ? "hi" : "o"}
                </header>
                <nav>
                    <FilterGroup
                        genres={genres}
                        platforms={platforms}
                        filters={filters}
                        setFilter={setFilter}
                        resetFilters={resetFilters}
                    />
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
