"use client"
import { Subtitle } from "@/components/Typography/Typography";
import { CalendarDays } from "lucide-react";
import styles from './ScheduleCall.module.css';
import { useCalendlyDialogOpen } from "@/components/Calendly/CalendlyDialogOpenProvider";

const ScheduleCall = () => {
    const { open: openCalendly } = useCalendlyDialogOpen();
    return <Subtitle onClick={openCalendly} className={styles.scheduleCall}>Schedule a call now!<CalendarDays /></Subtitle>;
}

export default ScheduleCall;