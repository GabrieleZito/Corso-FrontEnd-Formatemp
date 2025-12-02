import "./FilterGroup.css";

function FilterGroup({ genres, platforms, filters, setFilters }) {
    const { search, genre, platform, rating } = filters;

    const onChangeFilter = (field, value) => {
        setFilters((f) => ({ ...f, [field]: value }));
    };

    return (
        <div>
            <div>
                <div>
                    <input value={search} type="text" onChange={(e) => onChangeFilter("search", e.target.value)} />
                </div>
                <div>
                    <select value={genre} onChange={(e) => onChangeFilter("genre", e.target.value)}>
                        <option value={"all"}>Tutti (Genere)</option>
                        {genres.map((g) => (
                            <option key={g} value={g.toLowerCase()}>
                                {g}
                            </option>
                        ))}
                    </select>
                    <select value={platform} onChange={(e) => onChangeFilter("platform", e.target.value)}>
                        <option value={"all"}>Tutti (Platform)</option>
                        {platforms.map((g) => (
                            <option key={g} value={g.toLowerCase()}>
                                {g}
                            </option>
                        ))}
                    </select>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={rating}
                        onChange={(e) => onChangeFilter("rating", e.target.value)}
                    />
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
