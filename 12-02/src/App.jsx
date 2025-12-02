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
        const searchMatch = game.titolo.toLowerCase().includes(filters.search.toLowerCase());

        return genreMatch && ratingMatch && searchMatch && platformMatch && statusMatch;
    });

    const stats = {
        totalHours: games.reduce((sum, g) => (sum += g.ore_giocate), 0),
        averageRating: (games.reduce((sum, g) => (sum += g.voto), 0) / games.length).toFixed(1),
        totalGames: games.length,
        completedGames: games.filter((g) => g.stato == "completato").length,
    };
    console.log(stats);

    return (
        <>
            <div>
                <header style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "30px" }}>🎮 Gamehub</div>
                </header>
                <nav>
                    <FilterGroup
                        genres={genres}
                        platforms={platforms}
                        filters={filters}
                        setFilter={setFilter}
                        resetFilters={resetFilters}
                        stats={stats}
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
