import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import { BigTitle, LargeBody } from "@/components/Typography/Typography";
import styles from "./Home.module.css";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
const Home = () => {
    return (
        <section id="home">
            <SunsetContainer>
                <div className="flex flex-col items-center" style={{ color: 'white' }} >
                    <BigTitle className={styles.bigtitle}>We build AI agents that make it to <br /><span style={{
                        // textShadow: "0 0 1px #fff, 0 0 2px #fff, 0 0 3px #ffd271, 0 0 4px #ffd271, 0 0 5px #ffd271, 0 0 6px #ffd271, 0 0 10px #ffd271"
                    }}>production.</span></BigTitle>
                    <LargeBody className={styles.subtitle}>
                        RAG systems, agentic loops and autonomous agents — engineered, evaluated and shipped.
                        Plus the web, mobile and data work that has to hold them up.
                    </LargeBody>
                    <ScheduleCallButton />
                </div>
            </SunsetContainer>
        </section>

    )
}

export default Home;