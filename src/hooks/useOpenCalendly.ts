import { useCallback } from "react";
import { track } from '@vercel/analytics';

function useOpenCalendly() {
    const open = useCallback(() => {
        track('schedule_call', {
            vendor: 'calendly'
        });
        window?.open("https://calendly.com/lgurmendez-pdelabs", '_blank')?.focus();
    }, []);

    return open;
}

export default useOpenCalendly;