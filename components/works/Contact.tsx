import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-contentContainer mx-auto py-10 xl:py-10 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textCyan font-semibold flex items-center tracking-wide">Get in touch</p>
      <h2 className="font-titleFont text-5xl font-semibold">CONTACT</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Have innovative ideas on your mind? Feel free to contact me! Lets bring your innovative ideas to life!
      </p>
      <a href="mailto:arysantonio363@gmail.com">
        <button className="w-40 h-14 border border-textCyan mt-6 font-titleFont text-sm text-textCyan tracking-wider rounded-md hover:bg-hoverColor duration-300">
        ✉ Say Hello!
        </button>
      </a>
      <p className="text-textWhite text-sm font-bodyFont">Built and Designed by <span className="text-textCyan">Doniele Arys Antonio</span></p>
      <p className="text-sm text-textWhite font-bodyFont">All rights reserved. ©</p>
    </section>
  );
};

export default Contact;