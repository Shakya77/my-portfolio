import ClickToAction from '@/components/guest/click-to-action';
import Header from '@/components/guest/header';
import Projects from '@/components/guest/projects';
import GuestLayout from '@/layouts/guest/guest-layout';

export default function Project() {
    return (
        <GuestLayout breadcrumbs="Project">
            <section className="space-y-8">
                {/* Header */}
                <Header title="Projects" description="I'm always looking for new opportunities to collaborate and contribute to exciting projects. Here are some of my recent projects." />

                <Projects />

            </section>
            <ClickToAction className='mt-8' />
        </GuestLayout>
    );
}
