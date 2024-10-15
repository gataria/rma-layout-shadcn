export default function AdvisorLayout({
    children
}: {
    children: React.ReactNode;  
}) {
    return (
        <div className="container mx-auto p-4 space-y-4">
            {children}
        </div>
    );
}