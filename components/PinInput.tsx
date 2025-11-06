"use client";

import { useState } from "react";

interface PinInputProps {
  onVerify: (pin: string) => void;
  error?: string;
  loading?: boolean;
}

export default function PinInput({ onVerify, error, loading }: PinInputProps) {
  const [pin, setPin] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setPin(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length === 6) {
      onVerify(pin);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="pin"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Enter 6-digit PIN to access this document
          </label>
          <input
            type="text"
            id="pin"
            inputMode="numeric"
            pattern="[0-9]*"
            value={pin}
            onChange={handleChange}
            placeholder="000000"
            maxLength={6}
            className="w-full px-4 py-3 text-center text-2xl font-mono tracking-widest border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-huskyBlue dark:focus:ring-huskyPink focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            autoComplete="off"
            disabled={loading}
          />
        </div>

        {error && (
          <div className="text-red-600 dark:text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={pin.length !== 6 || loading}
          className="w-full px-6 py-3 bg-huskyBlue dark:bg-huskyPink text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Verifying..." : "Access Document"}
        </button>
      </form>
    </div>
  );
}
