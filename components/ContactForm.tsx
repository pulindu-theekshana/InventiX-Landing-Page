"use client";

import { useState } from "react";

const shopSizes = [
  "One shop",
  "Two shops",
  "Three or more",
  "Not open yet",
];

const inputClass =
  "mt-2 block w-full rounded-lg border border-maroon/20 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-gold focus:bg-white";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    shop: "",
    contact: "",
    size: shopSizes[0],
    note: "",
  });
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof typeof values) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const submit = () => {
    if (!values.name.trim() || !values.shop.trim() || !values.contact.trim()) {
      setError("Add your name, your shop and a way to reach you.");
      return;
    }
    setError(null);
    // TODO: point this at your backend, or a service like Formspree/Resend.
    // For now it opens the visitor's mail client with the details filled in.
    const body = [
      `Name: ${values.name}`,
      `Shop: ${values.shop}`,
      `Contact: ${values.contact}`,
      `Size: ${values.size}`,
      "",
      values.note,
    ].join("\n");
    window.location.href = `mailto:hello@inventix.lk?subject=${encodeURIComponent(
      "Early access request",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="animate-drop-in rounded-2xl border border-leaf/40 bg-leaf-100 p-10">
        <p className="font-mono text-[0.68rem] tracking-[0.2em] text-leaf uppercase">
          Request ready
        </p>
        <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-maroon">
          Your mail app should be open
        </h3>
        <p className="mt-3 text-base/7 text-maroon/80">
          Send it and we&apos;ll reply within a day. If nothing opened, write to
          hello@inventix.lk directly and mention your shop name.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-leaf underline underline-offset-4"
        >
          Edit the details
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-maroon/12 bg-white p-8 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-maroon"
          >
            Your name
          </label>
          <input
            id="name"
            value={values.name}
            onChange={update("name")}
            className={inputClass}
            placeholder="Nimal Perera"
          />
        </div>

        <div>
          <label htmlFor="shop" className="text-sm font-semibold text-maroon">
            Shop name
          </label>
          <input
            id="shop"
            value={values.shop}
            onChange={update("shop")}
            className={inputClass}
            placeholder="Perera Stores"
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="text-sm font-semibold text-maroon"
          >
            Email or WhatsApp
          </label>
          <input
            id="contact"
            value={values.contact}
            onChange={update("contact")}
            className={inputClass}
            placeholder="+94 77 123 4567"
          />
        </div>

        <div>
          <label htmlFor="size" className="text-sm font-semibold text-maroon">
            How many shops
          </label>
          <select
            id="size"
            value={values.size}
            onChange={update("size")}
            className={inputClass}
          >
            {shopSizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="note" className="text-sm font-semibold text-maroon">
          What do you stock most of?
        </label>
        <textarea
          id="note"
          rows={4}
          value={values.note}
          onChange={update("note")}
          className={inputClass}
          placeholder="Rice, dhal, milk powder, soap — and roughly how many items in total."
        />
      </div>

      {error && (
        <p className="mt-4 text-sm text-[#B02A0E]" role="alert">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={submit}
        className="mt-7 w-full rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-maroon transition duration-200 hover:-translate-y-0.5 hover:bg-gold-300"
      >
        Request early access
      </button>
      <p className="mt-3 font-mono text-[0.68rem] text-ink/45">
        We only use these details to set up your account.
      </p>
    </div>
  );
}
