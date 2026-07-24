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
import { useI18n } from "@/i18n/I18nProvider";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";

interface HeaderProps { }


const Header: FC<HeaderProps> = () => {
    const [headerBg, setHeaderBg] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const lastScrollPosition = useRef(0);
    const openCalendly = useOpenCalendly();
    const { t } = useI18n();

    useEffect(() => {
        const handleScroll = () => {
            const isScrollingUp = window.scrollY < lastScrollPosition.current;
            // Every page opens on a full-height sunset hero, but each one names it
            // differently — and a page with no hero at all still has to scroll.
            const heroSection = document.querySelector('#home, [id$="-hero"]');
            const heroHeight = heroSection?.getBoundingClientRect().height ?? window.innerHeight;
            if (heroHeight <= window.scrollY) {
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
            {/* Root-relative so the nav still works from /ai and other pages. */}
            <HeaderLink onClick={handleCloseMenu} href="/#services" link={t("nav.services")} />
            {/* Lands past the hero, on the capability grid. */}
            <HeaderLink onClick={handleCloseMenu} href="/ai#what-we-build" link={t("nav.ai")} />
            <HeaderLink onClick={handleCloseMenu} href="/#portfolio" link={t("nav.portfolio")} />
            <HeaderLink onClick={handleCloseMenu} href="/blog" link={t("nav.blog")} />
            <HeaderLink onClick={handleCloseMenu} href="/#contact" link={t("nav.contact")} />
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
                <LanguageSelector className={styles.langSelector} />
            </nav>

            <MenuIcon className={styles.burger} onClick={() => setIsActive(s => !s)} />
            <Dialog open={isActive} onOpenChange={setIsActive}>
                <DialogContent className="max-w-screen h-screen" style={{ height: "100%", width: "100%" }}>
                    <DialogHeader>
                        <DialogTitle className="self-center"><Subtitle>Menu</Subtitle></DialogTitle>
                    </DialogHeader>
                    <nav className={styles.navbarMobile}>
                        {navbarItems}
                        <LanguageSelector className={styles.langSelectorMobile} />
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