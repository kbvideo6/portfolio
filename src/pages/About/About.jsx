import HeroImg from "@/assets/images/IMG_0350.webp";
import LogoT from "@/assets/images/logo_t.webp";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
export default function About() {
  return (
    <>
      <section id="about" className="pt-4 md:pt-6 pb-24 md:pb-20 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:px-8 md:space-y-16">
          <TypewriterTitle
            prefix=""
            title="Electronic & Embedded Systems Designer"
            className="relative z-10 max-w-4xl text-4xl font-medium lg:text-5xl text-white font-mono"
          />
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="its owner of the web"
                  width={1207}
                  height={929}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I am an undergraduate at the <span className="text-blue-400 font-semibold">University of Sri Jayewardenepura</span>, specializing in <span className="text-green-400 font-semibold">Electronic and Embedded System Design</span>. Unlike traditional developers, I understand the full stack—from the PCB layout and voltage regulation to the backend API and frontend dashboard.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in Electronic and Embedded System Design, focusing on custom hardware and firmware development. My recent work includes engineering an AIoT wearable sEMG/IMU device for biometric monitoring and developing integrated GPS tracking hardware.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-gray-300 italic leading-relaxed">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Steve Jobs
                    </cite>
                    <div className="flex items-center gap-2 font-mono text-sm">
                      <i className="fas fa-lightbulb text-yellow-500"></i>
                      <span className="text-gray-400">Co-founder, Apple Inc.</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
