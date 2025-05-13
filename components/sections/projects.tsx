'use client';

import React, { useState } from 'react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  demoUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with cart functionality, user authentication, and payment integration using Stripe.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "A dashboard for designers to showcase their portfolio with analytics and client feedback systems.",
    tags: ["Next.js", "Tailwind CSS", "Chart.js", "Supabase"],
    category: "Frontend",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team functionality.",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Content Management System",
    description: "A custom CMS built for bloggers and content creators with markdown support and SEO optimization.",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    category: "Full Stack",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Weather Application",
    description: "A weather application with location-based forecasts, historical data, and customizable alerts.",
    tags: ["React", "Weather API", "Chart.js", "Geolocation"],
    category: "Frontend",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "API Gateway",
    description: "A microservice gateway that handles authentication, rate limiting, and request routing.",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    category: "Backend",
    demoUrl: "#",
    repoUrl: "#",
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300">
      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between mt-4">
        <Button asChild variant="ghost" size="sm" className="px-3">
          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            <span>Repo</span>
          </Link>
        </Button>
        
        <Button asChild size="sm" className="px-3">
          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <span>Live Demo</span>
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            },
            item: {
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 1,
                },
              },
            },
          }}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Explore a selection of my recent work showcasing my skills and experience across
              various technologies and domains.
            </p>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full",
                    activeCategory === category && "text-primary-foreground"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                <span>View More on GitHub</span>
              </Link>
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}