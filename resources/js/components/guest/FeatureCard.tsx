import { type LucideIcon } from 'lucide-react';

export interface TimelineItem {
    id: string;
    period: string;
    title: string;
    organization: string;
    description?: string;
}

interface TimelineCardProps {
    item: TimelineItem;
    icon: LucideIcon;
}

function TimelineCard({ item, icon: Icon }: TimelineCardProps) {
    return (
        <div className="bg-[#0f0f0f] rounded-xl p-5 sm:p-6 hover:bg-[#141414] transition-all duration-300">
            <div className="flex gap-4">
                <div className="shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#1a1a1a]">
                        <Icon className="h-5 w-5 text-[#eb5d3a]" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#eb5d3a]">{item.period}</p>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-[#cecece]">{item.organization}</p>
                    {item.description && (
                        <p className="mt-2 text-sm text-[#9f9f9f] leading-relaxed">{item.description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

interface TimelineListProps {
    items: TimelineItem[];
    icon: LucideIcon;
}

export function TimelineList({ items, icon }: TimelineListProps) {
    return (
        <div className="space-y-4">
            {items.map((item) => (
                <TimelineCard key={item.id} item={item} icon={icon} />
            ))}
        </div>
    );
}
