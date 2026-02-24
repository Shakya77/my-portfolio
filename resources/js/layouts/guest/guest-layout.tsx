import { Head } from "@inertiajs/react";
import { Toaster } from "sonner";
import Footer from "@/components/guest/footer";
import Navbar from "@/components/guest/navbar";

export default function GuestLayout({
    children,
    breadcrumbs,
}: { children: React.ReactNode, breadcrumbs?: string }) {
    return (
        <>
            <Head title={breadcrumbs}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=poppins:400,500,600,700"
                    rel="stylesheet"
                />
                <meta name="csrf-token" content={document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')} />
            </Head>
            <Navbar />
            <main className="flex mt-8 justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl">
                    {children}
                </div>
            </main>

            <Footer />
            <Toaster
                position="top-right"
                richColors
                closeButton
                theme="dark"
            />
        </>
    );
}
