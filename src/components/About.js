import React from "react";

export default function About(props) {
  return (
    <div>
      <main
        className={`px-3 text-${props.mode === "light" ? "dark" : "light"}`}
      >
        <h1>About TextUtils</h1>
        <p
          className={`lead bg-${
            props.mode === "light" ? "primary" : "dark"
          } text-light py-3 px-4 my-4 form-control-plaintext`}
        >
          Introducing TextUtils, an innovative React web app designed to
          revolutionize the way you analyze and interact with text. With an
          array of powerful features, TextUtils empowers you to gain deeper
          insights and enhance your text processing capabilities. Let's explore
          the exciting features that TextUtils has to offer:
          <br />
          <br /> 1) Word Count: Discover the exact number of words in your text.
          Whether you're crafting an essay, analyzing a document, or simply
          curious about the word count, TextUtils provides you with an accurate
          tally.
          <br />
          <br /> 2) Character Count: Uncover the number of characters in your
          text with ease. By knowing the precise character count, you can better
          understand the length and complexity of your content.
          <br />
          <br /> 3) Convert to Uppercase: Seamlessly transform your text into
          uppercase letters. With just a click, you can instantly modify the
          case of your text, allowing for better readability or stylistic
          choices.
          <br />
          <br /> 4) Convert to Lowercase: Effortlessly switch your text to
          lowercase. Lowercasing your text can be useful when you want to
          maintain consistency or adhere to specific writing conventions.
          <br />
          <br /> 5) Copy to Clipboard: Simplify the process of sharing or
          reusing your text. TextUtils equips you with a convenient
          copy-to-clipboard feature, enabling you to effortlessly save and
          transport your text wherever you need it.
          <br />
          <br /> 6) Average Reading Time: Gauge the average time it takes to
          read your text. This feature provides you with valuable insights,
          especially when crafting content for presentations, articles, or blog
          posts.
        </p>
        <p className="lead">
          <button className="btn btn-primary mx-1">Learn More</button>
        </p>
      </main>
    </div>
  );
}
