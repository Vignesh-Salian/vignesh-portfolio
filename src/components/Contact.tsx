"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import { sounds } from "@/lib/soundFx";

/* ━━━━━ SVG Icons ━━━━━ */

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    sounds.playClick();
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const isConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== "your_service_id" &&
      templateId !== "your_template_id" &&
      publicKey !== "your_public_key";

    if (!isConfigured) {
      setTimeout(() => {
        setStatus("success");
        sounds.playSuccess();
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          time: new Date().toLocaleString(),
          reply_to: formData.email.trim(),
          to_email: "salianvignesh05@gmail.com",
        },
        publicKey
      );

      setStatus("success");
      sounds.playSuccess();
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try emailing me directly.");
    }
  };

  return (
    <section id="contact" className="min-h-0 lg:min-h-screen flex flex-col justify-center py-6 lg:py-8 border-t border-[#00f0ff]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#00f0ff]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff007f]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono font-bold text-[#00f0ff]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMUNICATION // SQUAD_TERMINAL</span>
            </div>
          </div>
          <h2 className="font-mono font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            ✦ Let&apos;s Work Together
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-[650px] leading-relaxed font-mono">
            Let&apos;s talk about your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#070c18]/95 backdrop-blur-2xl border border-[#00f0ff]/25 shadow-[0_0_25px_rgba(0,0,0,0.6)] h-full flex flex-col justify-between">
              <div>
                <h3 className="font-mono font-bold text-lg sm:text-xl text-white mb-2">
                  Let&apos;s talk about your next project.
                </h3>
                
                <p className="text-xs sm:text-[13px] text-gray-300 font-mono leading-relaxed mb-4">
                  I&apos;m always open to discussing new opportunities, whether it&apos;s an internship, a full-time role, a research collaboration, or a freelance project. Feel free to reach out!
                </p>

                {/* Direct coordinates items */}
                <div className="space-y-3 font-mono">
                  <a
                    href="mailto:salianvignesh05@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/[0.06] hover:border-[#00f0ff]/40 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-gray-400">EMAIL</div>
                      <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#00f0ff] transition-colors truncate block">
                        salianvignesh05@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:+919535299491"
                    className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/[0.06] hover:border-[#ff007f]/40 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#ff007f]/10 border border-[#ff007f]/30 flex items-center justify-center text-[#ff007f] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-gray-400">PHONE</div>
                      <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#ff007f] transition-colors truncate block">
                        +91 95352 99491
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-[#00ffa3]/10 border border-[#00ffa3]/30 flex items-center justify-center text-[#00ffa3] flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-gray-400">LOCATION</div>
                      <span className="text-xs sm:text-[13px] font-bold text-white block">
                        Karnataka, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center gap-2.5">
                <a
                  href="https://github.com/Vignesh-Salian"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 hover:border-[#00f0ff] flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
                >
                  <GithubIcon />
                </a>

                <a
                  href="https://linkedin.com/in/vignesh-n-salian"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 hover:border-[#ff007f] flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
                >
                  <LinkedinIcon />
                </a>

                <a
                  href="mailto:salianvignesh05@gmail.com"
                  aria-label="Email"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 hover:border-[#00ffa3] flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#070c18]/95 backdrop-blur-2xl border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden h-full flex flex-col justify-between">
              {/* Cyber Corner Notches */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff007f] pointer-events-none" />

              <div className="border-b border-white/10 pb-3.5 mb-4">
                <h3 className="text-lg sm:text-xl font-mono font-bold text-white">Send a message</h3>
                <p className="text-xs text-gray-400 font-mono mt-1">
                  I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-3.5 font-mono"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00ffa3]/20 border border-[#00ffa3]/40 text-[#00ffa3] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(0,255,163,0.4)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message sent successfully!</h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-colors cursor-pointer font-bold"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wide"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 h-[46px] rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wide"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. alex@cyberdynamics.io"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 h-[46px] rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wide"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project, idea, or just say hi..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 h-28 sm:h-32 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all text-xs sm:text-sm resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 text-xs text-[#ff007f] bg-[#ff007f]/10 border border-[#ff007f]/20 p-2.5 rounded-lg">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full h-[48px] sm:h-[50px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
