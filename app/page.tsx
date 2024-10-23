import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuthButtons } from "@/components/auth-buttons";
import { ArrowRight, CheckCircle2, Code2, Rocket, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AuthButtons />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Build Something
                <span className="text-primary"> Amazing</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Create stunning websites with our modern platform. Fast, secure, and beautifully designed.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="h-12">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-24 md:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <Card className="p-6 space-y-4">
            <Zap className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-bold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Optimized for speed and performance, delivering exceptional user experiences.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <Code2 className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-bold">Modern Tech Stack</h3>
            <p className="text-muted-foreground">
              Built with Next.js, React, and Tailwind CSS for maximum flexibility.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <Rocket className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-bold">Ready to Scale</h3>
            <p className="text-muted-foreground">
              Designed to grow with your needs, from startup to enterprise.
            </p>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary/5 py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Why Choose Our Platform?
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <p>Advanced security features built-in</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <p>Seamless integration capabilities</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <p>24/7 expert support available</p>
                </div>
              </div>
              <Button size="lg">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Modern workspace with laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Join thousands of satisfied users building amazing projects with our platform.
            </p>
            <Button size="lg" className="h-12">
              Start Building Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}