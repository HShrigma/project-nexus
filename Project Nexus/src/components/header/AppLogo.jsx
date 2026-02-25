import { Gem } from "lucide-react";

export const AppLogo = () => {
    return (
        <div className="flex sm:items-center  gap-1 font-serif text-xl tracking-wide">
            <Gem className="h-5 w-auto" alt="Nexus logo" />
            Nexus
        </div>
    );
}

export default AppLogo;