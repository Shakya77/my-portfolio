import { Briefcase, GraduationCap } from 'lucide-react';
import ClickToAction from '@/components/guest/click-to-action';
import DownloadResume from '@/components/guest/download-resume';
import { TimelineList } from '@/components/guest/FeatureCard';
import ProfileCard from '@/components/guest/profile-card';
import GuestLayout from '@/layouts/guest/guest-layout';

export interface TimelineItem {
    id: string;
    period: string;
    title: string;
    organization: string;
    description?: string;
}

const experienceData: TimelineItem[] = [
    {
        id: 'exp-2',
        period: '2025 - 2026',
        title: 'CTO and Senior Full Stack Developer',
        organization: 'RATOGURAS TECHNOLOGY PVT. LTD.',
        description: `Developed and maintained enterprise web applications using Laravel, PHP, JavaScript, and MySQL. Built
                        REST APIs, implemented authentication systems, optimized queries, and deployed applications on cPanel
                        servers. Handled bug fixing, performance tuning, and feature enhancements while collaborating in an
                        agile team environment`,
    },
    {
        id: 'exp-3',
        period: '2019 - 2020',
        title: 'Junior Developer',
        organization: 'StartUp Hub',
        description: `Specialize in developing and maintaining robust, scalable web applications using the Laravel framework. Experienced in building dynamic, responsive user interfaces with modern frontend technologies, ensuring clean design and intuitive user experiences. Actively involved in the full software development lifecycle-from system architecture and development to testing, optimization, and deployment-delivering high-performance, maintainable solutions focused on usability and client satisfaction.`,
    },
];

const educationData: TimelineItem[] = [
    {
        id: 'edu-1',
        period: '2022 - Present',
        title: 'Bachelor of Science in Computer Science and Information Technology',
        organization: 'HIMALAYA DARSHAN COLLEGE, TRIBHUVAN UNIVERSITY',
        description: '',
    },
    {
        id: 'edu-2',
        period: '2019 - 2022',
        title: '+2 Science',
        organization: 'Shikshadeep Higher Secondary School, NEB',
        description: '',
    },
];

export default function About() {
    return (
        <GuestLayout breadcrumbs="About">
            <section className="flex flex-col md:flex-row items-stretch gap-6 sm:gap-8">

                {/* LEFT - Profile Card */}
                <ProfileCard />

                {/* RIGHT - Introduction */}
                <div className="w-full md:w-3/5 flex flex-col justify-center p-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        I'm Bijan Shakya, a Web Developer.
                    </h1>

                    <p className="text-justify text-gray-600   leading-relaxed mb-8">
                        I am a passionate and detail-oriented individual with a strong foundation in web development,
                        particularly using Laravel and JavaScript. I have hands-on experience with modern front-end tools like
                        ReactJS, and I enjoy building dynamic, user-friendly web applications. I am always eager to learn new
                        technologies and continuously improve my skills. With a problem-solving mindset, good communication,
                        and a collaborative spirit, I strive to contribute meaningfully to every project I work on.
                    </p>

                    <DownloadResume />
                </div>
            </section>

            {/* Experience Section */}
            <section className="mt-8 border-gray-200  ">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Experience Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                            Experience
                        </h2>
                        <TimelineList items={experienceData} icon={Briefcase} />
                    </div>

                    {/* Education Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                            Education
                        </h2>
                        <TimelineList items={educationData} icon={GraduationCap} />
                    </div>
                </div>
            </section>

            <ClickToAction className='mt-8' />
        </GuestLayout>
    );
}
