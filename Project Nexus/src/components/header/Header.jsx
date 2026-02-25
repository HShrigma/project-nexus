import { useState } from "react";
import { MenuIcon, ShoppingCart, User } from 'lucide-react';
import AppLogo from "./AppLogo";
import HeaderNavigation from "./HeaderNavigation";
import HeaderNavItem from "./HeaderNavItem";

export const Header = ({ categories, onCategorySelected, selectedCategory }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 px-6">
            <div className="flex h-20 items-center justify-between">
                {/* Hamburger for mobile */}
                <div 
                    className="sm:hidden cursor-pointer hover:scale-105 transition"
                    onClick={() => setMobileMenuOpen(prev => !prev)}
                >
                    <MenuIcon />
                </div>

                <AppLogo />
                {/* Desktop nav */}
                <HeaderNavigation
                    categories={categories}
                    onCategorySelected={(category) => onCategorySelected?.(category)}
                    selectedCategory={selectedCategory}
                />

                {/* User + Cart icons */}
                <div className="flex items-center gap-2">
                    <div className="group flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100 hover:shadow-2xs hover:cursor-pointer">
                        <User size={20} className="text-neutral-700 transition group-hover:text-black" />
                    </div>
                    <div className="group flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100 hover:shadow-2xs hover:cursor-pointer">
                        <ShoppingCart size={20} className="text-neutral-700 transition group-hover:text-black" />
                    </div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {mobileMenuOpen && (
                <div className="sm:hidden flex flex-col">
                    <div className="flex text-base font-light items-center">
                        <p>Categories</p>
                    </div>
                    <div className="flex flex-col bg-white border-t border-neutral-200 shadow-md">
                        {categories.map(item => (
                        <HeaderNavItem
                            key={item.id}
                            label={item.name}
                            selected={selectedCategory?.name === item.name}
                            onCategorySelected={(label) => {
                                onCategorySelected?.(label);
                                setMobileMenuOpen(false); // close menu on selection
                            }}
                        />
                    ))}
                    </div>
                    
                </div>
            )}
        </header>
    );
}

export default Header;