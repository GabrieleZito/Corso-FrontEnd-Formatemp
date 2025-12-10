import { events, getEventBySlug } from "@/lib/events";
import Link from "next/link";

export function generateStaticParams() {
    return events.map((post) => ({
        slug: post.slug,
    }));
}

export default async function page({ params }) {
    const { slug } = await params;
    const event = getEventBySlug(slug);

    return (
        <div>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <p>Inizio: {event.program[0].time}</p>
            {event.program.map((p) => (
                <div key={p.sessionId} className="mt-6">
                    <h3>{p.title}</h3>
                    <Link href={`/events/${slug}/${p.sessionId}`}>Apri</Link>
                </div>
            ))}
        </div>
    );
}
