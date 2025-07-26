"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin, Instagram } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Heading from "@/components/title";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama setidaknya 2 karakter.",
  }),
  email: z.string().email({
    message: "Masukkan email yang valid.",
  }),
  phone: z.string().min(10, {
    message: "Nomor telepon setidaknya 10 karakter.",
  }),
  type: z.string({
    required_error: "Silakan pilih tipe yang diinginkan.",
  }),
  message: z.string().min(10, {
    message: "Masukkan pesan setidaknya 10 karakter.",
  }),
});

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.open(
      `
      https://wa.me/6281227277982?text=Nama:%20${values.name}%0AEmail:%20${values.email}%0ANo.%20WhatsApp:%20${values.phone}%0ATipe%20Rumah:%20${values.type}%0ACatatan:%20${values.message}
      `,
      "_blank",
    );
    toast("Permintaan Penawaran Telah Dikirim", {
      description: "Kami akan menghubungi Anda dalam waktu 24 jam",
    });
    form.reset();
  }

  const contactInfo = [
    {
      icon: <PhoneCall className="h-5 w-5" />,
      title: "Nomor Bisnis",
      value: "+62 812 2727 7982",
      link: "https://wa.me/6281227277982",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Bisnis",
      value: <>contact@nasaktiansolusibersama.co.id</>,
      link: "mailto:contact@nasaktiansolusibersama.co.id",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      value:
        "Jl. Al Barokah, Rowosari, Kec. Tembalang, Kota Semarang, Jawa Tengah",
      link: "https://maps.app.goo.gl/aGsxTNPXWDSwe9Su8",
    },
    // {
    //   icon: <Instagram className="h-5 w-5" />,
    //   title: "Instagram",
    //   value: "@metrocluster_tembalang",
    //   link: "https://www.instagram.com/metrocluster_tembalang/",
    // },
  ];

  return (
    <div className="flex flex-col">
      <Heading
        title="Kontak Kami"
        subtitle="Pilih tipe rumah yang sesuai dengan gaya hidup Anda. Mulai dari 36 m², dengan desain modern dan fungsional. Setiap rumah dirancang untuk memberikan kenyamanan maksimal bagi keluarga Anda."
      />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="border-none shadow-none">
                <>
                  <CardHeader>
                    <CardTitle className="text-3xl font-serif">
                      Minta Konsultasi
                    </CardTitle>
                    <CardDescription>
                      Isi formulir di bawah ini dan kami akan menghubungi Anda
                      dalam waktu 24 jam.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form
                        ref={formRef}
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nama</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Masukkan nama anda"
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
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="email@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nomor Telepon / WhatsApp</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="Masukkan nomor telepon atau WhatsApp"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tipe Rumah</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih tipe rumah yang diminati" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {/* <SelectItem value="21" disabled={true}>
                                      Tipe 21
                                    </SelectItem> */}
                                  <SelectItem value="36">Tipe 36</SelectItem>
                                  {/* <SelectItem value="45" disabled={true}>
                                      Tipe 45
                                    </SelectItem>
                                    <SelectItem value="60" disabled={true}>
                                      Tipe 60
                                    </SelectItem> */}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Catatan</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Masukkan catatan tambahan apabila diperlukan"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full">
                          Kirim Permintaan
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </>
              </Card>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle>Informasi Kontak</CardTitle>
                    <CardDescription>
                      Hubungi kami secara langsung menggunakan informasi di
                      bawah ini.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 ">
                    {contactInfo.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="overflow-hidden text-ellipsis flex items-start space-x-3 p-3 rounded-lg hover:bg-border/90 transition-colors"
                        target="_blank"
                      >
                        <div className="bg-primary/10 text-primary p-2 rounded-full">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className=" text-xs text-muted-foreground">
                            {item.value}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
