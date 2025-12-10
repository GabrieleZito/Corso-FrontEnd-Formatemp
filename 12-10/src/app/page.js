import Image from "next/image";

export default async function Home() {
    const res = await fetch("https://ddragon.leagueoflegends.com/cdn/15.24.1/data/en_US/item.json");
    const data = await res.json();
    //console.log(data.data);
    const items = Object.entries(data.data);
    console.log(items[0]);
    
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-row flex-wrap">
                    {items.map(([id, item]) => (
                        <div key={id} >
                            {/* <strong>{item.name}</strong> (ID: {id}) */}
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/15.24.1/img/item/${item.image.full}`}
                                className="w-20 h-20"
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
