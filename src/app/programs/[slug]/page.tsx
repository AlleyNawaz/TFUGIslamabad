import { programs } from "@/data/programs";
import { sessions } from "@/data/sessions";
import { VideoGrid } from "@/components/sections/VideoGrid";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return programs.map((program) => ({
        slug: program.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const program = programs.find((p) => p.slug === params.slug);
    if (!program) return { title: "Program Not Found" };

    return {
        title: `${program.title} - TFUG Islamabad`,
        description: program.description,
    };
}

export default function ProgramPage({ params }: Props) {
    const program = programs.find((p) => p.slug === params.slug);

    if (!program) {
        notFound();
    }

    const programSessions = sessions.filter((s) => s.programId === program.id);

    return (
        <div className="min-h-screen pb-20">
            <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${program.color.replace('bg-', 'bg-')}`}>
                        {program.title}
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        {program.title}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                        {program.description}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                    Sessions & Recordings ({programSessions.length})
                </h2>

                {programSessions.length > 0 ? (
                    <VideoGrid sessions={programSessions} />
                ) : (
                    <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                        <p className="text-slate-500">No sessions found for this program yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
