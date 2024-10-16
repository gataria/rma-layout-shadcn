import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Toggle } from "@/components/ui/toggle";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";

export default function AdvisorReview() {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <div className="flex space-x-3 items-center">
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
            <CardFooter className="text-sm space-x-2">
                <div>
                    Was this review helpful?
                </div>
                <Toggle>
                    <FaRegThumbsUp />
                </Toggle>
                <Toggle>
                    <FaRegThumbsDown />
                </Toggle>
            </CardFooter>
        </Card>
    );
}