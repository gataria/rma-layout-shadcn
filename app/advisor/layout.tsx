import { publicSans } from "@/fonts";

export default function AdvisorLayout({
    children
}: {
    children: React.ReactNode;  
}) {
    return (
        <div className={`container ${publicSans.className} mx-auto p-4 space-y-4`}>
            {children}
        </div>
    );
}