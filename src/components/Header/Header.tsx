"use client"
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Body, Strong, Subtitle } from "../Typography/Typography";
import c from "classnames";
import { CalendarDays, MenuIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useCalendlyDialogOpen } from "../Calendly/CalendlyDialogOpenProvider";

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
    const [headerBg, setHeaderBg] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { open: openCalendly } = useCalendlyDialogOpen();

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection!.getBoundingClientRect().height <= window.scrollY) {
                setHeaderBg(true);
            } else {
                setHeaderBg(false);
            }
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
            <HeaderLink onClick={handleCloseMenu} href="#about-us" link="About us" />
            <HeaderLink onClick={handleCloseMenu} href="#portfolio" link="Portfolio" />
            <Body className={c(styles.callus, styles.link)} onClick={openCalendly}><Strong>Contact</Strong></Body>
        </>
    );

    return (
        <header className={c(styles.header, headerBg ? styles.headerWhite : null)}>
            <div className="flex flex-row justify-between items-center">
                <img className={styles.logo} src="/assets/logo-full.svg" width={150} alt="pdelabs logo" />
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