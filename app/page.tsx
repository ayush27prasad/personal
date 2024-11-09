"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Mail,
  Globe,
  Award,
  Briefcase,
  Grid3x3Icon,
  Linkedin,
  Github,
  Instagram,
  Twitter
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-7xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min"
      >
        {/* Hero Section */}
        <motion.div variants={item} className="col-span-full lg:col-span-2">
          <Card className="p-6 md:p-8 h-full bg-gradient-to-br from-zinc-900 to-black">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Ayush Prasad
            </h1>
            <p className="text-zinc-400 text-lg mb-4">
              Software Engineer @InfiniSync Consulting | Google Summer of Code &apos;24 @Zendalona
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">Data Structures</Badge>
              <Badge variant="secondary">Algorithms</Badge>
              <Badge variant="secondary">Spring</Badge>
              <Badge variant="secondary">Spring Boot</Badge>
              <Badge variant="secondary">NodeJs</Badge>
              <Badge variant="secondary">ExpressJs</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">NestJs</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
              <Badge variant="secondary">Amazon Web Services</Badge>
              <Badge variant="secondary">Google Cloud Platform</Badge>
            </div>
          </Card>
        </motion.div>

        {/* Profile Image */}
        <motion.div variants={item} className="lg:row-span-2">
          <Card className="p-4 bg-zinc-900 overflow-hidden">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
              <Image
                src="https://i.pinimg.com/564x/27/59/2a/27592a992de78e5c39c678a78c34cce3.jpg"
                alt="Ayush Prasad"
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </Card>
        </motion.div>


        {/* Current Role */}
        <motion.div variants={item}>
          <Card className="p-6 h-full bg-zinc-900">
            <Briefcase className="w-10 h-10 mb-4 text-blue-400" />
            <h2 className="text-xl font-bold mb-2">Current Role</h2>
            <p className="text-zinc-400">
              SDE 1 at InfiniSync Consulting
              <br />
              Building scalable solutions
            </p>
          </Card>
        </motion.div>

        {/* GSoC */}
        <motion.div variants={item}>
          <Card className="p-6 h-full bg-zinc-900">
            <Globe className="w-10 h-10 mb-4 text-purple-400" />
            <h2 className="text-xl font-bold mb-2">Open Source Contributor</h2>
            <p className="text-zinc-400">
              Google Summer of Code 2024
              <br />
              @Zendalona
            </p>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div variants={item}>
          <Card className="p-6 h-full bg-zinc-900">
            <Award className="w-10 h-10 mb-4 text-emerald-400" />
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <p className="text-zinc-400">
              Electronics and Communication Engineering
              <br />
              KIET Group of Institutions, India
            </p>
          </Card>
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={item} className="col-span-full">
          <Card className="p-6 md:p-8 bg-zinc-900">
            <Terminal className="w-10 h-10 mb-4 text-yellow-400" />
            <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-4 bg-zinc-800">
                <h3 className="font-bold mb-2">Backend Development</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  RESTful APIs, Microservices, System Design
                </p>
                <Badge>Node.js</Badge>
              </Card>
              <Card className="p-4 bg-zinc-800">
                <h3 className="font-bold mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  AWS, Docker, CI/CD Pipelines
                </p>
                <Badge>DevOps</Badge>
              </Card>
              <Card className="p-4 bg-zinc-800">
                <h3 className="font-bold mb-2">Database Management</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  SQL, NoSQL, Data Modeling
                </p>
                <Badge>Databases</Badge>
              </Card>
            </div>
          </Card>
        </motion.div>

        {/* Projects */}
        <motion.div variants={item} className="col-span-full">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-zinc-900 to-black">
            <Code2 className="w-10 h-10 mb-4 text-emerald-400" />
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-4 bg-zinc-800/50">
                <h3 className="font-bold mb-2">GSoC Project</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Contributing to Zendalona&apos;s open-source initiatives
                </p>
                <Badge>Open Source</Badge>
              </Card>
              <Card className="p-4 bg-zinc-800/50">
                <h3 className="font-bold mb-2">Enterprise Solutions</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Developing scalable solutions at InfiniSync
                </p>
                <Badge>Enterprise</Badge>
              </Card>
              <Card className="p-4 bg-zinc-800/50">
                <h3 className="font-bold mb-2">System Architecture</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Designing robust backend systems
                </p>
                <Badge>Architecture</Badge>
              </Card>
            </div>
          </Card>
        </motion.div>

        {/* Contact */}
        <motion.div variants={item} className="col-span-full">
          <Card className="p-6 md:p-8 bg-zinc-900">
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/ayush27prasad" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-5 w-5"/>
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/ayush27prasad" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Linkedin className="mr-2 h-5 w-5"/>
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:ayushprasad.2003.va@gmail.com">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-5 w-5"/>
                  Email
                </Button>
              </a>
              <a href="https://bento.me/ayushprasad" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Grid3x3Icon className="mr-2 h-5 w-5"/>
                  Bento
                </Button>
              </a>
              <a href="https://instagram.com/ayush27prasad" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Instagram className="mr-2 h-5 w-5"/>
                  Instagram
                </Button>
              </a>
              <a href="https://x.com/ayush27prasad" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Twitter className="mr-2 h-5 w-5"/>
                  Twitter
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </main>
  );
}