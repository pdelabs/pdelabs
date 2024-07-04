"use client"
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

const CalendlyDialogOpenContext = createContext({ isOpen: false, setOpen: (o: boolean) => { } });

const CalendlyDialogOpenProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <CalendlyDialogOpenContext.Provider value={{ isOpen, setOpen }}>
            {children}
        </CalendlyDialogOpenContext.Provider>
    );
}

export function useCalendlyDialogOpen() {
    return useContext(CalendlyDialogOpenContext);
}

export default CalendlyDialogOpenProvider;
