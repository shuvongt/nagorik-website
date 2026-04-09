import { ArrowUpRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Font setting: 
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export function HeroSection() {
  const features = [
    'Business-Aligned Architecture',
    'Scalable Cloud Systems',
    'Senior Engineering Team',
    'Long-Term Support',
  ]

  return (
    <div className={inter.className}>
    <section className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center justify-center">
          <div className="flex justify-center items-center rounded-full bg-[#d8f0a8] w-70.25 h-8">
            <span className="text-xs font-semibold leading-4 text-[#161616]">
              Leading Software Company in Bangladesh
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-6 tracking-tight font-semibold text-2xl leading-8 text-[#161616]">
          Enterprise-Grade Custom Software. Built to Scale.
        </h1>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-[#4c4c4c] sm:text-xl">
          We design and develop high-performance digital platforms tailored to your business model,
          engineered for scalability, security, and long-term growth.
        </p>

        {/* Features Grid */}

        <div className="mb-12 flex flex-col justify-center">
          
            <div className="flex items-center justify-start gap-2 sm:gap-3">
              <Check className="h-5 w-5 shrink-0 text-[#161616]" strokeWidth={2.5} />
              <span className="text-base font-normal text-[#161616] sm:text-lg"> Business-Aligned Architecture </span>
            </div>
            <div className="flex items-center justify-start gap-2 sm:gap-3">
              <Check className="h-5 w-5 shrink-0 text-[#161616]" strokeWidth={2.5} />
              <span className="text-base font-normal text-[#161616] sm:text-lg"> Scalable Cloud Systems </span>
            </div>
            <div className="flex items-center justify-start gap-2 sm:gap-3">
              <Check className="h-5 w-5 shrink-0 text-[#161616]" strokeWidth={2.5} />
              <span className="text-base font-normal text-[#161616] sm:text-lg"> Senior Engineering Team </span>
            </div>
            <div className="flex items-center justify-start gap-2 sm:gap-3">
              <Check className="h-5 w-5 shrink-0 text-[#161616]" strokeWidth={2.5} />
              <span className="text-base font-normal text-[#161616] sm:text-lg"> Long-Term Support </span>
            </div>
          
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-0">
          <Button
            size="lg"
            className="h-14 rounded-full bg-[#161616] px-8 text-base font-medium text-[#fafafa] hover:bg-[#000000]"
          >
            Get a Free Quotation
          </Button>
          <Button
            size="lg"
            className="h-14 w-14 rounded-full bg-[#ffd02c] p-0 hover:bg-[#ffd02c]/90"
          >
            <ArrowUpRight className="h-5 w-5 text-[#161616]" strokeWidth={2.5} />
            <span className="sr-only">Submit</span>
          </Button>
        </div>
      </div>
    </section>
    </div>
  )
}
