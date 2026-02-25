export const Footer = () => {
    return (
        <footer className="py-6 px-4 my-3">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 border-t-1 border-neutral-400">
                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <a href="#" className="hover:underline">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:underline">
                        Contact Us
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                    © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};