/**
 * Shared SVG primitives for the blog diagrams.
 *
 * Inline SVG rather than a charting library: no runtime dependency, renders on
 * the server, and is crawlable text. Every diagram scales to its container and
 * scrolls on narrow screens instead of shrinking its labels to nothing.
 *
 * Palette matches the site: white nodes and navy text on the water blue, amber
 * for hold/timeout paths, green for success, red for problems.
 */
import { ReactNode } from "react";

export const NAVY = "#274453";
export const AMBER = "#D98A2B";
export const AMBER_SOFT = "#F4E4C4";
export const GREEN = "#4FA97F";
export const RED = "#C96A5E";
export const RED_SOFT = "#F6E0DC";

export type Lines = string[];

export function Node({
    x,
    y,
    w = 190,
    h = 62,
    lines,
    accent,
    sub,
}: {
    x: number;
    y: number;
    w?: number;
    h?: number;
    lines: Lines;
    accent?: string;
    /** Optional muted second-line detail rendered under the main label. */
    sub?: string;
}) {
    const cy = y + h / 2 - (sub ? 8 : 0);
    const start = cy - (lines.length - 1) * 9;
    return (
        <g>
            <rect x={x} y={y} width={w} height={h} rx={12} fill="#ffffff" stroke={NAVY} strokeOpacity={0.12} />
            {accent && <rect x={x} y={y} width={6} height={h} rx={3} fill={accent} />}
            {lines.map((l, i) => (
                <text
                    key={i}
                    x={x + w / 2 + (accent ? 3 : 0)}
                    y={start + i * 18}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={14}
                    fontWeight={700}
                    fill={NAVY}
                >
                    {l}
                </text>
            ))}
            {sub && (
                <text
                    x={x + w / 2 + (accent ? 3 : 0)}
                    y={y + h - 15}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={11}
                    fontWeight={500}
                    fill={NAVY}
                    opacity={0.6}
                >
                    {sub}
                </text>
            )}
        </g>
    );
}

export function Chip({
    cx,
    cy,
    text,
    fill = "#ffffff",
    color = NAVY,
}: {
    cx: number;
    cy: number;
    text: string;
    fill?: string;
    color?: string;
}) {
    const w = 16 + text.length * 6.7;
    return (
        <g>
            <rect x={cx - w / 2} y={cy - 12} width={w} height={24} rx={12} fill={fill} stroke={NAVY} strokeOpacity={0.1} />
            <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight={600} fill={color}>
                {text}
            </text>
        </g>
    );
}

export function Edge({
    d,
    color,
    marker,
    dashed,
}: {
    d: string;
    color: string;
    marker: string;
    dashed?: boolean;
}) {
    return (
        <path
            d={d}
            fill="none"
            stroke={color}
            strokeWidth={2.25}
            strokeLinecap="round"
            markerEnd={`url(#${marker})`}
            strokeDasharray={dashed ? "7 6" : undefined}
        />
    );
}

export function Markers({ p }: { p: string }) {
    const arrow = (id: string, color: string) => (
        <marker
            id={`${p}-${id}`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
        >
            <path d="M0,0 L10,5 L0,10 z" fill={color} />
        </marker>
    );
    return (
        <defs>
            {arrow("navy", NAVY)}
            {arrow("amber", AMBER)}
            {arrow("green", GREEN)}
            {arrow("red", RED)}
        </defs>
    );
}

export function Svg({
    w,
    h,
    minW,
    label,
    children,
}: {
    w: number;
    h: number;
    minW: number;
    label: string;
    children: ReactNode;
}) {
    return (
        <svg
            viewBox={`0 0 ${w} ${h}`}
            role="img"
            aria-label={label}
            style={{ width: "100%", minWidth: minW, height: "auto", display: "block", fontFamily: "inherit" }}
        >
            <title>{label}</title>
            {children}
        </svg>
    );
}
