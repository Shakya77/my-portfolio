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
        <div className="border border-gray-200   rounded p-6 hover:bg-gray-50   transition-colors">
            <div className="flex gap-4">
                <div className="shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded border border-gray-200   bg-gray-50  ">
                        <Icon className="h-5 w-5 text-blue-600  " />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-blue-600  ">{item.period}</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900  ">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-700  ">{item.organization}</p>
                    {item.description && (
                        <p className="mt-2 text-sm text-gray-600   leading-relaxed">{item.description}</p>
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
