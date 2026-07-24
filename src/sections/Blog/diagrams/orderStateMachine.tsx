/**
 * Hand-authored SVG diagrams for the order-state-machine post.
 *
 * Inline SVG rather than a charting library on purpose: no runtime dependency,
 * it renders on the server, and — since it is real text and shapes — it is
 * crawlable. Every diagram scales to its container and scrolls on narrow
 * screens instead of shrinking its text to nothing.
 *
 * Palette matches the site: white nodes and navy text on the water blue, amber
 * for the timeout paths, green for success, red for disputes.
 */
import { ReactNode } from "react";

const NAVY = "#274453";
const AMBER = "#D98A2B";
const AMBER_SOFT = "#F4E4C4";
const GREEN = "#4FA97F";
const RED = "#C96A5E";

type Lines = string[];

function Node({
    x,
    y,
    w = 200,
    h = 84,
    lines,
    accent,
}: {
    x: number;
    y: number;
    w?: number;
    h?: number;
    lines: Lines;
    accent?: string;
}) {
    const cy = y + h / 2;
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
                    fontSize={14.5}
                    fontWeight={700}
                    fill={NAVY}
                >
                    {l}
                </text>
            ))}
        </g>
    );
}

function Chip({
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
    const w = 16 + text.length * 6.9;
    return (
        <g>
            <rect x={cx - w / 2} y={cy - 12} width={w} height={24} rx={12} fill={fill} stroke={NAVY} strokeOpacity={0.1} />
            <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize={12.5} fontWeight={600} fill={color}>
                {text}
            </text>
        </g>
    );
}

function Edge({
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

function Markers({ p }: { p: string }) {
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

function Svg({
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

/** Concept: any state where we wait on a person has exactly three exits. */
export function WaitingStateDiagram() {
    const p = "ws";
    return (
        <Svg w={720} h={330} minW={560} label="A waiting state has three exits: the action, a timeout, or a dispute.">
            <Markers p={p} />
            <Node x={28} y={116} w={210} h={100} lines={["A state where the", "system is waiting", "on a person"]} />

            <Edge d="M238,150 C 360,150 360,72 466,72" color={GREEN} marker={`${p}-green`} />
            <Edge d="M238,166 L 466,166" color={AMBER} marker={`${p}-amber`} />
            <Edge d="M238,182 C 360,182 360,260 466,260" color={RED} marker={`${p}-red`} />

            <Node x={468} y={40} w={224} h={64} accent={GREEN} lines={["The action happens", "→ move to the next state"]} />
            <Node x={468} y={134} w={224} h={64} accent={AMBER} lines={["No one acts in time", "→ the timeout fires"]} />
            <Node x={468} y={228} w={224} h={64} accent={RED} lines={["Something is wrong", "→ open a dispute"]} />
        </Svg>
    );
}

/** The full order lifecycle: happy path down the centre, a timeout off every wait. */
export function OrderLifecycleDiagram() {
    const p = "ol";
    // Centre column, top-to-bottom. Node centre y = y + 42.
    const centre: { y: number; lines: Lines; accent?: string }[] = [
        { y: 24, lines: ["Pending payment"] },
        { y: 162, lines: ["Awaiting seller", "to accept"] },
        { y: 300, lines: ["Awaiting shipment"] },
        { y: 438, lines: ["In transit"] },
        { y: 576, lines: ["Awaiting", "confirmation"] },
        { y: 714, lines: ["Completed"], accent: GREEN },
    ];
    const happy = [
        { y: 135, text: "buyer pays" },
        { y: 273, text: "seller accepts" },
        { y: 411, text: "seller ships" },
        { y: 549, text: "delivered" },
        { y: 687, text: "buyer confirms" },
    ];
    // Terminal (amber) off each waiting state; terminal centre aligns to its source.
    const terminals: { y: number; lines: Lines; edge: string; dashed?: boolean }[] = [
        { y: 34, lines: ["Cancelled"], edge: "no payment" },
        { y: 172, lines: ["Auto-cancelled", "(or seller rejects)"], edge: "no response" },
        { y: 310, lines: ["Refunded"], edge: "not shipped" },
        { y: 448, lines: ["Escalated to us"], edge: "no delivery" },
        { y: 586, lines: ["Auto-confirmed"], edge: "no confirmation", dashed: true },
    ];
    return (
        <Svg w={700} h={840} minW={520} label="The demoda order lifecycle: a happy path down the centre with a timeout branch off every state that waits on a person.">
            <Markers p={p} />

            {/* happy path edges */}
            {centre.slice(0, -1).map((n, i) => (
                <Edge key={i} d={`M250,${n.y + 84} L250,${centre[i + 1].y}`} color="#ffffff" marker={`${p}-navy`} />
            ))}
            {happy.map((c, i) => (
                <Chip key={i} cx={250} cy={c.y} text={c.text} />
            ))}

            {/* timeout edges to terminals */}
            {terminals.map((t, i) => {
                const cy = centre[i].y + 42;
                return (
                    <g key={i}>
                        <Edge d={`M350,${cy} L468,${cy}`} color={AMBER} marker={`${p}-amber`} dashed={t.dashed} />
                        <Chip cx={409} cy={cy} text={t.edge} fill={AMBER_SOFT} />
                    </g>
                );
            })}

            {/* auto-confirm loops back to Completed */}
            <Edge d="M468,618 C 360,660 250,662 250,714" color={AMBER} marker={`${p}-amber`} dashed />

            {/* centre nodes */}
            {centre.map((n, i) => (
                <Node key={i} x={150} y={n.y} w={200} h={84} lines={n.lines} accent={n.accent} />
            ))}
            {/* terminal nodes */}
            {terminals.map((t, i) => (
                <Node key={i} x={468} y={t.y} w={210} h={64} lines={t.lines} accent={AMBER} />
            ))}
        </Svg>
    );
}

/** Why the client is never the source of truth: state changes come from webhooks. */
export function WebhookFlowDiagram() {
    const p = "wh";
    const lane = (x: number, t: string) => (
        <text x={x} y={26} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff" opacity={0.85}>
            {t}
        </text>
    );
    return (
        <Svg w={720} h={300} minW={560} label="The buyer pays MercadoPago; MercadoPago confirms to our backend by webhook, and only then does the order change state. The app never sets it.">
            <Markers p={p} />
            {lane(105, "Buyer")}
            {lane(360, "MercadoPago")}
            {lane(612, "Our backend")}

            {/* row 1: pay */}
            <Node x={35} y={58} w={140} h={58} lines={["Pays in the", "checkout"]} />
            <Node x={290} y={58} w={140} h={58} lines={["Takes the", "payment"]} />
            <Node x={540} y={58} w={150} h={58} lines={["Order still", "“pending”"]} />
            <Edge d="M175,87 L290,87" color={NAVY} marker={`${p}-navy`} />
            <Chip cx={232} cy={87} text="pays" />

            {/* row 2: webhook confirms, backend advances */}
            <Node x={290} y={176} w={140} h={58} lines={["Confirms by", "webhook"]} accent={AMBER} />
            <Node x={540} y={176} w={150} h={58} lines={["Marks it paid", "→ next state"]} accent={GREEN} />
            <Edge d="M360,116 L360,176" color={AMBER} marker={`${p}-amber`} />
            <Edge d="M430,205 L540,205" color={AMBER} marker={`${p}-amber`} />
            <Chip cx={485} cy={205} text="webhook" fill={AMBER_SOFT} />

            {/* the app can't set state */}
            <Edge d="M105,116 C 105,262 470,262 540,234" color={RED} marker={`${p}-red`} dashed />
            <Chip cx={300} cy={262} text="the app can never set this" fill="#F6E0DC" color={RED} />
        </Svg>
    );
}
