import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/guest/header';
import { SocialLink } from '@/components/guest/social-link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import GuestLayout from '@/layouts/guest/guest-layout';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });
    };

    return (
        <GuestLayout breadcrumbs="Contact">
            {/* Page wrapper fills remaining height */}
            <div className="flex flex-col flex-1 min-h-[calc(100vh-200px)] p-8 mb-2">

                <Header
                    title="Get in Touch"
                    description="I'm always interested in hearing about new projects and opportunities. Feel free to reach out using the form below or any of the channels provided."
                />

                {/* Layout */}
                <section className="mt-10 grid lg:grid-cols-3 gap-8">

                    {/* LEFT — Info / Socials */}
                    <Card className="lg:col-span-1 border shadow-sm rounded-2xl h-fit ">
                        <CardContent className=" flex flex-col justify-between space-y-6">

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Connect With Me
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Feel free to reach out through socials or send a message.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <SocialLink href="https://github.com/yourusername" icon={Github} label="GitHub" />
                                    <SocialLink href="https://linkedin.com/in/yourusername" icon={Linkedin} label="LinkedIn" />
                                    <SocialLink href="https://twitter.com/yourusername" icon={Twitter} label="Twitter" />
                                </div>
                            </div>

                            <div className="pt-4 border-t space-y-3 text-sm text-muted-foreground">
                                <p className="flex items-center gap-2">
                                    <Mail size={16} /> bijanshakya145@gmail.com
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone size={16} /> +1 (234) 567-890
                                </p>
                                <p className="flex items-center gap-2">
                                    <MapPin size={16} /> San Francisco, CA
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* RIGHT — Form */}
                    <Card className="lg:col-span-2 border shadow-lg rounded-2xl h-full flex">
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                Send Me a Message
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col flex-1">

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col flex-1 space-y-6"
                            >
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="John"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* textarea grows */}
                                <div className="space-y-2 flex-1 flex flex-col">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or idea..."
                                        className="flex-1 min-h-40 resize-none"
                                    />
                                </div>

                                {/* button sticks bottom */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full rounded-xl mt-auto"
                                >
                                    Send Message
                                </Button>
                            </form>

                            <p className="text-xs text-muted-foreground mt-6 text-center">
                                I usually reply within 24 hours 🚀
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </GuestLayout>
    );
}
