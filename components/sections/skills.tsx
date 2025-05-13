'use client';

import React from 'react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';
import { Code2, Palette, Database, Wrench, Gauge, Lock } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  description: string;
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  className?: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code2 className="size-5" />,
    skills: [
      { name: 'React/Next.js', level: 95, description: 'Building modern web applications with React and Next.js' },
      { name: 'TypeScript', level: 90, description: 'Type-safe development with TypeScript' },
      { name: 'CSS/Tailwind', level: 95, description: 'Creating responsive and beautiful user interfaces' },
      { name: 'Performance', level: 88, description: 'Optimizing for speed and user experience' },
    ],
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="size-5" />,
    skills: [
      { name: 'User Interface', level: 92, description: 'Designing intuitive and beautiful interfaces' },
      { name: 'User Experience', level: 88, description: 'Creating seamless user experiences' },
      { name: 'Design Systems', level: 90, description: 'Building scalable design systems' },
      { name: 'Prototyping', level: 85, description: 'Creating interactive prototypes' },
    ],
  },
  {
    title: "Backend Development",
    icon: <Database className="size-5" />,
    skills: [
      { name: 'Node.js', level: 85, description: 'Server-side JavaScript development' },
      { name: 'API Design', level: 88, description: 'RESTful and GraphQL API development' },
      { name: 'Databases', level: 82, description: 'Working with SQL and NoSQL databases' },
      { name: 'Security', level: 85, description: 'Implementing secure backend solutions' },
    ],
  },
];

const additionalSkills = [
  { icon: <Wrench className="size-5" />, name: 'DevOps', description: 'CI/CD, Docker, AWS' },
  { icon: <Gauge className="size-5" />, name: 'Performance', description: 'Optimization & Monitoring' },
  { icon: <Lock className="size-5" />, name: 'Security', description: 'Best Practices & Implementation' },
];

const SkillCard = ({ category }: { category: SkillCategory }) => {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>
      
      <div className="space-y-6">
        {category.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <div>
                <p className="font-medium">{skill.name}</p>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
              <span className="text-sm font-medium text-primary">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-width">
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground">
              With years of experience in development and design, I've honed a diverse set of skills
              that enable me to create exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}