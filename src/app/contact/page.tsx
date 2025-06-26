"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about#contact");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-white text-lg">Redirecting to About page...</p>
    </div>
  );
};

export default ContactPage;
