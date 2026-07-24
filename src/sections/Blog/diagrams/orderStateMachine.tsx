/**
 * Hand-authored SVG diagrams for the order-state-machine post.
 *
 * Inline SVG rather than a charting library on purpose: no runtime dependency,
 * it renders on the server, and — since it is real text and shapes — it is
 * crawlable. Every diagram scales to its container and scrolls on narrow
 * screens instead of shrinking its text to nothing.
 *
 * The states and transitions mirror demoda's real OrderStatusEnum:
 *   WAITING_PAYMENT → WAITING_SHIPMENT → SHIPPING          (mailed)
 *   WAITING_PAYMENT → WAITING_PICKUP                       (in person)
 *   … → FULFILLED, plus JUDGING (dispute hold), REFUNDED, CANCELLED.
 *
 * Palette matches the site: white nodes and navy text on the water blue, amber
 * for the timeout/hold paths, green for success, red for disputes and refunds.
 */
import { ReactNode } from "react";

const NAVY = "#274453";
const AMBER = "#D98A2B";
const AMBER_SOFT = "#F4E4C4";
const GREEN = "#4FA97F";
const RED = "#C96A5E";
const RED_SOFT = "#F6E0DC";

type Lines = string[];

function Node({
    x,
    y,
    w = 190,
    h = 62,
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
                    fontSize={14}
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

/** The happy path, which forks by how the buyer chose to receive the item. */
export function HappyPathDiagram() {
    const p = "hp";
    return (
        <Svg
            w={720}
            h={530}
            minW={620}
            label="The happy path forks after payment: a mailed order goes waiting-for-shipment then shipping; an in-person order goes waiting-for-pickup. Both end at fulfilled."
        >
            <Markers p={p} />

            {/* edges */}
            <Edge d="M330,82 C 245,108 163,132 163,166" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M390,82 C 475,108 557,132 557,166" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M163,230 L163,298" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M163,360 C 163,414 250,438 267,449" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M557,230 C 557,414 470,438 453,449" color="#ffffff" marker={`${p}-navy`} />

            <Chip cx={243} cy={120} text="mailed" />
            <Chip cx={477} cy={120} text="in person" />
            <Chip cx={163} cy={264} text="seller ships" />
            <Chip cx={214} cy={402} text="receives · or auto" />
            <Chip cx={506} cy={402} text="picks up · or auto" />

            {/* nodes */}
            <Node x={267} y={20} lines={["Waiting for payment"]} />
            <Node x={70} y={166} lines={["Waiting for", "shipment"]} />
            <Node x={464} y={166} lines={["Waiting for", "pickup"]} />
            <Node x={70} y={298} lines={["Shipping"]} />
            <Node x={267} y={440} lines={["Fulfilled"]} accent={GREEN} />
        </Svg>
    );
}

/** The exceptions: cancellation, seller rejection, and the JUDGING dispute hold. */
export function ExceptionDiagram() {
    const p = "ex";
    return (
        <Svg
            w={760}
            h={392}
            minW={660}
            label="Exceptions: an unpaid order is cancelled; a rejected order is refunded, or held in judging for a bank transfer; a reported problem goes to judging, which resolves to fulfilled for the seller or refunded for the buyer."
        >
            <Markers p={p} />

            {/* payment row */}
            <Edge d="M220,50 L536,50" color={AMBER} marker={`${p}-amber`} />
            <Chip cx={380} cy={50} text="no payment · rejected" fill={AMBER_SOFT} />

            {/* into judging */}
            <Edge d="M212,214 L300,210" color={RED} marker={`${p}-red`} />
            <Chip cx={252} cy={168} text="reports a problem" fill={RED_SOFT} color={RED} />

            {/* seller rejects, straight to refund */}
            <Edge d="M206,238 C 350,348 470,348 556,314" color={RED} marker={`${p}-red`} dashed />
            <Chip cx={362} cy={348} text="seller rejects" fill={RED_SOFT} color={RED} />

            {/* out of judging */}
            <Edge d="M460,200 L556,180" color={GREEN} marker={`${p}-green`} />
            <Chip cx={502} cy={170} text="favours seller" fill={AMBER_SOFT} />

            <Edge d="M460,244 L556,300" color={RED} marker={`${p}-red`} />
            <Chip cx={505} cy={262} text="favours buyer" fill={RED_SOFT} color={RED} />

            {/* nodes */}
            <Node x={40} y={24} w={180} h={52} lines={["Waiting for payment"]} />
            <Node x={540} y={24} w={180} h={52} lines={["Cancelled"]} accent={AMBER} />

            <Node x={40} y={190} w={172} h={64} lines={["An active order", "(any wait above)"]} />
            <Node x={300} y={185} w={160} h={74} lines={["Judging", "(dispute hold)"]} accent={AMBER} />
            <Node x={560} y={150} w={180} h={52} lines={["Fulfilled"]} accent={GREEN} />
            <Node x={560} y={280} w={180} h={52} lines={["Refunded"]} accent={RED} />
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
            <Chip cx={300} cy={262} text="the app can never set this" fill={RED_SOFT} color={RED} />
        </Svg>
    );
}
