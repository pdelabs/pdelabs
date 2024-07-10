import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import { BigTitle, LargeBody, Strong } from "@/components/Typography/Typography";
import ScheduleCall from "@/sections/Home/ScheduleCall";
import styles from "./Home.module.css";
const Home = () => {
    return (
        <section id="home">
            <SunsetContainer>
                <div className="flex flex-col items-center" style={{ color: 'white' }} >
                    <BigTitle className={styles.bigtitle}>Crafting exceptional software solutions to help your business <br /><span style={{
                        // textShadow: "0 0 1px #fff, 0 0 2px #fff, 0 0 3px #ffd271, 0 0 4px #ffd271, 0 0 5px #ffd271, 0 0 6px #ffd271, 0 0 10px #ffd271"
                    }}>shine.</span></BigTitle>
                    <ScheduleCall />
                </div>
            </SunsetContainer>
        </section>

    )
}

export default Home;