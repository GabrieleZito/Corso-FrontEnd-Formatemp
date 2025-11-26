export function Select({ options, setCategory }) {
    return (
        <select onChange={(e) => setCategory(() => e.target.value)}>
            {options.map((o) => (
                <option key={o} value={o.toLowerCase()}>
                    {o}
                </option>
            ))}
        </select>
    );
}
