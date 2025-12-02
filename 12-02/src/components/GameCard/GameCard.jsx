import "./GameCard.css";

function GameCard({ game }) {
    const { id, titolo, genere, piattaforma, prezzo, anno_di_uscita, voto, stato, ore_giocate, difficolta, cover } = game;
    return (
        <div className="game-card gamer-card">
            <div className="glow-border"></div>
            <img src={cover} alt={titolo} className="game-cover" />

            <div className="game-info">
                <h2 className="game-title">{titolo}</h2>
                <p className="game-genre">
                    {genere} • {piattaforma}
                </p>

                <div className="game-stats">
                    <div className="stat-card">
                        <span>🎮</span>
                        <p>{anno_di_uscita}</p>
                    </div>
                    <div className="stat-card">
                        <span>💰</span>
                        <p>€{prezzo}</p>
                    </div>
                    <div className="stat-card">
                        <span>⭐</span>
                        <p>{voto}</p>
                    </div>
                    <div className="stat-card">
                        <span>📌</span>
                        <p>{stato}</p>
                    </div>
                    <div className="stat-card">
                        <span>⏳</span>
                        <p>{ore_giocate}h</p>
                    </div>
                    <div className="stat-card">
                        <span>⚔️</span>
                        <p>{difficolta}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
