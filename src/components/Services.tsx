import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import PaymentDialog from './PaymentDialog';

const services = [
  {
    title: 'Basic Growth Package',
    price: '₹5,000',
    originalPrice: '₹15,000',
    features: [
      '2-hour strategy session',
      'Website & social media audit',
      'Quick-win recommendations',
    ],
  },
  {
    title: 'Premium Growth Package',
    price: '₹10,000',
    originalPrice: '₹25,000',
    features: [
      '3-hour intensive session',
      'Technical website analysis',
      'Custom growth strategy',
      '1 week of follow-up support',
    ],
    featured: true,
  },
];

export default function Services() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You Get Today
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className={service.featured ? 'bg-primary/5' : ''}>
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-col space-y-2">
                    <span>{service.title}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">
                        {service.price}
                      </span>
                      <span className="text-lg line-through text-muted-foreground">
                        {service.originalPrice}
                      </span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <PaymentDialog 
                  amount={service.price}
                  packageName={service.title}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}