import { type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
    return (
        <Button variant="outline" size="icon" asChild>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon className="h-5 w-5" />
            </a>
        </Button>
    );
}