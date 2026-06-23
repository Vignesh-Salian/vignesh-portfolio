"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// Custom GitHub SVG Icon
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// Custom LinkedIn SVG Icon
const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

// Custom Google Scholar SVG Icon
const GoogleScholarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 7.5L12 13L21.25 8.375V15.5H23V7.5L12 2M12 14.75C8.875 14.75 6.25 12.125 6.25 9V11.25C6.25 14.375 8.875 17 12 17S17.75 14.375 17.75 11.25V9C17.75 12.125 15.125 14.75 12 14.75Z" />
  </svg>
);



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Spam protection
    if (isSubmitting) return;
    
    // 2. Trim all values
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // 3. Client-side input validation
    if (!trimmedName) {
      toast.error("Please enter your name.");
      return;
    }
    if (!trimmedEmail || !/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!trimmedMessage) {
      toast.error("Please enter your message.");
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS keys are configured (fallback to simulation for dev testing)
    const isConfigured = 
      serviceId && 
      templateId && 
      publicKey && 
      serviceId !== "your_service_id" && 
      templateId !== "your_template_id" && 
      publicKey !== "your_public_key";

    if (!isConfigured) {
      // Simulate API request for developer testability
      setTimeout(() => {
        console.log("EmailJS is not configured. Simulating email send:", {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          time: new Date().toLocaleString(),
          reply_to: trimmedEmail,
        });
        setIsSubmitting(false);
        toast.success("Thanks for reaching out! I'll get back to you soon 🚀");
        setFormData({ name: "", email: "", message: "" });
      }, 1200);
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
      
      toast.success("Thanks for reaching out! I'll get back to you soon 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message via EmailJS:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5 relative">
      <div className="absolute top-[20%] right-0 w-[40%] h-[30%] bg-purple-500/5 blur-[150px] pointer-events-none" />

      {/* Section Title */}
      <div className="flex items-center gap-2 mb-10">
        <Sparkles className="w-5 h-5 text-purple-400" />
        <h2 className="font-space font-bold text-2xl sm:text-3xl text-white tracking-wide">
          Let&apos;s Work Together
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side: Contact Details */}
        <div className="lg:col-span-5 flex">
          <div className="glass-panel p-8 rounded-2xl w-full flex flex-col justify-between relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">Get in touch</span>
              <h3 className="text-xl font-space font-bold text-white mb-4">
                Let&apos;s talk about your next project.
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8 font-medium">
                I&apos;m currently open to internships, research collaborations, freelance projects, and full-time opportunities. If you have an idea, project, or research initiative you&apos;d like to discuss, feel free to reach out.
              </p>

              {/* Direct Details */}
              <div className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 group-hover:border-purple-500/30 flex items-center justify-center text-purple-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">Email me</span>
                    <a href="mailto:salianvignesh05@gmail.com" className="text-xs sm:text-sm text-gray-300 font-semibold hover:text-white transition">
                      salianvignesh05@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 group-hover:border-blue-500/30 flex items-center justify-center text-blue-400 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">Call me</span>
                    <a href="tel:+919535299491" className="text-xs sm:text-sm text-gray-300 font-semibold hover:text-white transition">
                      +91 95352 99491
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 group-hover:border-cyan-500/30 flex items-center justify-center text-cyan-400 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">Location</span>
                    <span className="text-xs sm:text-sm text-gray-300 font-semibold">
                      Karnataka, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Envelope visual indicator */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center relative min-h-[140px]">
              {/* Spinning/Orbiting ring */}
              <div className="absolute w-[160px] h-[70px] border border-purple-500/20 rounded-full rotate-[-15deg] animate-pulse-slow" />
              <div className="absolute w-[180px] h-[80px] border border-blue-500/10 rounded-full rotate-[15deg] animate-pulse-slow" style={{ animationDelay: '2s' }} />

              {/* Envelope Core Visual */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 p-5 rounded-2xl bg-gradient-to-br from-purple-600/40 to-blue-600/40 backdrop-blur-md border border-purple-400/40 shadow-2xl shadow-purple-500/20 text-white flex items-center justify-center"
              >
                <svg className="w-10 h-10 drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side: Form & Social Links */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
            <div className="mb-6">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">Send a message</span>
              <h3 className="text-xl font-space font-bold text-white">
                I&apos;d love to hear from you.
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow justify-between">
              <div className="flex flex-col gap-6 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Vignesh N Salian"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass-input p-3.5 text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="salianvignesh05@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass-input p-3.5 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 flex-grow">
                  <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Hi Vignesh, I'd love to discuss a project, research collaboration, or software opportunity."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="glass-input p-3.5 text-sm resize-none flex-grow min-h-[150px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 border border-purple-500/30 text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] disabled:opacity-50 disabled:cursor-not-allowed mt-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Social Links Sub-Card */}
          <div className="glass-panel p-6 rounded-2xl bg-white/[0.01] border border-white/[0.05] relative overflow-hidden flex flex-col gap-4">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(168,85,247,0.04),transparent)] pointer-events-none" />
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block relative z-10">Academic & Professional Networks</span>
            
            <div className="flex flex-wrap gap-4 relative z-10">
              {/* GitHub */}
              <motion.a 
                href="https://github.com/Vignesh-Salian" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/40 hover:bg-purple-500/5 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a 
                href="https://linkedin.com/in/vignesh-n-salian" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/40 hover:bg-blue-500/5 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </motion.a>

              {/* Email */}
              <motion.a 
                href="mailto:salianvignesh05@gmail.com" 
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/40 hover:bg-purple-500/5 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>

              {/* Google Scholar */}
              <motion.a 
                href="https://scholar.google.com/scholar?q=Vignesh+N+Salian" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-400/40 hover:bg-blue-400/5 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                title="Google Scholar Search"
              >
                <GoogleScholarIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
