
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

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

    // Simulate form submission - in a real app, you would use EmailJS or a similar service
    try {
      // Fake API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
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
      </div>
    </form>
  );
};

export default ContactForm;
