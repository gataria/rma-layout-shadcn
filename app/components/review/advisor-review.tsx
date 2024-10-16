import {
    Card,
    CardContent,
    CardDescription,
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
                            <AvatarFallback>4.8</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Student</CardTitle>
                            <CardDescription>Computer Science | Class of 2025</CardDescription>
                        </div>
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