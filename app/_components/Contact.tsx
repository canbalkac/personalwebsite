"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().min(2).max(100),
  subject: z.string().min(2).max(100),
  message: z.string().min(2).max(500),
})
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Element } from 'react-scroll';


const Contact = () => {

    const Contacts = [
        {title: "E-mail", desc: "canbalkac3@gmail.com", icon: <IoMailOutline />},
        {title: "Address", desc: "Buca / İzmir / Turkey", icon:<CiLocationOn/>},
        {title: "E-mail", desc: "+90 545 641 62 60", icon:<MdOutlinePhoneInTalk/>}
    ]

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstname: "",
          lastname: "",
          email: "",
          subject: "",
          message:"",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
        <Element name="contact" className="h-full lg:h-screen p-8 space-y-20">
            <div className="flex justify-center">
                <div className="text-5xl font-bold font-sans">Contact Me</div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-20">
                <div className="space-y-5">
                    {
                        Contacts.map((contact: any, i:number)=> (
                        <div key={i} className="bg-light-mode-card dark:bg-[#222222] py-5 px-10 rounded-lg">
                            <div className="flex justify-between items-center space-x-10">
                                <div className="flex flex-col justify-center items-center space-y-3">
                                    <div className="bg-light-mode-bg dark:bg-white rounded-full flex justify-center items-center p-3">
                                        <div className="text-4xl dark:text-black">
                                            {contact.icon}
                                        </div>
                                    </div>
                                    <div className="text-xl">{contact.title}</div>
                                </div>
                                <div className="text-xl">{contact.desc}</div>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <div className="bg-light-mode-card dark:bg-[#222222] p-14 rounded-lg">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="flex flex-col lg:flex-row justify-between gap-3">
                                <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Firstname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Firstname" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Lastname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Lastname" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between gap-3">
                                <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Subject" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Message
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                            <Button className="bg-light-mode-bg hover:bg-[#86745a] dark:bg-black dark:hover:bg-neutral-800 dark:text-white" type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </Element>
  )
}

export default Contact