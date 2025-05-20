
import React from "react";
import { ArrowDown, Download, Mail, Phone, Briefcase, GraduationCap, Code } from "lucide-react";
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

const Index: React.FC = () => {
  // Education timeline data
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
      details: "Completed foundation studies with emphasis on mathematics, physics, and computer science fundamentals."
    }
  ];

  // Experience timeline data
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

  // Certification data
  const certificationData = [
    {
      title: "IPv4 Network Admin Training",
      issuer: "Network Institute",
      date: "2022",
      description: "Comprehensive training covering IP routing protocols, firewall configuration, and network administration practices. Gained hands-on experience with enterprise-level networking equipment.",
      color: "blue"
    },
    {
      title: "Professional Development Seminar",
      issuer: "Career Development Center",
      date: "2023",
      description: "Intensive professional development program focusing on effective communication, teamwork strategies, and time management techniques for the workplace.",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center">
        <ParticlesBackground className="absolute inset-0" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Hi, I'm <span className="text-glow-blue">Ikmal Rizal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Computer Network & System Graduate
            </h2>
            <p className="text-lg text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Detail-oriented with hands-on skills in Java, C, Cisco Networking, and IP Administration.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button className="bg-neon-blue/20 hover:bg-neon-blue/30 text-white border border-neon-blue">
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <Button
                className="bg-transparent hover:bg-white/10 text-white border border-white/30"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-white" />
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="Get to know me better"
        neonColor="purple"
      >
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
              <p className="text-gray-300">
                Based in Malaysia, willing to relocate for the right opportunity.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Education"
        subtitle="Academic background and qualifications"
        neonColor="blue"
      >
        <div className="overflow-hidden">
          <Timeline items={educationData} />
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills"
        subtitle="Technical proficiencies and competencies"
        neonColor="green"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-glow-blue">Programming</h3>
            <SkillBar name="C" level={85} color="blue" />
            <SkillBar name="Java" level={80} color="blue" />
            <SkillBar name="HTML" level={75} color="blue" />
            <SkillBar name="CSS" level={70} color="blue" />
            <SkillBar name="PHP" level={65} color="blue" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-glow-purple">Networking</h3>
            <SkillBar name="Subnetting" level={90} color="purple" />
            <SkillBar name="IP Routing" level={85} color="purple" />
            <SkillBar name="Firewall & IDS" level={80} color="purple" />
            <SkillBar name="Cisco" level={85} color="purple" />
            <SkillBar name="IPv4 Admin" level={90} color="purple" />
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Professional work history"
        neonColor="blue"
        className="bg-dark-light/30"
      >
        <div className="overflow-hidden">
          <Timeline items={experienceData} />
        </div>
      </Section>

      {/* Certifications Section */}
      <Section
        id="certifications"
        title="Certifications & Trainings"
        subtitle="Professional development and qualifications"
        neonColor="purple"
      >
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

      {/* Projects Section */}
      <Section
        id="projects"
        title="Projects"
        subtitle="Showcasing my technical work"
        neonColor="green"
        className="bg-dark-light/30"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="LANChat"
            description="CLI-based LAN chat system with encryption and file transfer capabilities"
            features={[
              "/dm command for private messaging",
              "/rename for changing username",
              "File transfer with progress bar",
              "AES-256 encryption for messages"
            ]}
            techStack={["Python", "Sockets", "Cryptography"]}
            color="blue"
          />
          
          <ProjectCard
            title="Subnet Calculator"
            description="Python-based tool for IP subnet calculations and network planning"
            features={[
              "CIDR notation input",
              "Automatic class detection",
              "IP range calculation",
              "Host count determination"
            ]}
            techStack={["Python", "Networking"]}
            color="purple"
          />
          
          <ProjectCard
            title="Wildlife Animals AR"
            description="AR-based interactive wildlife learning experience (Final Year Project)"
            features={[
              "Augmented animal models",
              "Research-based timeline",
              "Interactive educational content",
              "Realistic 3D rendering"
            ]}
            techStack={["Unity", "Vuforia", "3D Modeling"]}
            color="green"
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Contact Me"
        subtitle="Get in touch for opportunities or inquiries"
        neonColor="purple"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          
          <div className="glass-card p-6 rounded-lg neon-border-blue">
            <h3 className="text-xl font-semibold mb-6 text-glow-blue">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-4 text-neon-blue" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a 
                    href="mailto:ikmalrizal153@gmail.com" 
                    className="text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    ikmalrizal153@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-neon-green" />
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <a 
                    href="tel:+60147205331" 
                    className="text-gray-300 hover:text-neon-green transition-colors"
                  >
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
