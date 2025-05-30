import React from "react";
import {
  ArrowDown,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import SkillBar from "@/components/SkillBar";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import CertificationCard from "@/components/CertificationCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  const educationData = [
    {
      title: "Bachelor in Computer Network & Networking",
      organization: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
      period: "2021 - 2025",
      details: "Focused on network infrastructure, systems administration, and internet protocols with hands-on training in Cisco equipment and network security."
    },
    {
      title: "Foundation in Science",
      organization: "Kolej Matrikulasi Negeri Sembilan",
      period: "2020 - 2021",
      details: "Completed foundation studies with emphasis on mathematics, biology, and computer science fundamentals."
    }
  ];

  const experienceData = [
    {
      title: "Storekeeper",
      organization: "99 Speedmart",
      period: "2024",
      details: [
        "Maintained stock accuracy through daily inventory inspections",
        "Performed proactive restocking to prevent shortages",
        "Conducted inventory reconciliation and managed daily operations",
        "Implemented efficient organization systems for improved accessibility"
      ]
    }
  ];

  const certificationData = [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "2022",
      description:
        "Fundamental training in networking concepts including protocols, network devices, and the basics of IP addressing and Ethernet. Built a strong foundation for network configuration and troubleshooting.",
      color: "blue"
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "2023",
      description:
        "Focused on switching technologies, routing protocols, VLANs, and wireless LAN configuration. Gained practical experience in network design, implementation, and troubleshooting.",
      color: "purple"
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco Networking Academy",
      date: "2024",
      description:
        "Advanced topics in enterprise networking architecture, security protocols, VPNs, and network automation. Hands-on labs in securing networks and configuring enterprise-grade equipment.",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <section id="home" className="relative h-screen flex items-center justify-center text-center px-4">
        <ParticlesBackground className="absolute inset-0" />

        <div className="z-10 max-w-3xl">
          <motion.img
            src="/profile.png"
            alt="Ikmal Rizal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-6 w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
          />

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="text-glow-blue">Ikmal Rizal</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-medium mb-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Computer Network & System Graduate
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Detail-oriented with hands-on skills in Java, C, Cisco Networking, and IP Administration.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              className="bg-transparent hover:bg-white/10 text-white border border-white/30"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-white" />
          </a>
        </div>
      </section>

      <Section id="about" title="About Me" subtitle="Get to know me better" neonColor="purple">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-lg neon-border-purple">
            <h3 className="text-xl font-semibold mb-4 text-glow-purple">Background</h3>
            <p className="text-gray-300 mb-4">
              I'm a recent graduate with a Bachelor's degree in Computer Network and Networking from Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA). My academic journey has equipped me with a strong foundation in network administration, system development, and cybersecurity principles.
            </p>
            <p className="text-gray-300">
              I'm passionate about building robust network infrastructures and implementing secure, efficient systems. With hands-on experience in Java, C programming, and Cisco networking, I'm eager to apply my technical skills in a professional environment where I can continue to grow and contribute.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg neon-border-green">
            <h3 className="text-xl font-semibold mb-4 text-glow-green">Skills & Interests</h3>
            <div className="mb-4">
              <h4 className="font-medium text-white mb-2">Professional Skills</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Strong teamwork and collaborative mindset</li>
                <li>Excellent time management and organization</li>
                <li>Problem-solving and analytical thinking</li>
                <li>Effective written and verbal communication</li>
                <li>Detail-oriented approach to technical work</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Location</h4>
              <p className="text-gray-300">Based in Malaysia, willing to relocate for the right opportunity.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education" subtitle="Academic background and qualifications" neonColor="blue">
        <Timeline items={educationData} />
      </Section>

      <Section id="skills" title="Skills" subtitle="Technical proficiencies and competencies" neonColor="green">
  <div className="grid md:grid-cols-2 gap-12">
    <div>
      <h3 className="text-xl font-semibold mb-6 text-glow-blue">Programming</h3>
      <SkillBar name="C" icon="C.png" />
      <SkillBar name="Java" icon="Java.png" />
      <SkillBar name="HTML" icon="HTML.png" />
      <SkillBar name="CSS" icon="CSS.png" />
      <SkillBar name="PHP" icon="PHP.png" />
      <SkillBar name="JavaScript" icon="JavaScript.png" />
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-6 text-glow-purple">Tools & Framework</h3>
      <SkillBar name="React" icon="React.png" />
      <SkillBar name="TailwindCSS" icon="TailwindCSS.png" />
      <SkillBar name="Python" icon="Python.webp" />
      <SkillBar name="MySQL" icon="MySQL.png" />
      <SkillBar name="Firebase" icon="Firebase.svg" />
      <SkillBar name="TypeScript" icon="TypeScript.png" />
    </div>
  </div>
</Section>


      <Section id="experience" title="Experience" subtitle="Professional work history" neonColor="blue" className="bg-dark-light/30">
        <Timeline items={experienceData} />
      </Section>

      <Section id="certifications" title="Certifications & Trainings" subtitle="Professional development and qualifications" neonColor="purple">
        <div className="grid gap-6">
          {certificationData.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              color={cert.color as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Showcasing my technical work" neonColor="green" className="bg-dark-light/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="LANChat"
            description="CLI-based LAN chat system with encryption and file transfer capabilities"
            features={["/dm command for private messaging", "/rename for changing username", "File transfer with progress bar", "AES-256 encryption for messages"]}
            techStack={["Python", "Sockets", "Cryptography"]}
            githubLink="https://github.com/ikmalrizal15/LANChat"
            color="blue"
          />
          <ProjectCard
            title="Savings Calculator"
            description="A modern savings goal visualizer with dynamic progress tracking and monthly targets."
            features={["3x3 grid layout", "Progress bar", "Target badges"]}
            techStack={["React", "Tailwind", "Vite"]}
            githubLink="https://github.com/ikmalrizal15/savings-calculator"
            liveDemoLink="https://savings-calculator-delta.vercel.app/"
            color="green"
          />
          <ProjectCard
            title="Wildlife Animals AR"
            description="AR-based interactive wildlife learning experience (Final Year Project)"
            features={["Augmented animal models", "Research-based timeline", "Interactive educational content", "Realistic 3D rendering"]}
            techStack={["Unity", "Vuforia", "3D Modeling"]}
            color="purple"
          />
        </div>
      </Section>

      <Section id="contact" title="Contact Me" subtitle="Get in touch for opportunities or inquiries" neonColor="purple">
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="glass-card p-6 rounded-lg neon-border-blue">
            <h3 className="text-xl font-semibold mb-6 text-glow-blue">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-4 text-neon-blue" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href="mailto:ikmalrizal153@gmail.com" className="text-gray-300 hover:text-neon-blue transition-colors">
                    ikmalrizal153@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-4 text-neon-green" />
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <a href="tel:+60147205331" className="text-gray-300 hover:text-neon-green transition-colors">
                    014-7205331
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="mr-4 text-neon-purple" />
                <div>
                  <h4 className="font-medium text-white">For Work Opportunities</h4>
                  <p className="text-gray-300">
                    Open to full-time positions, contract work, and freelance projects in networking and system development.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <GraduationCap className="mr-4 text-neon-blue" />
                <div>
                  <h4 className="font-medium text-white">Education Inquiries</h4>
                  <p className="text-gray-300">
                    For academic collaborations or educational inquiries related to networking projects.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Code className="mr-4 text-neon-green" />
                <div>
                  <h4 className="font-medium text-white">Project Collaborations</h4>
                  <p className="text-gray-300">
                    Interested in collaborating on networking, system development, or IoT projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
