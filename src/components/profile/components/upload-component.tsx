"use client";

import React, { useState } from "react";
import { Upload, Check, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "motion/react";
import { useTranslations } from "next-intl";

type UploadBoxProps = {
  label: string;
};

// Enhanced animation variants with more dynamic motion
const containerVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

const iconVariants = {
  initial: { scale: 0.8, opacity: 0, rotateY: 40 },
  animate: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
  },
  hover: {
    scale: 1.1,
    y: -3,
  },
  drag: {
    scale: 1.15,
    y: -5,
    rotate: [0, -3, 3, -2, 0],
  },
  success: {
    scale: [1, 1.2, 1],
    borderRadius: ["50%", "35%", "50%"],
  },
  error: {
    x: [0, -3, 3, -3, 3, 0],
  },
};

// Particle component for success animation
const Particle = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-linear-to-r from-[#f9c39d] to-[#f9a56a]"
      initial={{
        opacity: 1,
        scale: 0,
        x: 0,
        y: 0,
      }}
      animate={{
        opacity: [1, 0.8, 0],
        scale: [0, 1, 0.8],
        x: [
          0,
          (index % 2 === 0 ? -1 : 1) *
            (10 + Math.random() * 20) *
            Math.cos(index),
        ],
        y: [0, -25 - Math.random() * 15],
      }}
      transition={{
        duration: 0.8 + Math.random() * 0.3,
        ease: "easeOut",
        delay: index * 0.05,
      }}
    />
  );
};

const UploadBox = ({ label }: UploadBoxProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const t = useTranslations("profile");
  const [showParticles, setShowParticles] = useState(false);
  const controls = useAnimation();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      processUpload();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      processUpload();
    }
  };

  const processUpload = () => {
    setUploadStatus("uploading");

    // Simulate progress
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for demo
      setUploadStatus(success ? "success" : "error");
      if (success) {
        controls.start({
          borderColor: ["#f9c39d", "#22c55e", "#f9c39d"],
          boxShadow: [
            "0 0 0px rgba(249, 195, 157, 0.3)",
            "0 0 15px rgba(34, 197, 94, 0.5)",
            "0 0 5px rgba(249, 195, 157, 0.3)",
          ],
          transition: { duration: 1 },
        });
        setShowParticles(true);
        setTimeout(() => setShowParticles(false), 1200);
      } else {
        controls.start({
          borderColor: ["#f9c39d", "#ef4444", "#f9c39d"],
          boxShadow: [
            "0 0 0px rgba(249, 195, 157, 0.3)",
            "0 0 15px rgba(239, 68, 68, 0.5)",
            "0 0 5px rgba(249, 195, 157, 0.3)",
          ],
          transition: { duration: 1 },
        });
      }
    }, 1500);
  };

  return (
    <motion.div
      className="flex flex-col items-center h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut", // Custom spring-like easing
      }}
    >
      <motion.label
        className={`w-full h-full min-h-[100px] sm:min-h-[120px] border ${
          isDragging ? "border-[#f9c39d]" : "border-[#f9c39d]/60"
        } rounded-xl flex flex-col items-center justify-center mb-2 cursor-pointer bg-black/30 backdrop-blur-sm overflow-hidden relative`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        whileHover={{
          borderColor: "#f9c39d",
          boxShadow: "0 0 15px 0 rgba(249, 195, 157, 0.4)",
          scale: 1.01,
        }}
        animate={controls}
        initial={{
          borderColor: "rgba(249, 195, 157, 0.6)",
          boxShadow: "0 0 0 0 rgba(249, 195, 157, 0)",
          scale: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {/* Background glow effect when dragging */}
        <AnimatePresence>
          {isDragging && (
            <motion.div
              className="absolute inset-0 bg-linear-to-tr from-[#f9c39d]/20 via-[#f9c39d]/5 to-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                background: [
                  "linear-gradient(to top right, rgba(249, 195, 157, 0.2), rgba(249, 195, 157, 0.05), transparent)",
                  "linear-gradient(to bottom right, rgba(249, 195, 157, 0.2), rgba(249, 195, 157, 0.05), transparent)",
                  "linear-gradient(to top right, rgba(249, 195, 157, 0.2), rgba(249, 195, 157, 0.05), transparent)",
                ],
              }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                background: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          )}
        </AnimatePresence>

        {/* Success particles */}
        <AnimatePresence>
          {showParticles && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <Particle key={i} index={i} />
              ))}
            </div>
          )}
        </AnimatePresence>

        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
        />

        <AnimatePresence mode="wait">
          {file ? (
            <motion.div
              key="file-preview"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.04,
              }}
              className="flex flex-col items-center justify-center p-2 sm:p-4 text-center relative"
            >
              <motion.div
                className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 ${
                  uploadStatus === "success"
                    ? "bg-green-500/20"
                    : uploadStatus === "error"
                      ? "bg-red-500/20"
                      : uploadStatus === "uploading"
                        ? "bg-[#f9c39d]/30"
                        : "bg-[#f9c39d]/20"
                }`}
                variants={iconVariants}
                animate={
                  uploadStatus === "success"
                    ? "success"
                    : uploadStatus === "error"
                      ? "error"
                      : "animate"
                }
                transition={{
                  type:
                    uploadStatus === "success" || uploadStatus === "error"
                      ? "tween"
                      : "spring",
                  stiffness: uploadStatus === "idle" ? 400 : undefined,
                  damping: uploadStatus === "idle" ? 17 : undefined,
                  duration:
                    uploadStatus === "success"
                      ? 0.5
                      : uploadStatus === "error"
                        ? 0.4
                        : 0.3,
                  ease:
                    uploadStatus === "success" || uploadStatus === "error"
                      ? "easeOut"
                      : undefined,
                }}
                whileHover="hover"
              >
                {uploadStatus === "success" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <Check className="text-green-500" size={18} />
                  </motion.div>
                ) : uploadStatus === "error" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <AlertCircle className="text-red-500" size={18} />
                  </motion.div>
                ) : uploadStatus === "uploading" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Loader2 className="text-[#f9c39d]" size={18} />
                  </motion.div>
                ) : (
                  <Upload className="text-[#f9c39d]" size={16} />
                )}
              </motion.div>

              <motion.p
                className="text-xs sm:text-sm text-white font-medium wrap-break-word text-center w-full max-w-[200px] sm:max-w-full px-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.1,
                }}
              >
                {file.name}
              </motion.p>

              <motion.div
                className="flex items-center gap-2 mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <p className="text-[10px] sm:text-xs text-gray-400">
                  {Math.round(file.size / 1024)} KB
                </p>
                {uploadStatus === "success" && (
                  <motion.span
                    className="text-[10px] sm:text-xs text-green-500"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {t("uploadStatus.uploaded")}
                  </motion.span>
                )}
                {uploadStatus === "error" && (
                  <motion.span
                    className="text-[10px] sm:text-xs text-red-500"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {t("uploadStatus.failed")}
                  </motion.span>
                )}
                {uploadStatus === "uploading" && (
                  <motion.span
                    className="text-[10px] sm:text-xs text-[#f9c39d]"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: [0.5, 1, 0.5], x: 0 }}
                    transition={{
                      opacity: {
                        repeat: Infinity,
                        duration: 1.5,
                      },
                      x: { delay: 0.2 },
                    }}
                  >
                    {t("uploadStatus.uploading")}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="upload-prompt"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center justify-center p-2 sm:p-4 text-center"
            >
              <motion.div
                className="w-8 h-8 sm:w-12 sm:h-12 bg-[#f9c39d]/20 rounded-full flex items-center justify-center mb-2 sm:mb-3"
                variants={iconVariants}
                animate={isDragging ? "drag" : "animate"}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  duration: 0.3,
                }}
                whileHover="hover"
              >
                <Upload className="text-[#f9c39d]" size={16} />
              </motion.div>

              <motion.p
                className="text-[10px] sm:text-xs text-gray-400"
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  color: isDragging ? "#f9c39d" : "#9ca3af",
                }}
                transition={{
                  y: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: 0.15,
                  },
                  opacity: { delay: 0.15, duration: 0.3 },
                  color: { duration: 0.3 },
                }}
              >
                {isDragging ? t("uploadPrompt.drop") : t("uploadPrompt.click")}
              </motion.p>

              <motion.p
                className="text-[10px] sm:text-xs text-[#f9c39d]/80 mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: 0.25,
                }}
              >
                {t("uploadPrompt.supports")}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.label>

      <motion.p
        className="text-white text-xs sm:text-sm text-center"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.3,
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default UploadBox;
