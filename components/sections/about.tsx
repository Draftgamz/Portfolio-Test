'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
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
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate developer and designer with over 5 years of experience crafting digital experiences that are not only visually appealing but also highly functional and user-friendly.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving, allowing me to build solutions that meet both business objectives and user needs. I believe in clean code, thoughtful design, and continuous learning.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or experimenting with emerging technologies to stay at the forefront of digital innovation.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" className="group">
                  <Link href="#experience">
                    <span>My Experience</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-medium mb-2">My Philosophy</h3>
                <p className="text-muted-foreground">
                  I believe in creating digital experiences that are both beautiful and functional. Every line of code and every pixel matters in crafting interfaces that users love to engage with.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-medium mb-2">My Approach</h3>
                <p className="text-muted-foreground">
                  I start with understanding user needs, then design solutions that address those needs while aligning with business goals. I'm a proponent of iterative development and continuous improvement.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-medium mb-2">My Goal</h3>
                <p className="text-muted-foreground">
                  To create digital products that not only meet requirements but exceed expectations, leaving users with memorable experiences that solve real problems efficiently.
                </p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}