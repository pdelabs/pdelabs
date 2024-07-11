"use client"
import { Subtitle } from "@/components/Typography/Typography";
import { CalendarDays } from "lucide-react";
import styles from './ScheduleCall.module.css';
import useOpenCalendly from "@/hooks/useOpenCalendly";

const ScheduleCall = () => {
    const openCalendly = useOpenCalendly();
    return <Subtitle onClick={openCalendly} className={styles.scheduleCall}>Schedule a call now!<CalendarDays /></Subtitle>;
}

export default ScheduleCall;