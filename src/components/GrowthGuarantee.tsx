import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const guaranteeFeatures = [
  {
    title: 'Transparent Tracking',
    description: 'Monthly revenue tracking with clear metrics',
  },
  {
    title: 'Progress Reports',
    description: 'Regular growth tracking updates',
  },
  {
    title: 'No Questions Asked',
    description: 'Simple refund process if target not met',
  },
];

const steps = [
  'Document your current monthly revenue before starting',
  'Implement our recommended strategies',
  'Track revenue growth over 3 months',
  'Get full refund if 25% growth target isn\'t met',
];

export default function GrowthGuarantee() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary/90 to-primary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Growth Guarantee</h2>
            </div>
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  100% Money-Back Growth Guarantee
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  If your business doesn't see at least 25% revenue growth within 3 months of implementing our recommendations, we'll refund your entire consulting fee.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  {guaranteeFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t pt-6">
                  <h4 className="font-semibold mb-2">How It Works:</h4>
                  <ol className="text-left text-muted-foreground space-y-2">
                    {steps.map((step, index) => (
                      <li key={step} className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-secondary/30 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-primary">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">
                All packages include our 25% growth guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}