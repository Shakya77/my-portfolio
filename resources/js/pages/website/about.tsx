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
        id: 'exp-1',
        period: '2022 - Present',
        title: 'Senior Software Engineer',
        organization: 'Tech Company Inc.',
        description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and conducting code reviews.',
    },
    {
        id: 'exp-2',
        period: '2020 - 2022',
        title: 'Frontend Developer',
        organization: 'Digital Solutions Ltd.',
        description: 'Developed responsive user interfaces using React and Tailwind CSS. Improved application performance by 40%.',
    },
    {
        id: 'exp-3',
        period: '2019 - 2020',
        title: 'Junior Developer',
        organization: 'StartUp Hub',
        description: 'Started career building web applications with JavaScript and PHP. Learned best practices in web development.',
    },
];

const educationData: TimelineItem[] = [
    {
        id: 'edu-1',
        period: '2019 - 2021',
        title: 'Master of Science in Computer Science',
        organization: 'University of Technology',
        description: 'Specialized in web development and cloud computing. GPA: 3.8/4.0',
    },
    {
        id: 'edu-2',
        period: '2015 - 2019',
        title: 'Bachelor of Science in Information Technology',
        organization: 'National University',
        description: 'Foundation in computer science fundamentals and software development. GPA: 3.7/4.0',
    },
];

export default function About() {
    return (
        <GuestLayout breadcrumbs="About">
            <section className="flex flex-col md:flex-row items-stretch gap-8">

                {/* LEFT - Profile Card */}
                <ProfileCard />

                {/* RIGHT - Introduction */}
                <div className="w-full md:w-3/5 flex flex-col justify-center p-4">
                    <h1 className="text-5xl font-bold text-gray-900   mb-6">
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
                        <h2 className="text-3xl font-bold text-gray-900   mb-8">
                            Experience
                        </h2>
                        <TimelineList items={experienceData} icon={Briefcase} />
                    </div>

                    {/* Education Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900   mb-8">
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
