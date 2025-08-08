import HeroImg from "@/assets/images/IMG_0350.jpg";
import LogoT from "@/assets/images/logo_t.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-4xl text-4xl font-medium lg:text-5xl text-white">
            Dedicated Creator, Talented Developer, Embedded Systems Designer.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="its owner of the web"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello, everyone! My name is Nisal, and I'm 21 years old. I am a university student currently studying Physics, Computer Science, Math, and Electronics. Since I was a kid, I've had a passion for video editing and animation, and with at least five years of experience in these fields, you can trust that you're in good hands!{" "}
                <span className="font-bold text-white">
                  As the creator of Art Studio Freelance Service...
                </span>
                , I'm dedicated to provide highend projects.
              </p>
              <p className="text-white">
                In addition to my creative work, I have spent the last two years studying programming and have become an excellent web developer—at least that’s what my local clients say! My focus is on delivering high-quality work and constantly learning new things. My dream is to pursue a PhD.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I am a dedicated learner and innovator, driven to explore the intersection of hardware and software. Currently, I'm expanding my skills as an embedded systems designer and working with AI, MERN stack development, video editing, animation, and event handling. I am always ready for a new challenge, so feel free to contact me anytime! :)
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nisal chathuranga, Founder of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={LogoT}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Art Studio</span>
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
