"use client";

import React from "react";
import { motion } from "motion/react";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-[#C6A87D] flex flex-col overflow-hidden pt-32">
       {/* Background decorative elements (optional, to match home vibe if needed) */}
       
       <div className="flex-grow px-4 md:px-16 w-full max-w-[1400px] mx-auto mb-20">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                {/* Left: Title */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/3"
                >
                    <h1 className="font-elegance text-2xl md:text-4xl lg:text-5xl leading-tight text-[#C6A87D]">
                        Let’s Discuss <br />
                        The Upcoming <br />
                        Projects
                    </h1>
                </motion.div>

                {/* Right: Description */}
                <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-full max-w-2xl text-white/90 font-neue-montreal text-base md:text-lg leading-relaxed text-justify lg:mt-4"
                >
                    <p>
                        For years we have worked with organizations around Saudi Arabia. We are proud of the work we have done, and the unique depth of knowledge it has allowed us to build. Are Delivered By Seasoned Professionals With Extensive Industry Expertise, Each Specializing In Focused Functional Areas. Committed To Delivering High-Quality Services That Understand Our Clients’ Needs, Contribute To The Sustainable And Innovative Success Of Their Projects.
                    </p>
                </motion.div>
            </div>

            {/* Contact Form Section */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full bg-white text-black p-8 md:p-12"
            >
                <form className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* First Name */}
                        <div className="flex flex-col gap-2">
                             <label className="text-xs uppercase tracking-widest font-bold text-gray-800">
                                 FIRST NAME
                             </label>
                             <input 
                                type="text" 
                                className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#C6A87D] transition-colors bg-transparent"
                             />
                        </div>
                        {/* Last Name */}
                         <div className="flex flex-col gap-2">
                             <label className="text-xs uppercase tracking-widest font-bold text-gray-800">
                                 LAST NAME
                             </label>
                             <input 
                                type="text" 
                                className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#C6A87D] transition-colors bg-transparent"
                             />
                        </div>
                        {/* Telephone */}
                         <div className="flex flex-col gap-2">
                             <label className="text-xs uppercase tracking-widest font-bold text-gray-800">
                                 TELEPHONE
                             </label>
                             <input 
                                type="tel" 
                                className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#C6A87D] transition-colors bg-transparent"
                             />
                        </div>
                        {/* Email */}
                         <div className="flex flex-col gap-2">
                             <label className="text-xs uppercase tracking-widest font-bold text-gray-800">
                                 EMAIL
                             </label>
                             <input 
                                type="email" 
                                className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#C6A87D] transition-colors bg-transparent"
                             />
                        </div>
                    </div>

                    {/* Message */}
                     <div className="flex flex-col gap-2 mt-4">
                             <label className="text-xs uppercase tracking-widest font-bold text-gray-800">
                                 MESSAGE
                             </label>
                             <textarea 
                                rows={6}
                                className="border border-gray-300 p-4 focus:outline-none focus:border-[#C6A87D] transition-colors bg-transparent resize-none"
                             />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className="w-full bg-[#C6A87D] text-black font-bold uppercase tracking-widest py-4 hover:bg-[#b09265] transition-colors mt-4"
                    >
                        SEND INQUIRY
                    </button>

                </form>
            </motion.div>
       </div>

       <Footer />
    </main>
  );
}
