import { useForm } from '@inertiajs/react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { route } from 'ziggy-js';
import Header from '@/components/guest/header';
import { SocialLink } from '@/components/guest/social-link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import GuestLayout from '@/layouts/guest/guest-layout';

interface Props {
    flash?: {
        success?: string;
        error?: string;
    };
}

export default function Contact({ flash }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        query: '',
    });

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('notify'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                console.error('Errors:', errors);
                Object.values(errors).forEach(error => {
                    toast.error(error);
                });
            },
        });
    };

    return (
        <GuestLayout breadcrumbs="Contact">
            <div className="flex flex-col flex-1 min-h-[calc(100vh-200px)] p-4 sm:p-8 mb-2">
                <Header
                    title="Get in Touch"
                    description="I'm always interested in hearing about new projects and opportunities. Feel free to reach out using the form below or any of the channels provided."
                />

                <section className="mt-10 grid lg:grid-cols-3 gap-8">
                    {/* LEFT — Info / Socials */}
                    <Card className="lg:col-span-1 border-0 bg-[#0f0f0f] rounded-xl h-fit">
                        <CardContent className="flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Connect With Me</h3>
                                    <p className="text-sm text-[#9f9f9f]">
                                        Feel free to reach out through socials or send a message.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <SocialLink href="https://github.com/shakya77" icon={Github} label="GitHub" />
                                    <SocialLink href="https://linkedin.com/in/bijan-shakya-56b50b2b6/" icon={Linkedin} label="LinkedIn" />
                                    <SocialLink href="https://www.instagram.com/bijan.shakya/" icon={Instagram} label="Instagram" />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#1a1a1a] space-y-3 text-sm text-[#9f9f9f]">
                                <p className="flex items-center gap-2"><Mail size={16} /> bijanshakya145@gmail.com</p>
                                <p className="flex items-center gap-2"><Phone size={16} /> 9842092600</p>
                                <p className="flex items-center gap-2"><MapPin size={16} /> Biratnagar-10, Morang, Nepal</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* RIGHT — Form */}
                    <Card className="lg:col-span-2 border-0 bg-[#0f0f0f] rounded-xl h-full flex">
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Send Me a Message</CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col flex-1">
                            <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first_name" className="text-[#cecece]">First Name</Label>
                                        <Input
                                            id="first_name"
                                            value={data.first_name}
                                            onChange={e => setData('first_name', e.target.value)}
                                            placeholder="Enter your first name"
                                            required
                                            disabled={processing}
                                            className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#666] focus:border-[#eb5d3a] rounded-xl"
                                        />
                                        {errors.first_name && (
                                            <p className="text-sm text-red-400">{errors.first_name}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last_name" className="text-[#cecece]">Last Name</Label>
                                        <Input
                                            id="last_name"
                                            value={data.last_name}
                                            onChange={e => setData('last_name', e.target.value)}
                                            placeholder="Enter your last name"
                                            required
                                            disabled={processing}
                                            className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#666] focus:border-[#eb5d3a] rounded-xl"
                                        />
                                        {errors.last_name && (
                                            <p className="text-sm text-red-400">{errors.last_name}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-[#cecece]">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        placeholder="your.email@example.com"
                                        required
                                        disabled={processing}
                                        className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#666] focus:border-[#eb5d3a] rounded-xl"
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                <div className="space-y-2 flex-1 flex flex-col">
                                    <Label htmlFor="query" className="text-[#cecece]">Message</Label>
                                    <Textarea
                                        id="query"
                                        value={data.query}
                                        onChange={e => setData('query', e.target.value)}
                                        placeholder="Tell me about your project or idea..."
                                        className="flex-1 min-h-40 resize-none bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#666] focus:border-[#eb5d3a] rounded-xl"
                                        required
                                        disabled={processing}
                                    />
                                    {errors.query && (
                                        <p className="text-sm text-red-400">{errors.query}</p>
                                    )}
                                </div>

                                <Button type="submit" size="lg" className="w-full rounded-full mt-auto bg-[#eb5d3a] hover:bg-[#d4512f] text-white transition-all duration-300" disabled={processing}>
                                    {processing ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>

                            <p className="text-xs text-[#666] mt-6 text-center">
                                I usually reply within 24 hours 🚀
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </GuestLayout>
    );
}