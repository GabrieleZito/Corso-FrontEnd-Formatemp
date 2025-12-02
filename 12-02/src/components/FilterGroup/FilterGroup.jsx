import { useState } from "react";
import "./FilterGroup.css";

function FilterGroup({ genres, platforms, filters, setFilter, resetFilters, stats }) {
    const { search, genre, platform, rating } = filters;
    const [open, setOpen] = useState(false);

    const onChangeFilter = (field, value) => {
        setFilter(field, value);
    };

    const onSelectCategory = (category) => {
        resetFilters();
        setFilter("status", category);
    };

    return (
        <div className="filter-group">
            <div className="filter-row">
                <input
                    className="search-input"
                    placeholder="Cerca un gioco..."
                    value={search}
                    type="text"
                    onChange={(e) => onChangeFilter("search", e.target.value)}
                />
            </div>

            <div className="filter-row selects">
                <select className="gamer-select" value={genre} onChange={(e) => onChangeFilter("genre", e.target.value)}>
                    <option value={"all"}>Tutti i Generi</option>
                    {genres.map((g) => (
                        <option key={g} value={g.toLowerCase()}>
                            {g}
                        </option>
                    ))}
                </select>

                <select className="gamer-select" value={platform} onChange={(e) => onChangeFilter("platform", e.target.value)}>
                    <option value={"all"}>Tutte le Piattaforme</option>
                    {platforms.map((p) => (
                        <option key={p} value={p.toLowerCase()}>
                            {p}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-row slider-row">
                <label className="slider-label">Voto minimo: {rating}</label>
                <input
                    className="gamer-slider"
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={rating}
                    onChange={(e) => onChangeFilter("rating", e.target.value)}
                />
            </div>

            <div className="filter-buttons">
                <button className="status-btn" onClick={() => onSelectCategory("all")}>
                    Tutti
                </button>
                <button className="status-btn" onClick={() => onSelectCategory("completato")}>
                    Completati
                </button>
                <button className="status-btn" onClick={() => onSelectCategory("in corso")}>
                    In Corso
                </button>
                <button className="status-btn" onClick={() => onSelectCategory("wishlist")}>
                    Wishlist
                </button>
                <button className="status-btn" onClick={() => onSelectCategory("abbandonato")}>
                    Abbandonati
                </button>
            </div>

            <div className="accordion">
                <button className="accordion-header" onClick={() => setOpen(!open)}>
                    <span>Statistiche</span>
                    <span className={`arrow ${open ? "open" : ""}`}>▼</span>
                </button>

                <div className={`accordion-body ${open ? "open" : ""}`}>
                    <div className="stats-grid">
                        <div className="stat-box">
                            <h3>{stats.totalGames}</h3>
                            <p>Giochi Totali</p>
                        </div>
                        <div className="stat-box">
                            <h3>{stats.completedGames}</h3>
                            <p>Completati</p>
                        </div>
                        <div className="stat-box">
                            <h3>{stats.totalHours}</h3>
                            <p>Ore Giocate</p>
                        </div>
                        <div className="stat-box">
                            <h3> {stats.averageRating} </h3>
                            <p>Media Voti</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterGroup;
