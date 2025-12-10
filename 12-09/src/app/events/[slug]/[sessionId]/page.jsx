import { events, getSession } from "@/lib/events";

export function generateStaticParams() {
    const paths = [];
    return events.map((e) => [...e.program.map((p) => ({ slug: e.slug, sessionId: p.sessionId }))]);
}

export default async function page({ params }) {
    const { slug, sessionId } = await params;
    const session = getSession(slug, sessionId);
    return (
        <div>
            <p>{session.title}</p>
            <p>{session.description}</p>
            <div>
                <p>{session.time}</p>
            </div>
        </div>
    );
}
