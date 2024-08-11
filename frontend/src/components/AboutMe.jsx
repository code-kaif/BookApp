import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className=" absolute top-28 px-4 md:px-52 w-[95vw] h-[100vh] md:h-[60vh]">
        <div className="flex flex-col justify-center items-center space-y-4 md:space-y-10">
          <h1 className="text-4xl md:text-5xl font-semibold">About</h1>
          <p>
            Welcome to BookHeaven, your gateway to a world of stories,
            knowledge, and inspiration. Nestled in the heart of Delhi, our
            bookstore is more than just a place to buy books—it's a community of
            readers, thinkers, and dreamers.
            <br />
            <br />
            Founded in 2024, BookHeaven began with a simple mission: to bring
            the joy of reading to everyone. What started as a small passion
            project has grown into a beloved local hub for book lovers of all
            ages. We believe in the magic of books—the way they can transport
            you to distant lands, introduce you to fascinating characters, and
            open your mind to new ideas.
            <br />
            <br />
            Thank you for supporting independent bookstores and for being a part
            of our story.
            <br />
            Happy Reading!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
