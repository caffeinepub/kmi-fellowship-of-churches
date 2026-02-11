import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useSubmitPrayerRequest } from '../hooks/usePrayerRequests';
import { UrgencyLevel } from '../backend';

export default function PrayerRequestPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');
  const [urgency, setUrgency] = useState<UrgencyLevel>(UrgencyLevel.routine);
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitPrayerRequest();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitMutation.mutateAsync({
        fullName,
        emailAddress: email,
        phoneNumber: phone || null,
        prayerRequest: request,
        urgencyLevel: urgency,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit prayer request:', error);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white border-2 border-gold rounded-lg p-12 shadow-lg text-center">
            <div className="text-6xl mb-6">✓</div>
            <h1 className="text-4xl font-display font-bold mb-4 text-royal-purple">
              Prayer Request Submitted
            </h1>
            <p className="text-lg mb-8 text-foreground/80">
              Thank you for sharing your prayer request with us. Our intercessory team will lift you up in prayer.
            </p>
            <Button
              onClick={() => navigate({ to: '/' })}
              className="bg-gold hover:bg-gold/90 text-charcoal"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white border-2 border-gold rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-display font-bold mb-4 text-royal-purple text-center">
            Prayer Request
          </h1>
          <p className="text-center text-lg mb-8 text-foreground/70">
            Share your prayer needs with our intercessory team
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="urgency">Urgency Level *</Label>
              <Select value={urgency} onValueChange={(value) => setUrgency(value as UrgencyLevel)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={UrgencyLevel.routine}>Routine</SelectItem>
                  <SelectItem value={UrgencyLevel.timeSensitive}>Time Sensitive</SelectItem>
                  <SelectItem value={UrgencyLevel.emergency}>Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="request">Prayer Request *</Label>
              <Textarea
                id="request"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                required
                rows={6}
                className="mt-1"
              />
            </div>

            <div className="bg-cream border border-gold/30 rounded-lg p-4 text-sm text-foreground/70">
              <p className="font-semibold mb-2">Privacy & Consent:</p>
              <p>
                Your prayer request will be shared with our intercessory prayer team. We respect your privacy and will handle your request with care and confidentiality.
              </p>
            </div>

            {submitMutation.isError && (
              <div className="text-sm text-red-600 text-center">
                Failed to submit prayer request. Please try again.
              </div>
            )}

            <Button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full bg-gold hover:bg-gold/90 text-charcoal text-lg py-6"
            >
              {submitMutation.isPending ? 'Submitting...' : 'Submit Prayer Request'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
