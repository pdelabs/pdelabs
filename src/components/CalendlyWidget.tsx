"use client";
import React, { FC } from "react";
import { useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useCalendlyDialogOpen } from "./Calendly/CalendlyDialogOpenProvider";
import { Subtitle } from "./Typography/Typography";

const CalendlyCalendar = () => {
    const { toast } = useToast();
    const { isOpen, setOpen } = useCalendlyDialogOpen()

    const handleEventscheduled = () => {
        setOpen(false);
        setTimeout(() => {
            toast({
                title: "See you then!",
            })
        }, 1000)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle><Subtitle>Let&apos;s talk</Subtitle></DialogTitle>
                    <CalendlyTrigger onEventScheduled={handleEventscheduled} />
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};


export default CalendlyCalendar;


interface CalendlyTriggerProps {
    onEventScheduled: () => void;
}

const CalendlyTrigger: FC<CalendlyTriggerProps> = ({ onEventScheduled }) => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head!.appendChild(script);
    }, []);

    useEffect(() => {
        function isCalendlyEvent(e: any) {
            return e.data.event &&
                e.data.event.indexOf('calendly') === 0;
        };

        function handleCalendlyEvent(e: any) {
            if (isCalendlyEvent(e)) {
                console.log(e.data);
                if (e.data.event === 'calendly.event_scheduled') {
                    onEventScheduled()
                }
            }
        }

        window.addEventListener(
            'message',
            handleCalendlyEvent
        );

        return () => {
            window.removeEventListener(
                'message',
                handleCalendlyEvent
            );
        }
    }, [])

    return <div
        className="calendly-inline-widget"
        data-resize="true"
        style={{ maxHeight: "75vh", height: "75vh", minHeight: "75vh" }}
        data-url={'https://calendly.com/luisgurmendez/30min'}
    ></div>;
}
