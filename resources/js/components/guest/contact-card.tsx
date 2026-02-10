import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ContactCardProps {
    icon: LucideIcon;
    title: string;
    children: React.ReactNode;
}

export function ContactCard({ icon: Icon, title, children }: ContactCardProps) {
    return (
        <Card className="border shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-medium">{title}</h3>
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}