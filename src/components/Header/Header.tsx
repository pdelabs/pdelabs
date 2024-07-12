"use client"
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { Body, Strong, Subtitle } from "../Typography/Typography";
import c from "classnames";
import { MenuIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import useOpenCalendly from "@/hooks/useOpenCalendly";

interface HeaderProps { }


const Header: FC<HeaderProps> = () => {
    const [headerBg, setHeaderBg] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const lastScrollPosition = useRef(0);
    const openCalendly = useOpenCalendly();

    useEffect(() => {
        const handleScroll = () => {
            const isScrollingUp = window.scrollY < lastScrollPosition.current;
            const homeSection = document.getElementById('home');
            if (homeSection!.getBoundingClientRect().height <= window.scrollY) {
                if (isScrollingUp) {
                    setHeaderBg(true);
                } else {
                    setHeaderBg(false);
                }
            } else {
                setHeaderBg(false);
            }

            lastScrollPosition.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCloseMenu = () => {
        setIsActive(false);
    }

    const navbarItems = (
        <>
            <HeaderLink onClick={handleCloseMenu} href="#services" link="Services" />
            <HeaderLink onClick={handleCloseMenu} href="#portfolio" link="Portfolio" />
            <HeaderLink onClick={handleCloseMenu} href="#contact" link="Contact" />
        </>
    );

    const headerStyles = headerBg ? styles.headerWhite : null;

    const handlePressLogo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <header className={c(styles.header, headerStyles)}>
            <div className="flex flex-row justify-between items-center">
                <img className={styles.logo} onClick={handlePressLogo} src="/assets/logo-full.svg" width={150} alt="pdelabs logo" />
            </div>
            <nav className={c(styles.navbar)}>
                {navbarItems}
            </nav>

            <MenuIcon className={styles.burger} onClick={() => setIsActive(s => !s)} />
            <Dialog open={isActive} onOpenChange={setIsActive}>
                <DialogContent className="max-w-screen h-screen" style={{ height: "100%", width: "100%" }}>
                    <DialogHeader>
                        <DialogTitle className="self-center"><Subtitle>Menu</Subtitle></DialogTitle>
                    </DialogHeader>
                    <nav className={styles.navbarMobile}>
                        {navbarItems}
                    </nav>
                </DialogContent>
            </Dialog>
        </header>
    )
}
export default Header;


interface HeaderLinkProps {
    href: string;
    link: string;
    onClick?: () => void;
}

const HeaderLink: FC<HeaderLinkProps> = ({
    href,
    link,
    onClick
}) => {
    return (
        <Link
            href={href}
            className={styles.link}
            prefetch={false}
            onClick={onClick}
        >
            <Body>
                <Strong>
                    {link}
                </Strong>
            </Body>
        </Link>
    );
}