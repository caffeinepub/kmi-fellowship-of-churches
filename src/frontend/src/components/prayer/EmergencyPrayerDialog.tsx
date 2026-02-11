import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { useSubmitEmergencyPrayer } from '../../hooks/usePrayerRequests';

interface EmergencyPrayerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EmergencyPrayerDialog({ open, onOpenChange }: EmergencyPrayerDialogProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitEmergencyPrayer();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitMutation.mutateAsync({
        fullName,
        emailAddress: email,
        prayerRequest: request,
      });
      setSubmitted(true);
      setTimeout(() => {
        onOpenChange(false);
        setSubmitted(false);
        setFullName('');
        setEmail('');
        setRequest('');
      }, 3000);
    } catch (error) {
      console.error('Failed to submit emergency prayer:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-royal-purple">Emergency Prayer Alert</DialogTitle>
          <DialogDescription>
            Submit an urgent prayer request. Our intercessory team will be notified immediately.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <p className="text-lg font-semibold text-green-600">
              Emergency prayer alert submitted successfully!
            </p>
            <p className="text-sm text-foreground/70 mt-2">
              Our intercessory team has been notified.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="emergency-name">Full Name *</Label>
              <Input
                id="emergency-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="emergency-email">Email Address *</Label>
              <Input
                id="emergency-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="emergency-request">Prayer Request *</Label>
              <Textarea
                id="emergency-request"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                required
                rows={4}
                className="mt-1"
              />
            </div>

            {submitMutation.isError && (
              <div className="text-sm text-red-600">
                Failed to submit emergency prayer. Please try again.
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={submitMutation.isPending}
                className="flex-1 bg-burgundy hover:bg-burgundy/90"
              >
                {submitMutation.isPending ? 'Submitting...' : 'Send Alert'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
