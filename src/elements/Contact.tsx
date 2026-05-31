import { useState } from "react";
import ContactData from "../Data/Contact.json";

const { headline, subtext, form, success, contact } = ContactData;


export default function Contact() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    description: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formState.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formState.fullName}\nEmail: ${formState.email}\n\n${formState.description}`
    );
    window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi! I'm ${formState.fullName} (${formState.email}).\n\n${formState.description}`
    );
    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm text-primary placeholder-primary bg-white/[0.06] border border-white/[0.08] outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent resize-none leading-relaxed";

  return (
    <section id="contact" className="min-h-screen w-full flex items-center bg-background-sec">

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT ── */}
        <div style={{ fontFamily: "'Caveat',sans-serif" }}>
          <h2 className="text-7xl lg:text-9xl font-bold text-white tracking-tight">
            {headline.line1}
            <br />
            <span className="bg-gradient-to-r text-accent bg-clip-text">
              {headline.line2}
            </span>
            <br />
            {headline.line3}
            <br />
            {headline.line4}
          </h2>

          <p className="mt-8 text-primary text-3xl leading-relaxed max-w-xl">
            {subtext}
          </p>
        </div>

        {/* ── RIGHT: form card ── */}
        <div className="rounded-2xl p-8 border border-white/10 bg-white/[0.04] backdrop-blur-xl">

          {sent ? (
            /* ── SUCCESS STATE ── */
            <div className="flex flex-col items-center justify-center text-center gap-5 py-10">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <svg
                  className="w-8 h-8 stroke-current text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-primary text-2xl font-semibold">
                {success.title}
              </h3>
              <p className="text-primary text-sm leading-relaxed max-w-xs">
                Thanks for reaching out,{" "}
                <span className="text-accent font-medium">{formState.fullName}</span>!
                I'll get back to you at{" "}
                <span className="text-accent font-medium">{formState.email}</span>{" "}
                within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setFormState({ fullName: "", email: "", description: "" });
                }}
                className="mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 active:scale-95 transition-all duration-200"
              >
                {success.reset}
              </button>
            </div>
          ) : (
            /* ── FORM ── */
            <>
              <h3 className="text-primary text-2xl font-semibold mb-1">{form.title}</h3>
              <p className="text-primary text-sm mb-7">{form.subtitle}</p>

              <form onSubmit={handleEmail} className="flex flex-col gap-5">

                {/* Full name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="text-xs font-medium text-primary uppercase tracking-widest"
                  >
                    {form.fields.fullName.label}
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder={form.fields.fullName.placeholder}
                    value={formState.fullName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-primary uppercase tracking-widest"
                  >
                    {form.fields.email.label}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={form.fields.email.placeholder}
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="description"
                    className="text-xs font-medium text-primary uppercase tracking-widest"
                  >
                    {form.fields.description.label}
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder={form.fields.description.placeholder}
                    value={formState.description}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-1">
                  {/* Email */}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-primary bg-accent shadow-accent hover:shadow-accent active:scale-95 transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4 stroke-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    {form.buttons.email}
                  </button>

                  {/* WhatsApp */}
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#128c7e] shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.45)] active:scale-95 transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {form.buttons.whatsapp}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}