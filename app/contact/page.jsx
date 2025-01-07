"use client";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Text",
    description: "(+1) 206 489 6538",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "him@dominiccobb.ai",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "California, USA",
  },
];

import { motion } from "framer-motion";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  type: "",
  message: "",
  phone: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formReady = useMemo(() => {
    return (
      formData.firstname &&
      formData.lastname &&
      formData.email &&
      formData.type &&
      formData.phone
    );
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!formReady) {
      // TODO: Handle error toasts
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        // TODO: Handle error toasts
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      // TODO: Handle error toasts
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {formSubmitted ? (
              <motion.div
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl h-[60vh]"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0, duration: 0.4, ease: "easeIn" },
                }}
              >
                <h3 className="text-4xl text-accent">Be in touch soon!</h3>
                <p className="text-white/60">
                  Please check your email{" "}
                  <span className="text-accent">{formData.email}</span> for a
                  confirmation and I will get back to you as soon as possible!
                </p>
                <h3 className="text-9xl self-center mt-8">😎</h3>
              </motion.div>
            ) : (
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60">
                  Whether you&apos;re looking to level up an existing project or
                  build the next big thing. I can help!
                </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="firstname"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  <Input
                    type="lastname"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    type="phone"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* select */}
                <Select
                  onValueChange={(value) => {
                    setFormData({ ...formData, type: value });
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="ai">Ai Solutions</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="cloud">Cloud Solutions</SelectItem>
                      <SelectItem value="pen">Pentesting</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textarea */}
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                />
                {/* btn */}
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
              </form>
            )}
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
