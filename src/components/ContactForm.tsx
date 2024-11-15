import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Thanks for your interest!',
      description: "We'll contact you shortly to schedule your consultation.",
    });
  };

  return (
    <div id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Book Your Session. Increase Your Revenue.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input id="business" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input id="whatsapp" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website (if any)</Label>
                  <Input id="website" type="url" />
                </div>
                <Button type="submit" className="w-full">
                  Schedule Consultation
                </Button>
              </form>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Or WhatsApp directly: +91 9871978066
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
