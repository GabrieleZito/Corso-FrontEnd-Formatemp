import Image from "next/image";
import { events } from "@/lib/events";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start dark:text-white">
                <div className="text-white">HOME</div>
                <span>Eventi disponibili: {events.length}</span>
                <section>
                    {events.map((e) => (
                        <div key={e.slug} className="mt-4">
                            <h2>{e.title}</h2>
                            <Link href={`/events/${e.slug}`}>Dettagli</Link>
                        </div>
                    ))}
                    <Image src={"./file.svg"} width={50} height={50} />
                    <Image src={"./file.svg"} width={50} height={50} />
                </section>
            </main>
        </div>
    );
}
