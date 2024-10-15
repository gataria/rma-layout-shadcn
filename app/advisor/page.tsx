import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { publicSans } from "@/fonts";

export default function AdvisorPage() {
    return (
        <>
            <div className={`flex ${publicSans.className} font-black text-6xl space-x-4`}>
                <div className="grow bg-slate-100 rounded-lg p-6">
                    Advisor Lastname
                </div>
                <div className=" shadow-good-score rounded-lg p-6">
                    4.8
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Category ratings
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className={`flex space-x-4`}>
                        <Progress value={90} />
                        <Progress value={76} />
                        <Progress value={80} />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Reviews
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* TODO: make a component for an individual review */}
                </CardContent>
            </Card>
        </>
    );
}