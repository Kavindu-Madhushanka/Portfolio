import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactCard from "./ContactCard";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm("service_20sx5sp", "template_9372ymq", form.current, {
        publicKey: "dcYzS-N8-iLaBsMsn",
      })
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("ERROR:", error);
        setStatus("❌ Failed to send message");
      });
  };

  return (
    <section id="contact" className="px-6 py-20 mx-auto scroll-mt-24 max-w-7xl">
      <div className="grid gap-12 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <h2 className="mb-4 text-4xl font-bold">Contact.</h2>
          <p className="mb-8 leading-7 text-gray-400">
            Have a project in mind or want to work together? Feel free to reach
            out. I’m always open to new opportunities.
          </p>

          <div className="space-y-4">
            <ContactCard
              title="Email"
              value="madu10275@gmail.com"
              icon={<MdEmail />}
            />
            <ContactCard
              title="GitHub"
              value="https://github.com/Kavindu-Madhushanka"
              icon={<FaGithub />}
            />
            <ContactCard
              title="LinkedIn"
              value="https://www.linkedin.com/in/kavindu-madushankha/"
              icon={<FaLinkedin />}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#0d1a34] border border-white/10 rounded-2xl p-6 shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full bg-[#08142b] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full bg-[#08142b] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-[#08142b] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              className="w-full bg-[#08142b] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 font-medium transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>

            {/* STATUS MESSAGE */}
            {status && <p className="text-sm text-gray-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
