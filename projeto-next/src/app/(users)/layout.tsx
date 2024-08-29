'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {name: 'Profile', href: '/profile'},
    {name: 'Config', href: '/config'},
    {name: 'Info', href: '/info'},
];

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                <Link className={`${isActive ? 'text-red-800' : 'text-blue-500'}`} key={link.href} href={link.href}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    );
}