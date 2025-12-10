export const events = [
    {
        slug: "react-day",
        title: "React Day 2025",
        description: "Una giornata dedicata a React, JSX, hook avanzati e best practice.",
        program: [
            {
                sessionId: "jsx-intro",
                title: "Introduzione a JSX",
                time: "10:00 - 11:00",
                description: "Concetti base di JSX, differenze con HTML, rendering dinamico e componenti semplici.",
            },
            {
                sessionId: "hooks-deep-dive",
                title: "Hooks Deep Dive",
                time: "11:30 - 12:30",
                description: "Analisi approfondita dei principali hook di React e dei casi d'uso più avanzati.",
            },
            {
                sessionId: "performance",
                title: "Performance Optimization",
                time: "15:00 - 16:00",
                description: "Tecniche per prevenire re-render inutili, memoization e debugging con React Profiler.",
            },
        ],
    },

    {
        slug: "next-conf",
        title: "Next.js Conference",
        description: "Novità, approfondimenti e workshop sul framework Next.js.",
        program: [
            {
                sessionId: "app-router",
                title: "App Router Overview",
                time: "09:30 - 10:30",
                description: "Routing avanzato, nested layouts e static generation nel nuovo App Router.",
            },
            {
                sessionId: "server-components",
                title: "Server Components in pratica",
                time: "11:00 - 12:00",
                description: "Come funzionano i Server Components e perché cambiano il modo di sviluppare frontend.",
            },
            {
                sessionId: "deployment",
                title: "Deployment & Optimization",
                time: "14:00 - 15:00",
                description: "Ottimizzazione delle performance, caching e deploy su Vercel.",
            },
        ],
    },

    {
        slug: "ai-dev-summit",
        title: "AI Dev Summit",
        description: "Un evento dedicato a sviluppatori che lavorano con modelli AI e tooling moderno.",
        program: [
            {
                sessionId: "prompt-engineering",
                title: "Prompt Engineering Essentials",
                time: "10:00 - 11:00",
                description: "Pattern e strategie per scrivere prompt efficaci e robusti.",
            },
            {
                sessionId: "agents",
                title: "AI Agents & Automation",
                time: "11:30 - 12:30",
                description: "Creare workflow automatizzati con agenti AI e architetture event-based.",
            },
            {
                sessionId: "vector-search",
                title: "Vector Search & Embeddings",
                time: "15:00 - 16:00",
                description: "Introduzione a semantic search, embeddings e database vettoriali.",
            },
        ],
    },
];

// Utility per recuperare un evento dallo slug
export function getEventBySlug(slug) {
    return events.find((ev) => ev.slug === slug);
}

// Utility per recuperare una sessione
export function getSession(eventSlug, sessionId) {
    const event = getEventBySlug(eventSlug);
    if (!event) return null;

    return event.program.find((s) => s.sessionId === sessionId);
}
