import ClickToAction from '@/components/guest/click-to-action';
import DownloadResume from '@/components/guest/download-resume';
import ProfileCard from '@/components/guest/profile-card';
import Projects from '@/components/guest/projects';
import GuestLayout from '@/layouts/guest/guest-layout';

export default function Welcome() {

    return (
        <GuestLayout breadcrumbs="Welcome">

            <section className="flex flex-col md:flex-row items-stretch gap-6 sm:gap-8">

                {/* LEFT - Profile Card */}
                <ProfileCard />

                {/* RIGHT - Introduction */}
                <div className="w-full md:w-3/5 flex flex-col justify-center p-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Hello there,
                    </h1>

                    <p className="text-base sm:text-lg text-[#9f9f9f] leading-relaxed mb-8">
                        I'm a Web Developer dedicated to crafting clean, efficient code and delivering exceptional user experiences. With expertise in modern web technologies, I specialize in building scalable applications that solve real-world problems.
                    </p>

                    <div className="space-y-4">
                        <div className="border-l-4 border-[#eb5d3a] pl-4 py-2">
                            <h3 className="font-semibold text-white">Explore My Work</h3>
                            <p className="text-[#9f9f9f] text-sm mt-1">Discover my latest projects and technical achievements</p>
                        </div>

                        <div className="border-l-4 border-[#eb5d3a] pl-4 py-2">
                            <h3 className="font-semibold text-white">Experience & Skills</h3>
                            <p className="text-[#9f9f9f] text-sm mt-1">Learn about my background and technical expertise</p>
                        </div>

                        <div className="border-l-4 border-[#eb5d3a] pl-4 py-2">
                            <h3 className="font-semibold text-white">Get in Touch</h3>
                            <p className="text-[#9f9f9f] text-sm mt-1">Open to collaborations, opportunities, and interesting projects</p>
                        </div>

                        <DownloadResume />
                    </div>
                </div>

            </section>

            <Projects className="mt-12" show={true} />

            <ClickToAction className="mt-12" />

        </GuestLayout>
    );
}
