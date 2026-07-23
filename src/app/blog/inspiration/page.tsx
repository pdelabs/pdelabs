import { FC, PropsWithChildren } from "react";
import Header from "@/components/Header/Header";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import Waves from "@/components/SunsetContainer/Waves/Waves";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import { BigTitle, Body, LargeBody, SmallBody, Strong, Subtitle } from "@/components/Typography/Typography";
import { articleJsonLd } from "@/seo";
import styles from "./page.module.css";

const PUBLISHED = "2024-08-01";

const InspirationPage = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <section id="post-hero">
        <SunsetContainer>
          <div className="flex flex-col items-center" style={{ color: "white" }}>
            <BigTitle className={styles.title}>Why we&rsquo;re Punta del Este Labs</BigTitle>
            <LargeBody className={styles.dek}>
              A software studio named after a beach town. Here&rsquo;s what that has to do with how we build.
            </LargeBody>
          </div>
        </SunsetContainer>
      </section>

      <WaterSection>
        <article className={styles.article}>
          <SmallBody className={styles.byline}>By Punta del Este Labs&nbsp;·&nbsp;4 min read</SmallBody>

          <Body className={styles.p}>
            Most software companies are named after an abstraction &mdash; a Latin root, a coined word that
            happened to clear a trademark search. We named ours after a place you can stand in.
          </Body>

          <Body className={styles.p}>
            Punta del Este sits on the southern coast of Uruguay, where the Río de la Plata meets the Atlantic.
            On its most famous beach, a giant hand rises out of the sand &mdash; <em>Los&nbsp;Dedos</em>, &ldquo;the
            fingers.&rdquo; It&rsquo;s where our address points, and it&rsquo;s a fitting emblem for the work: something
            built with enough care that people travel to see it.
          </Body>

          <Body className={styles.p}>
            But a name is only worth defending if it means something past the postcard. So here is what Punta del
            Este actually has to do with how we build software.
          </Body>

          <Subtitle className={styles.h}>The same hours as you</Subtitle>
          <Body className={styles.p}>
            Uruguay runs on GMT-3. On the US East Coast, we share most of your working day; in Europe, we overlap
            your whole morning. That is not a small thing &mdash; it is the difference between a question answered in
            ten minutes and a question that costs you a day. We are a <Strong>nearshore</Strong> team, not an
            offshore one: you talk to the people writing your code, while they are awake.
          </Body>

          <Subtitle className={styles.h}>A small country that takes this seriously</Subtitle>
          <Body className={styles.p}>
            Uruguay is the most stable country in Latin America &mdash; first in the region on the Democracy Index,
            on rule of law, and on low corruption. Its tech sector is what the industry calls a{" "}
            <Strong>craft market</Strong>: a small talent pool, but unusually high quality and low turnover.
            Engineers here stay on a product for years, not months, and English proficiency is among the strongest
            in the region. None of that is scenery. It is why the work holds up after we hand it over.
          </Body>

          <Subtitle className={styles.h}>Balance &mdash; the useful kind</Subtitle>
          <Body className={styles.p}>
            The easy version of this story is that the beach makes us calm and calm makes us creative. That is not
            it. What the place actually teaches is that you can move fast without living in a permanent emergency
            &mdash; that a team which isn&rsquo;t burned out ships better software, for longer. We build that way on
            purpose: careful where it counts, quick where it doesn&rsquo;t, and honest with you about which is which.
          </Body>

          <Body className={styles.p}>
            So: Punta del Este Labs. A studio that works the way its home does &mdash; steady, close, and built to
            last longer than a launch.
          </Body>

          <div className={styles.cta}>
            <Body className={styles.ctaLine}>
              If that&rsquo;s the kind of team you want on your next project, let&rsquo;s talk.
            </Body>
            <ScheduleCallButton />
          </div>
        </article>
        <Waves />
      </WaterSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              slug: "/blog/inspiration",
              headline: "Why We Are Called Punta del Este Labs",
              description:
                "The story behind pdelabs — and why building from Punta del Este, Uruguay, means a nearshore team in your timezone, from a low-attrition craft market.",
              datePublished: PUBLISHED,
            })
          ),
        }}
      />
    </main>
  );
};

export default InspirationPage;

const WaterSection: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col items-center relative bg-[#547B96] pb-24">{children}</div>
);
