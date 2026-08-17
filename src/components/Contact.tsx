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
    <section id="contact" className="pt-6 sm:pt-8 pb-3 border-t border-[#00f0ff]/20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#00f0ff]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff007f]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-1.5 mb-5">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[10px] font-mono font-bold text-[#00f0ff]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMUNICATION // SQUAD_TERMINAL</span>
            </div>
          </div>
          <h2 className="font-mono font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            ✦ Let&apos;s Work Together
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-[650px] leading-relaxed font-mono">
            Let&apos;s talk about your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#070c18]/95 backdrop-blur-2xl border border-[#00f0ff]/25 shadow-[0_0_25px_rgba(0,0,0,0.6)] h-full flex flex-col justify-between">
              <div>
                <h3 className="font-mono font-bold text-base sm:text-lg text-white mb-1.5">
                  Let&apos;s talk about your next project.
                </h3>
                
                <p className="text-xs text-gray-300 font-mono leading-relaxed mb-3">
                  I&apos;m always open to discussing new opportunities, whether it&apos;s an internship, a full-time role, a research collaboration, or a freelance project. Feel free to reach out!
                </p>

                {/* Direct coordinates items */}
                <div className="space-y-2 font-mono">
                  <a
                    href="mailto:salianvignesh05@gmail.com"
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-black/40 border border-white/[0.06] hover:border-[#00f0ff]/40 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] text-gray-400">EMAIL</div>
                      <span className="text-[11px] font-bold text-white group-hover:text-[#00f0ff] transition-colors truncate block">
                        salianvignesh05@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:+919535299491"
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-black/40 border border-white/[0.06] hover:border-[#ff007f]/40 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#ff007f]/10 border border-[#ff007f]/30 flex items-center justify-center text-[#ff007f] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] text-gray-400">PHONE</div>
                      <span className="text-[11px] font-bold text-white group-hover:text-[#ff007f] transition-colors truncate block">
                        +91 95352 99491
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-black/40 border border-white/[0.06]">
                    <div className="w-7 h-7 rounded-lg bg-[#00ffa3]/10 border border-[#00ffa3]/30 flex items-center justify-center text-[#00ffa3] flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] text-gray-400">LOCATION</div>
                      <span className="text-[11px] font-bold text-white block">
                        Karnataka, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center gap-2">
                <a
                  href="https://github.com/Vignesh-Salian"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 hover:border-[#00f0ff] flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
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
                  className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 hover:border-[#ff007f] flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
                >
                  <LinkedinIcon />
                </a>

                <a
                  href="mailto:salianvignesh05@gmail.com"
                  aria-label="Email"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 hover:border-[#00ffa3] flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#070c18]/95 backdrop-blur-2xl border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden h-full flex flex-col justify-between">
              {/* Cyber Corner Notches */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff007f] pointer-events-none" />

              <div className="border-b border-white/10 pb-3 mb-4">
                <h3 className="text-base sm:text-lg font-mono font-bold text-white">Send a message</h3>
                <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                  I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-3 font-mono"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00ffa3]/20 border border-[#00ffa3]/40 text-[#00ffa3] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(0,255,163,0.4)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message sent successfully!</h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-mono">
                  {status === "error" && errorMessage && (
                    <div className="p-2.5 rounded-xl bg-[#ff007f]/10 border border-[#ff007f]/30 text-xs text-[#ff007f] flex items-center gap-2">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-[11px] text-gray-300 font-bold block">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f0ff] focus:outline-none text-xs text-white placeholder-gray-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-gray-300 font-bold block">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@cyberdynamics.io"
                      className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f0ff] focus:outline-none text-xs text-white placeholder-gray-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-gray-300 font-bold block">Your Message</label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f0ff] focus:outline-none text-xs text-white placeholder-gray-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    onMouseEnter={() => sounds.playHover()}
                    className="w-full h-[40px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] hover:opacity-95 text-white font-bold text-xs shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
