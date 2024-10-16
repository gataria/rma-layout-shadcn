import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AdvisorReview() {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <div className="flex space-x-2 items-center">
                        <Avatar>
                            <AvatarFallback>RU</AvatarFallback>
                        </Avatar>
                        <CardTitle>Review User</CardTitle>
                    </div>
                    <div>
                        October 16, 2024
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                This advisor was pretty good!
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    );
}