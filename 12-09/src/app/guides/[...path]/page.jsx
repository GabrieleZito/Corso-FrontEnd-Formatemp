export default async function page({ params }) {
    const { path } = await params;
    console.log(path);

    return (
        <div>
            {path.map((p) => (
                <div>{p}</div>
            ))}
        </div>
    );
}
