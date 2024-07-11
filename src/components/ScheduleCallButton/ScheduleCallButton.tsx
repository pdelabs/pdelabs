"use client"
import { Subtitle } from "@/components/Typography/Typography";
import { CalendarDays } from "lucide-react";
import styles from './ScheduleCallButton.module.css';
import useOpenCalendly from "@/hooks/useOpenCalendly";
import { FC, PropsWithChildren } from "react";

const ScheduleCall: FC<PropsWithChildren> = ({ children = "Schedule a call now" }) => {
    const openCalendly = useOpenCalendly();
    return <Subtitle onClick={openCalendly} className={styles.scheduleCall}>{children}<CalendarDays /></Subtitle>;
}

export default ScheduleCall;