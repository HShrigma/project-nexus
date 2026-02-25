import { Gem } from "lucide-react";

export const AppLogo = () => {
    return (
        <div className="flex sm:items-center  gap-2 font-serif text-xl tracking-wide">
            <Gem className="h-6 w-auto" alt="Nexus logo"/>
            Nexus
        </div>
    );
}

export default AppLogo;