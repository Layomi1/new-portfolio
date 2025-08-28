import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mldbazgv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setInfo({
            name: "",
            email: "",
            message: "",
          });
          setSubmitSuccess(false);
        }, 3000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 md:px-8 lg:px-24 py-16 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to contact
          me. I'm always open to new opportunities.
        </p>
      </div>
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6 mx-auto ">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <Link
                  to="mailto:layomilawore@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  layomilawore@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex space-x-4 items-start">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="pt-8 mx-auto ">
            <h4 className="font-medium mb-4">Connect with me</h4>
            <div className="flex space-x-2">
              <Link
                to="https://linkedin.com/in/agnesoluwalayomilawore"
                target="_blank"
                className="p-2 hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin />
              </Link>
              <Link
                to="https://x.com/iamlayomi1"
                target="_blank"
                className="p-2 hover:text-primary transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-2">
          <h4 className="text-2xl font-semibold mb-6">Send a Message</h4>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={info.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                  placeholder="Layomi Lawore..."
                  required
                />
              </label>
              <label htmlFor="email" className="block text-sm font-medium">
                Your Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={info.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                  placeholder="layomi@outlook.com"
                  required
                />
              </label>
            </div>
            <label htmlFor="message" className="block text-sm font-medium">
              Your Message
              <textarea
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary mt-2 resize-none min-h-32"
                name="message"
                id="message"
                value={info.message}
                onChange={handleChange}
                placeholder="I'd like to talk about..."
                required
              ></textarea>
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2",
                isSubmitting && "opacity-70 cursor-not-allowed"
              )}
            >
              {isSubmitting
                ? "Sending..."
                : submitSuccess
                ? "Message Sent!"
                : "Send Message"}
              {!isSubmitting && !submitSuccess && <Send size={20} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
