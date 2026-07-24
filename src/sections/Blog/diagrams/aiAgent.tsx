/**
 * Hand-authored SVG diagrams for the "inside a production AI agent" post.
 * Shapes and palette come from ./primitives.
 */
import { AMBER, AMBER_SOFT, Chip, Edge, GREEN, Markers, NAVY, Node, RED, RED_SOFT, Svg } from "./primitives";

/** The gap: a prompt is a straight line; an agent is a governed loop. */
export function DemoVsProductionDiagram() {
    const p = "dp";
    return (
        <Svg
            w={720}
            h={300}
            minW={600}
            label="A demo is a straight line — prompt, model, answer, hope. A production agent is a loop of plan, act and observe, wrapped in budgets and evals, ending in a checked result."
        >
            <Markers p={p} />

            {/* demo row */}
            <text x={40} y={40} fontSize={12} fontWeight={700} fill="#ffffff" opacity={0.75} letterSpacing="0.06em">
                THE DEMO
            </text>
            <Node x={30} y={54} w={120} h={50} lines={["Prompt"]} />
            <Node x={210} y={54} w={120} h={50} lines={["Model"]} />
            <Node x={390} y={54} w={120} h={50} lines={["Answer"]} />
            <Node x={575} y={54} w={120} h={50} lines={["Hope it's right"]} accent={RED} />
            <Edge d="M150,79 L210,79" color={NAVY} marker={`${p}-navy`} />
            <Edge d="M330,79 L390,79" color={NAVY} marker={`${p}-navy`} />
            <Edge d="M510,79 L575,79" color={RED} marker={`${p}-red`} dashed />

            {/* production row */}
            <text x={40} y={170} fontSize={12} fontWeight={700} fill="#ffffff" opacity={0.75} letterSpacing="0.06em">
                PRODUCTION
            </text>
            <Node x={30} y={184} w={110} h={54} lines={["Goal"]} />
            <Node x={200} y={180} w={220} h={62} lines={["Plan · act · observe"]} accent={AMBER} sub={"loops · recovers · stops on budget"} />
            <Node x={480} y={184} w={110} h={54} lines={["Checked", "result"]} accent={GREEN} />
            <Node x={620} y={184} w={72} h={54} lines={["evals"]} accent={GREEN} />
            <Edge d="M140,211 L200,211" color={NAVY} marker={`${p}-navy`} />
            <Edge d="M420,211 L480,211" color={GREEN} marker={`${p}-green`} />
            {/* loop-back arc on the agent node */}
            <Edge d="M235,180 C 250,150 370,150 385,180" color={AMBER} marker={`${p}-amber`} />
            <Edge d="M590,211 L620,211" color={GREEN} marker={`${p}-green`} />
        </Svg>
    );
}

/** The loop itself: plan, act, observe, decide — until done or a budget stops it. */
export function AgentLoopDiagram() {
    const p = "al";
    return (
        <Svg
            w={640}
            h={440}
            minW={560}
            label="The agent loop: a goal enters, then the agent plans a step, calls a tool, observes the result and decides whether it is done. If not, it loops; when done or out of budget, it finishes."
        >
            <Markers p={p} />

            {/* edges (clockwise) */}
            <Edge d="M170,54 L223,58" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M415,72 C 470,102 505,140 522,175" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M505,235 C 470,292 405,320 377,326" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M235,338 C 212,302 202,252 192,210" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M120,175 C 150,112 195,78 223,64" color={AMBER} marker={`${p}-amber`} />
            <Edge d="M105,235 L105,318" color={GREEN} marker={`${p}-green`} />

            <Chip cx={478} cy={120} text="act — call a tool" fill={AMBER_SOFT} />
            <Chip cx={470} cy={300} text="result" />
            <Chip cx={190} cy={116} text="not done → keep going" fill={AMBER_SOFT} />
            <Chip cx={105} cy={278} text="done / budget" fill={AMBER_SOFT} />

            {/* nodes */}
            <Node x={20} y={30} w={150} h={48} lines={["Goal"]} />
            <Node x={225} y={30} w={190} h={60} lines={["Plan the", "next step"]} />
            <Node x={450} y={175} w={170} h={60} lines={["Call a tool"]} accent={AMBER} />
            <Node x={225} y={320} w={190} h={60} lines={["Observe the", "result"]} />
            <Node x={20} y={175} w={170} h={60} lines={["Done?"]} accent={AMBER} />
            <Node x={20} y={320} w={170} h={60} lines={["Finish"]} accent={GREEN} />
        </Svg>
    );
}

/** The five systems that wrap the loop. Drop any one and it is a demo again. */
export function AnatomyDiagram() {
    const p = "an";
    return (
        <Svg
            w={720}
            h={420}
            minW={580}
            label="Five systems around the loop: context feeds it, tools let it act, guardrails bound it, evals judge it — with the model-driven loop at the centre."
        >
            <Markers p={p} />

            {/* connectors from the centre to each system */}
            <Edge d="M350,175 L350,110" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M430,210 L498,210" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M350,245 L350,312" color="#ffffff" marker={`${p}-navy`} />
            <Edge d="M270,210 L202,210" color="#ffffff" marker={`${p}-navy`} />

            {/* centre */}
            <Node x={270} y={175} w={160} h={70} lines={["The loop"]} accent={AMBER} sub={"model + control flow"} />

            {/* four systems */}
            <Node x={252} y={40} w={196} h={68} lines={["Context"]} sub={"retrieval · memory · scope"} />
            <Node x={500} y={175} w={196} h={70} lines={["Tools"]} sub={"typed · scoped · idempotent"} />
            <Node x={252} y={312} w={196} h={68} lines={["Guardrails"]} sub={"budgets · timeouts · approvals"} />
            <Node x={24} y={175} w={196} h={70} lines={["Evals"]} sub={"golden sets · judges · gates"} />
        </Svg>
    );
}
