import { useCallback } from "react";

function useOpenCalendly() {
    const open = useCallback(() => {
        window?.open("https://calendly.com/lgurmendez-pdelabs", '_blank')?.focus();
    }, []);

    return open;
}

export default useOpenCalendly;