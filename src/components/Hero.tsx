import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl">
          Boost Your Business Revenue by %25
          <span className="mt-2 block text-primary"></span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Get your expert website & social media strategies today. Limited-time
          offer: ₹5,000 consultation (Regular ₹15,000)
        </p>
        <Button size="lg" className="mt-8 px-8" asChild>
          <a href="#contact">Book Your Same-Day Session</a>
        </Button>
      </div>
    </div>
  );
}
