import { Download } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

export default function DownloadResume() {

    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        try {
            setLoading(true);

            const res = await fetch("/bijan-shakya-resume.pdf");
            const blob = await res.blob();

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Bijan-Shakya-Resume.pdf";
            a.click();

            window.URL.revokeObjectURL(url);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handleDownload}
            disabled={loading}
            variant="outline"
            size="lg"
            className="w-44"
        >
            {loading ? (
                <Spinner data-icon="inline-start" />
            ) : (
                <Download size={16} />
            )}
            {loading ? "Downloading..." : "Download Resume"}
        </Button>
    )
}
