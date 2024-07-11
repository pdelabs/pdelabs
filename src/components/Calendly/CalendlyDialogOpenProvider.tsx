"use client"
import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from "react";

const CalendlyDialogOpenContext = createContext({ isOpen: false, setOpen: (o: boolean) => { }, open: () => { }, close: () => { } });

const CalendlyDialogOpenProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const open = useCallback(() => {
        window?.open("https://calendly.com/lgurmendez-pdelabs", '_blank')?.focus();
    }, []);
    const close = useCallback(() => setOpen(false), [setOpen]);

    return (
        <CalendlyDialogOpenContext.Provider value={{ isOpen, setOpen, open, close }}>
            {children}
        </CalendlyDialogOpenContext.Provider>
    );
}

export function useCalendlyDialogOpen() {
    return useContext(CalendlyDialogOpenContext);
}

export default CalendlyDialogOpenProvider;
