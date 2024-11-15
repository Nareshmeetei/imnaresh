import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

interface PaymentDialogProps {
  amount: string;
  packageName: string;
}

export default function PaymentDialog({ amount, packageName }: PaymentDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Lock className="mr-2 h-4 w-4" />
          Pay {amount} & Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Pay for {packageName}</DialogTitle>
          <DialogDescription>
            Scan the QR code below or use our UPI ID
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://images.unsplash.com/photo-1614849427248-287c4e88ef58?w=400&h=400&fit=crop"
            alt="Payment QR Code"
            className="rounded-lg border"
            width={300}
            height={300}
          />
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">UPI ID:</span>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              example@okbank
            </code>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}