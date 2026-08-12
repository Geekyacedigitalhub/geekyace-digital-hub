"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm GeekyAce AI. How can I help you with GeekyAce Digital Hub today?",
};

export default function GeekyAceAI() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [interactionId, setInteractionId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timer);
  }, [isOpen]);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();

    const message = input.trim();

    if (!message || loading) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          previousInteractionId: interactionId,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data?.message ||
            "The AI assistant is temporarily unavailable."
        );
      }

      if (data.interactionId) {
        setInteractionId(data.interactionId);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.message ||
          "Sorry, I could not generate a response.",
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("GeekyAce AI error:", error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "The AI assistant is temporarily unavailable.",
        },
      ]);
    } finally {
      setLoading(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }

  function startNewChat() {
    setMessages([INITIAL_MESSAGE]);
    setInteractionId(null);
    setInput("");
  }

  function toggleChat() {
    setIsOpen((current) => !current);
  }

  return (
    <>
      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-24
            right-4
            z-[9999]
            flex
            w-[calc(100vw-2rem)]
            max-w-[390px]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-2xl
            sm:right-6
          "
          role="dialog"
          aria-label="GeekyAce AI chat"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-green-600 px-4 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg">
                ✨
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-base font-bold">
                  GeekyAce AI
                </h2>

                <p className="text-xs text-green-50">
                  Your Digital Hub assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={startNewChat}
                disabled={loading}
                className="rounded-lg px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
              >
                New Chat
              </button>

              <button
                type="button"
                onClick={toggleChat}
                aria-label="Close GeekyAce AI"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-lg transition hover:bg-white/15"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            className="h-[390px] overflow-y-auto bg-gray-50 px-4 py-4"
            aria-live="polite"
          >
            <div className="space-y-4">
              {messages.map((message, index) => {
                const isUser = message.role === "user";

                return (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${
                      isUser
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                        isUser
                          ? "rounded-br-md bg-green-600 text-white"
                          : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words">
                        {message.content}
                      </div>
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-gray-200 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="border-t border-gray-200 bg-white p-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder="Ask GeekyAce AI..."
                disabled={loading}
                autoComplete="off"
                className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3.5 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-gray-100"
              />

              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="shrink-0 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "..." : "Send"}
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-gray-400">
              GeekyAce AI can help you find the right digital solution.
            </p>
          </form>
        </div>
      )}

      {/* Floating AI Button */}
      <button
        type="button"
        onClick={toggleChat}
        aria-label={
          isOpen
            ? "Close GeekyAce AI"
            : "Open GeekyAce AI"
        }
        className="
          fixed
          bottom-5
          right-4
          z-[9999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-600
          text-2xl
          text-white
          shadow-xl
          ring-4
          ring-white
          transition
          duration-200
          hover:scale-105
          hover:bg-green-700
          active:scale-95
          sm:right-6
        "
      >
        {isOpen ? "×" : "✨"}

        {!isOpen && (
          <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
        )}
      </button>
    </>
  );
}