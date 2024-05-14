import React, { useState, useRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import toast from "react-hot-toast";

// service id: service_o2qb4gv
// template id: template_6zly6i8
// public key: S0AiCJBfzi0ahWR9L

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(localStorage.getItem("xcer55sd2"));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("xcer55sd2") !== null) {
      toast(
        `Hi ${localStorage.getItem(
          "xcer55sd2"
        )}, \n\nSamuel will be in touch with you in less than 48 hours depending on his schedules, you can reach him via his phone on his CV. \n\nNo need to send out another email 😊.`,
        {
          icon: "⚠️",
          style: {
            borderRadius: "10px",
            background: "#2f80ed",
            color: "#fff",
          },
        }
      );
    } else {
      emailjs
        .send(
          "service_o2qb4gv",
          "template_6zly6i8",
          {
            from_name: form.name,
            to_name: "Samuel",
            from_email: form.email,
            message: form.message,
            to_email: "samuelemyrs@gmail.com",
          },
          "S0AiCJBfzi0ahWR9L"
        )
        .then(() => {
          setLoading(false);
          toast.success(
            "I just received your email. I will respond ASAP, but not more than 48 hours - IF AM NOT ON LEAVE.",
            {
              icon: "✅",
              style: {
                borderRadius: "10px",
                background: "#2f80ed",
                color: "#fff",
              },
            }
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
          localStorage.setItem("xcer55sd2", form.name);
          setTimeout(() => {
            localStorage.clear();
          }, 180000);
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Ops! Something went wrong.", {
            icon: "❌",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
