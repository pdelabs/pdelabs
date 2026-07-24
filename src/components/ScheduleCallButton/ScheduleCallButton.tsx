"use client"
import { Subtitle } from "@/components/Typography/Typography";
import { CalendarDays } from "lucide-react";
import styles from './ScheduleCallButton.module.css';
import useOpenCalendly from "@/hooks/useOpenCalendly";
import { FC, PropsWithChildren } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const ScheduleCall: FC<PropsWithChildren> = ({ children }) => {
    const openCalendly = useOpenCalendly();
    const { t } = useI18n();
    return <Subtitle onClick={openCalendly} className={styles.scheduleCall}>{children ?? t("buttons.scheduleCall")}<CalendarDays /></Subtitle>;
}

export default ScheduleCall;