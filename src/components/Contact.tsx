import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

import { trackEvent, trackOutboundLink } from '../utils/analytics';

const quickInquiries = [
  'Full-Time Role',
  'Internship / 2027 Graduate Role',
  'Schedule Technical Interview',
  'General Collaboration',
];

export const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const isLight = currentTheme === 'white';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-Time Role',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Track Analytics Event
    trackEvent('generate_lead', {
      event_category: 'Contact Form',
      inquiry_type: formData.inquiryType,
    });

    const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_ACTION_URL;
    const entryName = import.meta.env.VITE_GOOGLE_FORM_ENTRY_NAME;
    const entryEmail = import.meta.env.VITE_GOOGLE_FORM_ENTRY_EMAIL;
    const entryInquiryType = import.meta.env.VITE_GOOGLE_FORM_ENTRY_INQUIRY_TYPE;
    const entryMessage = import.meta.env.VITE_GOOGLE_FORM_ENTRY_MESSAGE;

    if (googleFormUrl && entryName && entryEmail && entryMessage) {
      // Direct submission to Google Forms via no-cors POST request
      const formPayload = new URLSearchParams();
      formPayload.append(entryName, formData.name);
      formPayload.append(entryEmail, formData.email);
      if (entryInquiryType) {
        formPayload.append(entryInquiryType, formData.inquiryType);
      }
      formPayload.append(entryMessage, formData.message);

      try {
        await fetch(googleFormUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formPayload.toString(),
        });
      } catch (err) {
        console.error('Google Form submission notice:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', inquiryType: 'Full-Time Role', message: '' });
      setTimeout(() => setIsSuccess(false), 7000);
    } else {
      // Fallback mailto dispatch if Google Form env vars are not yet configured
      const subject = encodeURIComponent(`[${formData.inquiryType}] Inbound inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
      );

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        window.open(`mailto:${personalInfo.socials.email}?subject=${subject}&body=${body}`, '_blank');
        setFormData({ name: '', email: '', inquiryType: 'Full-Time Role', message: '' });
        setTimeout(() => setIsSuccess(false), 7000);
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-16 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-3 ${
              isLight ? 'bg-[#EFF6FF] border-[#BFDBFE] text-blue-600' : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH DIRECTLY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-[#0F172A]' : 'text-white'
            }`}
          >
            Let's Discuss Opportunities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={`text-sm sm:text-base mt-2 max-w-2xl leading-relaxed ${
              isLight ? 'text-[#475569]' : 'text-slate-400'
            }`}
          >
            Recruiters, engineering managers, and technical founders: I am a final-year student open to internships and 2027 graduate software engineering roles.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className={`rounded-2xl p-5 sm:p-8 space-y-6 shadow-xl transition-all ${
              isLight ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)]' : 'bg-slate-900/80 border border-slate-800 backdrop-blur-md'
            }`}>
              <div className="space-y-1">
                <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                  isLight ? 'text-blue-600' : 'text-blue-400'
                }`}>
                  Fast Response Channels
                </span>
                <h3 className={`text-xl font-bold ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                  Direct Recruiter & Hiring Contact
                </h3>
              </div>

              {/* Direct links */}
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${personalInfo.socials.email}?subject=Interview%20Inquiry%20for%20Vasudevan%20R`}
                  className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all group ${
                    isLight
                      ? 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-blue-300 hover:bg-[#F1F5F9]'
                      : 'bg-slate-800/40 border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform ${
                    isLight
                      ? 'bg-[#EFF6FF] border border-[#BFDBFE] text-blue-600'
                      : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Official Email</div>
                    <div className={`text-sm font-semibold transition-colors truncate ${
                      isLight ? 'text-[#0F172A] group-hover:text-blue-600' : 'text-slate-200 group-hover:text-blue-300'
                    }`}>
                      {personalInfo.socials.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all group ${
                    isLight
                      ? 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-emerald-300 hover:bg-[#F1F5F9]'
                      : 'bg-slate-800/40 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform ${
                    isLight
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-600'
                      : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                  }`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Direct Phone</div>
                    <div className={`text-sm font-semibold transition-colors ${
                      isLight ? 'text-[#0F172A] group-hover:text-emerald-600' : 'text-slate-200 group-hover:text-emerald-300'
                    }`}>
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919787260711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all group ${
                    isLight
                      ? 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-emerald-300 hover:bg-[#F1F5F9]'
                      : 'bg-slate-800/40 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform ${
                    isLight
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-600'
                      : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                  }`}>
                    <WhatsAppIcon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>WhatsApp Message</div>
                    <div className={`text-sm font-semibold transition-colors ${
                      isLight ? 'text-[#0F172A] group-hover:text-emerald-600' : 'text-slate-200 group-hover:text-emerald-300'
                    }`}>
                      +91 97872 60711
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundLink(personalInfo.socials.linkedin, 'LinkedIn')}
                  className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all group ${
                    isLight
                      ? 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-indigo-300 hover:bg-[#F1F5F9]'
                      : 'bg-slate-800/40 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/80'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform ${
                    isLight
                      ? 'bg-indigo-50 border border-indigo-200 text-indigo-600'
                      : 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400'
                  }`}>
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>LinkedIn Network</div>
                    <div className={`text-sm font-semibold transition-colors truncate ${
                      isLight ? 'text-[#0F172A] group-hover:text-indigo-600' : 'text-slate-200 group-hover:text-indigo-300'
                    }`}>
                      linkedin.com/in/vasudevan-r-870a8a2a7
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundLink(personalInfo.socials.github, 'GitHub')}
                  className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all group ${
                    isLight
                      ? 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-slate-400 hover:bg-[#F1F5F9]'
                      : 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform ${
                    isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-slate-300'
                  }`}>
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>GitHub Profile</div>
                    <div className={`text-sm font-semibold transition-colors truncate ${
                      isLight ? 'text-[#0F172A] group-hover:text-blue-600' : 'text-slate-200 group-hover:text-white'
                    }`}>
                      github.com/Vasu-1001
                    </div>
                  </div>
                </a>
              </div>

              {/* Badges */}
              <div className={`pt-4 border-t flex flex-col gap-2.5 text-xs font-mono ${
                isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800/80 text-slate-400'
              }`}>
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
                  <span>Coimbatore, Tamil Nadu (Open to Relocation / Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} />
                  <span>Typical Response: Within 24–48 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Recruiter Message Dispatch */}
          <div className="lg:col-span-7">
            <div className={`rounded-2xl p-5 sm:p-9 shadow-xl text-left transition-all ${
              isLight ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)]' : 'bg-slate-900/80 border border-slate-800 backdrop-blur-md'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-bold ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                  Send Direct Inquiry
                </h3>
                <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Inquiries
                </span>
              </div>

              {/* Quick Inquiry Pills */}
              <div className="mb-5">
                <span className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                  isLight ? 'text-[#64748B]' : 'text-slate-400'
                }`}>
                  Inquiry Nature:
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickInquiries.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, inquiryType: type })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        formData.inquiryType === type
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : (isLight
                              ? 'bg-[#F8FAFC] border border-[#CBD5E1] text-[#475569] hover:bg-white hover:text-[#0F172A]'
                              : 'bg-slate-800/80 border border-slate-700 text-slate-300 hover:border-slate-600')
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                      isLight ? 'text-[#475569]' : 'text-slate-400'
                    }`}
                  >
                    Your Name / Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Vasudevan R (Tech Lead / Talent Partner)"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-white text-[#0F172A] placeholder-[#94A3B8] ' + (errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100')
                        : 'bg-slate-800/50 text-slate-100 placeholder-slate-500 ' + (errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-slate-700/80 focus:border-blue-500')
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                      isLight ? 'text-[#475569]' : 'text-slate-400'
                    }`}
                  >
                    Official Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="vasudevann.dev@gmail.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-white text-[#0F172A] placeholder-[#94A3B8] ' + (errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100')
                        : 'bg-slate-800/50 text-slate-100 placeholder-slate-500 ' + (errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-slate-700/80 focus:border-blue-500')
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                      isLight ? 'text-[#475569]' : 'text-slate-400'
                    }`}
                  >
                    Inquiry Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder={`Hello Vasudevan, we are looking for a ${formData.inquiryType} and would like to review your profile or schedule a discussion...`}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                      isLight
                        ? 'bg-white text-[#0F172A] placeholder-[#94A3B8] ' + (errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100')
                        : 'bg-slate-800/50 text-slate-100 placeholder-slate-500 ' + (errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-slate-700/80 focus:border-blue-500')
                    }`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md cursor-pointer ${
                      isLight
                        ? 'bg-[#2563EB] hover:bg-blue-700 disabled:bg-blue-300 text-white shadow-blue-500/20'
                        : 'bg-white hover:bg-slate-100 disabled:bg-slate-700 text-slate-950'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className={`w-4 h-4 border-2 ${isLight ? 'border-white' : 'border-slate-950'} border-t-transparent rounded-full animate-spin`} />
                        <span>Dispatching inquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Success Banner */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`p-4 rounded-xl border flex items-center gap-3 text-xs font-medium ${
                        isLight
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                          : 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>
                        Inquiry prepared! Your default mail client has opened. I will review and reply within 12–24 hours.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
