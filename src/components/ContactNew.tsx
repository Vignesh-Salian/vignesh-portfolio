"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  MapPin, 
  MessageSquare, 
  Users, 
  Radio, 
  ShieldCheck, 
  Gamepad2,
  Phone,
  Loader2,
  BookOpen
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { GithubIcon, LinkedinIcon, GoogleScholarIcon } from "@/components/Icons";
import { sounds } from "@/lib/soundFx";

export default function ContactNew() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const emailAddress = "salianvignesh05@gmail.com";
  const altEmail = "vigneshsalian777@gmail.com";

  const copyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast.success("Copied transmission frequency to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      toast.error("Please enter your name/callsign.");
      return;
    }
    if (!trimmedEmail || !/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!trimmedMessage) {
      toast.error("Please enter your message payload.");
      return;
    }

    setIsSubmitting(true);
    sounds.playClick();

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
        setIsSubmitting(false);
        setSubmitted(true);
        sounds.playSuccess();
        toast.success("Signal dispatched successfully! I will respond shortly 🚀");
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          time: new Date().toLocaleString(),
          reply_to: trimmedEmail,
          to_email: "salianvignesh05@gmail.com",
        },
        publicKey
      );
      setSubmitted(true);
      sounds.playSuccess();
      toast.success("Signal dispatched successfully! I will respond shortly 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message via EmailJS:", error);
      toast.error("Transmission failed. Please try emailing directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-[#00f0ff]/20 relative">
      <div id="multiplayer" className="absolute -top-20" />
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00f0ff]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff007f]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono font-bold text-[#00f0ff]">
            <Users className="w-3.5 h-3.5" />
            <span>COMMUNICATION_TERMINAL // SQUAD_COMMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-mono">
            Transmit Signal &amp; Join Guild
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-mono">
            Open for high-impact AI research collaborations, software engineering leadership, and visionary system builds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Comms Channel Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Squad Status Card */}
            <div className="p-6 rounded-3xl bg-[#070c18]/90 border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#00ffa3] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white">SQUAD_STATUS</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#00ffa3]/20 border border-[#00ffa3]/30 text-[#00ffa3]">
                  LOBBY OPEN
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <span className="text-gray-400">ROLE_AVAILABILITY</span>
                  <span className="text-[#00f0ff] font-bold">FULL-TIME &amp; RESEARCH</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <span className="text-gray-400">TIMEZONE / SERVER</span>
                  <span className="text-gray-200">IST // GLOBAL REMOTE</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Coordinates */}
            <div className="p-6 rounded-3xl bg-[#070c18]/90 border border-[#00f0ff]/20 backdrop-blur-xl space-y-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] font-mono">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Direct Coordinates
              </div>

              {/* Primary Email */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-gray-400">PRIMARY TRANSMISSION</div>
                  <a href={`mailto:${emailAddress}`} className="text-xs font-bold text-white hover:text-[#00f0ff] transition-colors truncate block">
                    {emailAddress}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-[#8a2be2]/15 border border-[#8a2be2]/30 flex items-center justify-center text-[#c084fc] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-gray-400">VOICE FREQUENCY</div>
                  <a href="tel:+919535299491" className="text-xs font-bold text-white hover:text-[#c084fc] transition-colors truncate block">
                    +91 95352 99491
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-[#00ffa3]/10 border border-[#00ffa3]/30 flex items-center justify-center text-[#00ffa3] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-gray-400">BASE LOCATION</div>
                  <span className="text-xs font-bold text-white block">
                    Karnataka, India (Global Remote)
                  </span>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                onMouseEnter={() => sounds.playHover()}
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-[#00f0ff]/15 border border-white/10 hover:border-[#00f0ff]/40 text-xs font-mono text-gray-200 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#00ffa3]" />
                    <span className="text-[#00ffa3] font-bold">Frequency Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#00f0ff]" />
                    <span>COPY FREQUENCY ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* External Networks */}
            <div className="p-6 rounded-3xl bg-[#070c18]/90 border border-white/[0.08] backdrop-blur-xl space-y-3 font-mono">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                Cybernetic Uplinks
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href="https://github.com/Vignesh-Salian"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="p-3 rounded-2xl bg-black/40 hover:bg-[#00f0ff]/10 border border-white/[0.06] hover:border-[#00f0ff]/30 flex flex-col items-center justify-center text-center text-gray-300 hover:text-white transition-all group"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5 text-[#00f0ff] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/vignesh-n-salian"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="p-3 rounded-2xl bg-black/40 hover:bg-[#ff007f]/10 border border-white/[0.06] hover:border-[#ff007f]/30 flex flex-col items-center justify-center text-center text-gray-300 hover:text-white transition-all group"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#ff007f] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold">LinkedIn</span>
                </a>

                <a
                  href="https://scholar.google.com/scholar?q=Vignesh+N+Salian"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="p-3 rounded-2xl bg-black/40 hover:bg-[#00ffa3]/10 border border-white/[0.06] hover:border-[#00ffa3]/30 flex flex-col items-center justify-center text-center text-gray-300 hover:text-white transition-all group"
                  title="Google Scholar Publications"
                >
                  <GoogleScholarIcon className="w-5 h-5 text-[#00ffa3] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold">Scholar</span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Message Transmission Terminal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#070c18]/90 border border-[#00f0ff]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] backdrop-blur-xl space-y-6 relative overflow-hidden">
              {/* Cyber Corner Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ff007f] pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
                  <h3 className="text-lg font-bold text-white font-mono">Direct Transmission Terminal</h3>
                </div>
                <span className="text-xs font-mono text-[#00ffa3] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> SECURE_ENCRYPTION
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00ffa3]/20 border border-[#00ffa3]/40 text-[#00ffa3] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,163,0.4)]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-mono">TRANSMISSION DELIVERED</h4>
                  <p className="text-sm text-gray-300 max-w-sm mx-auto font-mono">
                    Thank you for establishing comms. I will process your signal and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-[#00f0ff] hover:bg-[#00f0ff]/10"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300">PLAYER_HANDLE / NAME</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f0ff] focus:outline-none text-sm text-white placeholder-gray-600 transition-colors font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300">RETURN_FREQUENCY / EMAIL</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@cyberdynamics.io"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f0ff] focus:outline-none text-sm text-white placeholder-gray-600 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300">TRANSMISSION_PAYLOAD / MESSAGE</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vignesh, let's collaborate on building..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f0ff] focus:outline-none text-sm text-white placeholder-gray-600 transition-colors resize-none font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => sounds.playHover()}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] hover:opacity-95 text-white font-bold font-mono text-sm shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,127,0.6)] hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>DISPATCHING SIGNAL...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT MESSAGE SIGNAL</span>
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
