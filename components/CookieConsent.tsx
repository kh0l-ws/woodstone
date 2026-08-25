// components/CookieConsent.tsx
"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900 text-white p-4 md:p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 justify-between">
        <p className="text-sm text-neutral-200">
          Tento web používá cookies pro zajištění správné funkčnosti a analýzu
          návštěvnosti. Více informací najdete v{" "}
          <a href="/zasady-ochrany-osobnich-udaju" className="underline">
            zásadách ochrany osobních údajů
          </a>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => handleChoice("rejected")}
            className="px-4 py-2 text-sm rounded border border-neutral-600 hover:bg-neutral-800"
          >
            Odmítnout
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="px-4 py-2 text-sm rounded bg-white text-neutral-900 hover:bg-neutral-200"
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  );
}