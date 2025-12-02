import "./FilterGroup.css";

function FilterGroup({ genres, platforms }) {
    return (
        <div>
            <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <select>
                        <option value={""}>Genere</option>
                        {genres.map((g) => (
                            <option value={g.toLowerCase()}>{g}</option>
                        ))}
                    </select>
                    <select>
                        <option value={""}>Piattaforma</option>
                        {platforms.map((g) => (
                            <option value={g.toLowerCase()}>{g}</option>
                        ))}
                    </select>
                    <input type="range" min="0" max="10" step="0.1" />
                </div>
            </div>
            <div>
                <button>Tutti</button>
                <button>Completati</button>
                <button>In Corso</button>
                <button>Wishlist</button>
                <button>Abbandonati</button>
            </div>
        </div>
    );
}

export default FilterGroup;
