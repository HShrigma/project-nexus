import reactSvg from '../../assets/react.svg';

export const AppLogo = () => {
    return (
        <div className="flex sm:items-center  gap-2 font-serif text-xl tracking-wide">
            <img 
                className="h-6 w-auto"
                src={reactSvg} 
                alt="React logo"
            />
            Nexus
        </div>
    );
}

export default AppLogo;