import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID!
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ikmal-rizal-7698ab2a3",
      icon: <FaLinkedin className="text-white" />,
      bg: "bg-blue-600",
    },
    {
      label: "GitHub",
      href: "https://github.com/ikmalrizal15",
      icon: <FaGithub className="text-white" />,
      bg: "bg-gray-800",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/60147205331?text=Hi%20Ikmal%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
      icon: <FaWhatsapp className="text-white" />,
      bg: "bg-green-500",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 rounded-lg neon-border-purple">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-200">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-dark-light/30 border-gray-700 focus:border-neon-purple"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-200">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-dark-light/30 border-gray-700 focus:border-neon-purple"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-200">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="bg-dark-light/30 border-gray-700 focus:border-neon-purple resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className={cn(
            "bg-neon-purple/20 hover:bg-neon-purple/30 text-white border border-neon-purple",
            "transition-all duration-300 group"
          )}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </Button>

        {/* Oval Contact Buttons with Icon + Label */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium ${contact.bg} shadow-md transition-all`}
            >
              {contact.icon}
              {contact.label}
            </motion.a>
          ))}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
