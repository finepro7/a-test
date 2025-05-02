
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // In a real app, you would send this data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions or want to collaborate? Fill out the form below and our team will contact you soon.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Mail className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400">info@aveonempire.com</p>
                  <p className="text-gray-400">support@aveonempire.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Phone className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">+1 (555) 765-4321</p>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm transition-all hover:bg-white/10">
                <h3 className="font-semibold text-lg mb-3">Office Location</h3>
                <p className="text-gray-400">
                  123 Innovation Drive<br />
                  Silicon Valley, CA 94025<br />
                  United States
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject of your message" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500 min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                  >
                    Send Message <ArrowRight className="ml-2" size={16} />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
