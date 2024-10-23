import { spaceMono } from "@/fonts";

export default function LogoLarge() {
    return (
        <div className={`${spaceMono.className} text-6xl font-bold italic leading-none`}>
            <span className="text-window-green">&ndash; </span>
            <span className="text-window-white">&ndash; </span>
            <span className="text-window-maroon">&ndash; </span>
            <span className="text-window-navy">&ndash; </span>
            <span className="text-window-yellow">&ndash; </span>
            <span className="text-window-red">&ndash; </span>
            <span className="text-window-green">&ndash; </span>
            <span className="text-window-white">&ndash;</span>
            <br />
            Rate My Advisor
        </div>
    );
}