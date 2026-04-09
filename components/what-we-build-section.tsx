import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function WhatWeBuildSection() {
  return (
    <section className="min-h-screen bg-[#fafafa] px-6 py-16 md:px-12 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-start justify-between lg:mb-16">
          <div>
            <h2 className="mb-3 text-[24px] font-bold text-[#161616] lg:text-6xl">
              What We Build
            </h2>
            <p className="text-base text-[#4c4c4c] lg:text-2xl">
              Custom Software That Drives Measurable Impact
            </p>
          </div>
          
          {/* Code Icon */}
          <div className="hidden lg:block">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#d9d9d9]"
            >
              <path
                d="M35 30L15 60L35 90"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M52 90L68 30"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M85 90L105 60L85 30"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: Image with Badge */}
          <div className="relative pb-20 lg:pb-28">
            <div className="overflow-hidden rounded-4xl">
              <Image
                src="/images/office-workspace.jpg"
                alt="Modern office workspace with collaborative team"
                width={700}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            
            {/* Experience Badge - Positioned to overlap bottom-left */}
            <div className="absolute -bottom-12 left-4 flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#161616] bg-white shadow-lg lg:-bottom-16 lg:left-6 lg:h-52 lg:w-52">
              <div className="relative flex h-full w-full items-center justify-center">
                {/* Rotating Circular Text */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full animate-spin-slow"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    />
                  </defs>
                  <text 
                    fill="#161616" 
                    fontSize="11" 
                    fontWeight="600"
                    letterSpacing="3"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    <textPath 
                      xlinkHref="#circlePath" 
                      startOffset="0%"
                      textAnchor="start"
                    >
                      8 YEARS OF EXPERIENCE • 8 YEARS OF EXPERIENCE
                    </textPath>
                  </text>
                </svg>
                
                {/* Static Center Arrow */}
                <ArrowUpRight className="h-10 w-10 text-[#161616] lg:h-12 lg:w-12" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Right: Text Card */}
          <div className="rounded-4xl bg-[#fffbe6] p-8 lg:p-12">
            <h3 className="mb-8 text-[24px] font-bold text-[#161616] lg:text-5xl">
              At Nagorik
            </h3>
            
            <div className="space-y-6 text-base text-[#161616] lg:text-xl">
              <p>
                We don&apos;t just write code — we engineer scalable digital
                ecosystems that power operations, automate workflows, and
                accelerate business growth.
              </p>
              
              <p>
                Whether you&apos;re building a SaaS platform, enterprise system,
                fintech solution, or on-demand application, our custom software
                is designed for performance, flexibility, and future expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
