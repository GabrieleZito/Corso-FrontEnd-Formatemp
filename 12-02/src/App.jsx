import { useState } from "react";
import { mockData } from "./data/mockData";

import "./App.css";
import GameCard from "./components/GameCard/GameCard";

function App() {
    const games = mockData;

    return (
        <>
            <div>
                <header>🎮 Gamehub</header>
                <nav></nav>
                <main>
                    <div className="game-grid">
                        {games.map((g) => (
                            <GameCard key={g.id} game={g} />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
