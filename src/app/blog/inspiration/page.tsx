"use client"
import Header from "@/components/Header/Header";
import LosDedosFooterContainer from "@/components/LosDedosFooterContainer/LosDedosFooterContainer";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import { TitleAsH1 } from "@/components/Typography/Typography";
import React from "react";
import styled from "styled-components";

const InspirationPage = () => {
  return (
    <>
      <Header />
      <BlogPostContainer>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <TitleAsH1 className="mb-6">Discover Punta del Este</TitleAsH1>

          <p className="text-lg text-neutral-800 dark:text-neutral-200 mb-4">
            At <strong>Punta del Este Labs</strong>, our name isn’t just a title—it’s a tribute to a place that embodies
            everything we stand for. 🌊🌴
          </p>

          <p className="text-lg text-neutral-800 dark:text-neutral-200 mb-4">
            Punta del Este, Uruguay, is known for its stunning beaches, vibrant culture, and serene atmosphere.
            It’s a place where innovation meets tranquility, where the hustle of the tech world can find balance
            in the calm of the ocean waves. Often called the &ldquo;St. Tropez of South America,&rdquo; it blends natural
            beauty with modern sophistication.
          </p>


          <p className="text-lg text-neutral-800 dark:text-neutral-200 mb-4">
            Beyond its scenic charm, Punta del Este is emerging as a growing tech hub, attracting talent and
            investment globally. The city’s peaceful surroundings paired with its tech-forward mindset make it a
            prime location for innovation and creativity.
          </p>

          <p className="text-lg text-neutral-800 dark:text-neutral-200 mb-4">
            Much like the city, <strong>Punta del Este Labs</strong> is about balance. We build innovative,
            high-tech solutions in a space that fosters creativity and clarity. Whether you’re walking its beaches
            or building your next big idea with us, Punta del Este reminds us that great things grow where peace
            and purpose meet.
          </p>

          <p className="text-lg text-neutral-800 dark:text-neutral-200 font-medium mb-8">
            Join us on this journey where nature inspires innovation. 🌟
          </p>

        <div style={{ color: 'white' }}>
          <ScheduleCallButton />
        </div>
        </div>
      </BlogPostContainer>
    </>
  );
};

export default InspirationPage;


const BlogPostContainer = styled.div`
    background-color: #547B96;
    padding: 20px;
`;