import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        Hello there, my name is Hung - 3 years frontend developer who love to design useful, actractive user interface.
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I am a 3 years experience Frontend Web developer and currently i work at Bosch (Engineer).
        <br />
        <br />
        Working in multinational company help me to communicate confidently in English.
        <br />
        <br />
        I love to discuss and sharing. Not only about technical, but also for other aspects of life too.
        <br />
        <br />
        I willing to learn new technology and this also one of my hobby in my free time!
        <br />
        <br />

        {/* At last, Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME.
        </a>{" "}
        We can listen to good POP music together 🎧. */}
      </p>
    </>
  );
};
