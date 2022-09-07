import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-[#E0E1E4]"
    >
      <form
        method="POST"
        action="https://getform.io/f/1a25583f-a432-4849-8f24-8e533f2b2157"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl md:text-6xl font-giaza font-bold inline border-b-4  border-slate-600">
            Contact
          </p>
          <p className="py-4 mt-4 font-poppins">
            Fill out the form below or send me an email at{" "}
            <span className="underline">adamtchoi@gmail.com</span>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-md"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-md"
          name="message"
          placeholder="Message"
          rows="10"
        />
        <button className="rounded-md mt-6 font-poppins border-2 group px-6 py-3 my-2 flex items-center justify-center border-slate-800 hover:bg-[#6b7185] hover:text-[white] text-center">
          <p className="text-center">Submit</p>
        </button>
      </form>
    </div>
  );
};

export default Contact;
