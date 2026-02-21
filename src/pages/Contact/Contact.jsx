import React, { useState } from "react";
import { Send, MapPin, Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    const form = new FormData();
    form.append("access_key", ""); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.projectType || "New Engineering Inquiry");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message transmitted successfully!");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "Transmission failed. Please retry.");
      }
    } catch (error) {
      setStatus("Connection error. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-4 md:pt-6 pb-24 md:pb-20 bg-[#0a0f1e] text-white min-h-screen relative overflow-hidden">
      {/* PCB Grid Background */}
      <div className="absolute inset-0 pcb-grid-bg opacity-20 pointer-events-none" />

      {/* Gradient Accents */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono text-blue-400">OPEN CHANNEL</span>
          </div>

          <TypewriterTitle
            prefix="./"
            title="Contact Interface"
            className="text-4xl md:text-5xl font-bold mb-4 font-mono"
          />

          <p className="text-slate-400 text-lg font-mono">
            Available for engineering roles and freelance projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* LEFT COLUMN: Contact Info & Socials */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                  Let's Engineer the Future.
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I am currently available for freelance projects and full-time
                  engineering roles. Whether you need a custom PCB design,
                  robust backend architecture, or an IoT system — let's discuss the technical
                  requirements.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-slate-300 group">
                  <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 mb-0.5">EMAIL</h4>
                    <a
                      href="mailto:as20240419@sci.sjp.ac.lk"
                      className="hover:text-blue-400 transition-colors font-mono text-sm"
                    >
                      as20240419@sci.sjp.ac.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-slate-300 group">
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 group-hover:border-green-500/50 transition-colors">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 mb-0.5">LOCATION</h4>
                    <span className="font-mono text-sm">Colombo, Sri Lanka (Open to Remote)</span>
                  </div>
                </div>
              </div>

              {/* Professional Networks */}
              <div className="pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-4 font-mono">
                  Professional Networks
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/kbvideo6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/50 transition-all group"
                  >
                    <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-mono">GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nisal-chathuranga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/50 transition-all group"
                  >
                    <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-mono">LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The "Terminal" Form */}
            <div className="bg-slate-950/50 border border-slate-800 p-6 md:p-8 rounded-lg hover:border-blue-500/30 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name..."
                      className={`w-full px-4 py-3 rounded-md bg-slate-900 border font-mono text-sm ${errors.name ? "border-red-500" : "border-slate-700"
                        } focus:border-blue-500 focus:outline-none transition-colors text-slate-200`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email..."
                      className={`w-full px-4 py-3 rounded-md bg-slate-900 border font-mono text-sm ${errors.email ? "border-red-500" : "border-slate-700"
                        } focus:border-blue-500 focus:outline-none transition-colors text-slate-200`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">
                    PROJECT TYPE
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700 font-mono text-sm focus:border-blue-500 focus:outline-none transition-colors text-slate-200"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                  >
                    <option value="">Select a category...</option>
                    <option value="Embedded Systems / PCB Design">
                      Embedded Systems / PCB Design
                    </option>
                    <option value="Backend Development">
                      Backend Development
                    </option>
                    <option value="IoT Architecture">IoT Architecture</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    placeholder="// Describe your project requirements..."
                    className={`w-full px-4 py-3 rounded-md bg-slate-900 border font-mono text-sm ${errors.message ? "border-red-500" : "border-slate-700"
                      } focus:border-blue-500 focus:outline-none transition-colors resize-none text-slate-200`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-md font-mono flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-900/20"
                >
                  <span>Transmit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 p-3 rounded-md text-center text-sm font-mono ${status.includes("success")
                    ? "text-green-400 bg-green-500/10 border border-green-500/20"
                    : "text-red-400 bg-red-500/10 border border-red-500/20"
                    }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} Nisal Chathu
          </p>
        </div>
      </section>

      <style jsx>{`
        .pcb-grid-bg {
          background-image:
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </main>
  );
}
