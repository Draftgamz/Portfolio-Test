'use client';

import React from 'react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

type TimelineItem = {
  title: string;
  company?: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'education';
};

const timeline: TimelineItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead the frontend development team in creating responsive, accessible web applications using React and Next.js. Implemented design systems and improved performance metrics by 40%.",
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "Boston, MA",
    period: "2020 - 2022",
    description: "Developed and maintained client websites and web applications. Collaborated with designers to implement pixel-perfect interfaces and improve user experience.",
    type: "work",
  },
  {
    title: "UI/UX Designer & Developer",
    company: "Creative Agency",
    location: "New York, NY",
    period: "2018 - 2020",
    description: "Designed and developed user interfaces for various client projects. Created wireframes, prototypes, and implemented frontend code using modern frameworks.",
    type: "work",
  },
  {
    title: "Master's in Computer Science",
    company: "Tech University",
    location: "Boston, MA",
    period: "2016 - 2018",
    description: "Specialized in Human-Computer Interaction and Web Technologies. Completed thesis on improving web accessibility for users with visual impairments.",
    type: "education",
  },
  {
    title: "Bachelor's in Design",
    company: "Design Institute",
    location: "Chicago, IL",
    period: "2012 - 2016",
    description: "Focused on UI/UX design principles, interaction design, and basic web development. Graduated with honors.",
    type: "education",
  },
];

const TimelineElement = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isOdd = index % 2 === 1;
  
  return (
    <div className={cn(
      "relative flex md:contents",
      isOdd ? "flex-row-reverse" : ""
    )}>
      <div className={cn(
        "col-start-1 col-end-2 mr-10 md:mx-auto",
        isOdd ? "md:mr-0 md:ml-10" : "md:ml-0 md:mr-10"
      )}>
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-full w-1 bg-primary/30"></div>
        </div>
      </div>
      
      <div className="relative col-start-2 col-end-12 my-4 rounded-xl border bg-card p-6 shadow-md">
        <div className="absolute -left-4 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {item.type === 'work' ? (
            <Briefcase className="h-4 w-4" />
          ) : (
            <GraduationCap className="h-4 w-4" />
          )}
        </div>
        <div className="mb-1 flex justify-between">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {item.period}
          </div>
        </div>
        {item.company && (
          <h4 className="text-md font-medium text-muted-foreground">{item.company} · {item.location}</h4>
        )}
        <p className="mt-3 text-muted-foreground">{item.description}</p>
      </div>
    </div>
  );
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto max-w-5xl">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Experience & Education</h2>
            <p className="text-muted-foreground">
              My professional journey and educational background that have shaped my skills and expertise.
            </p>
          </div>
          
          <div className="flex flex-col">
            {timeline.map((item, index) => (
              <TimelineElement key={index} item={item} index={index} />
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-3">Additional Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                <p className="font-medium">Advanced React Patterns</p>
                <p className="text-sm text-muted-foreground">Frontend Masters · 2022</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <p className="font-medium">UI/UX Design Fundamentals</p>
                <p className="text-sm text-muted-foreground">Design Academy · 2021</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <p className="font-medium">AWS Cloud Practitioner</p>
                <p className="text-sm text-muted-foreground">Amazon Web Services · 2020</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <p className="font-medium">Principles of Accessible Design</p>
                <p className="text-sm text-muted-foreground">Accessibility Institute · 2019</p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}