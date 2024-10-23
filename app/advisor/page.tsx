import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import AdvisorReview from "@/app/components/review/advisor-review";
/* Icons */
import { FaRegCalendarCheck, FaHandsHelping } from "react-icons/fa";
import { TbMessageCircleHeart } from "react-icons/tb";
import { IoIosWarning } from "react-icons/io";
/* Fonts */
import { spaceMono } from "@/fonts";

export default function AdvisorPage() {
    return (
        <>
            {/* Alert card */}
            <Alert className="bg-amber-200 border-none text-2xl">
                <IoIosWarning />
                <AlertTitle className="font-black">
                    Warning
                </AlertTitle>
                <AlertDescription className="text-lg">
                    This advisor doesn&apos;t have many ratings yet. Evaluate this rating with caution!
                </AlertDescription>
            </Alert>
            {/* Top cards */}
            <div className="flex space-x-4">
                {/* Name and title bar */}
                <div className="flex flex-col grow place-content-center bg-slate-100 rounded-lg p-6">
                    <div className="text-6xl font-black">
                        Advisor Lastname
                    </div>
                    <div className="text-xl font-semibold">
                        Academic advisor, College of Sciences
                    </div>
                </div>
                {/* Score */}
                <div className="flex flex-col items-center place-content-center font-black shadow-good-score rounded-lg p-6">
                    <div className="text-6xl pt-2">
                        4.8
                    </div>
                    <div className="text-2xl text-slate-500">
                        <span className="sr-only">out of</span>
                        <span className="not-sr-only">/ </span>
                        5
                    </div>
                </div>
            </div>
            {/* Category ratings card */}
            <Card>
                <CardHeader>
                    <CardTitle>
                        Category ratings
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-4">
                        <div className="flex flex-1 space-y-1 flex-col grow">
                            <div className="flex space-x-1 items-center font-semibold">
                                <FaRegCalendarCheck />
                                <div>
                                    Responsiveness
                                </div>
                            </div>
                            <Progress value={90} />
                        </div>
                        <div className="flex flex-1 space-y-1 flex-col grow">
                            <div className="flex space-x-1 items-center font-semibold">
                                <FaHandsHelping />
                                <div>
                                    Helpfulness
                                </div>
                            </div>
                            <Progress value={76} />
                        </div>
                        <div className="flex flex-1 space-y-1 flex-col grow">
                            <div className="flex space-x-1 items-center font-semibold">
                                <TbMessageCircleHeart />
                                <div>
                                    Approachability
                                </div>
                            </div>
                            <Progress value={80} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            {/* Reviews card */}
            <Card>
                <CardHeader>
                    <CardTitle>
                        Reviews
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <AdvisorReview />
                    <AdvisorReview />
                    <AdvisorReview />
                </CardContent>
            </Card>
        </>
    );
}