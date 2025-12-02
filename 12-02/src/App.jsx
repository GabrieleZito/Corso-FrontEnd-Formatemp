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

    const [filteredGames, setFilteredGames] = useState(games);
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
                        {filteredGames.map((g) => (
                            <GameCard key={g.id} game={g} />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
