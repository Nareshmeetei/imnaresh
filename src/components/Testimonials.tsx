import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote:
      "My restaurant's online orders increased by 45% after implementing the recommended changes.",
    author: '- Restaurant Owner, Connaught Place',
  },
  {
    quote:
      'Finally got my boutique online and saw immediate results. Social media engagement doubled in a week.',
    author: '- Fashion Boutique, South Extension',
  },
  {
    quote:
      'Professional, quick, and effective. The strategies were easy to implement and showed results.',
    author: '- Legal Firm, Nehru Place',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Other Businesses Like Yours
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author}>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
