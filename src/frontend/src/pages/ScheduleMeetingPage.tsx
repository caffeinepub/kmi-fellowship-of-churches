import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import { useSubmitAppointmentRequest } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { RequestType, UrgencyLevel } from '../backend';

interface FormData {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  churchOrOrganization: string;
  requestType: string;
  leaderRequested: string;
  preferredDate: Date | undefined;
  preferredTime: string;
  urgencyLevel: string;
  details: string;
  consentGiven: boolean;
}

export default function ScheduleMeetingPage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      consentGiven: false,
    },
  });

  const submitMutation = useSubmitAppointmentRequest();
  const consentGiven = watch('consentGiven');
  const requestType = watch('requestType');
  const urgencyLevel = watch('urgencyLevel');

  const onSubmit = async (data: FormData) => {
    if (!isAuthenticated) {
      alert('Please log in to submit an appointment request.');
      return;
    }

    if (!data.preferredDate) {
      alert('Please select a preferred date.');
      return;
    }

    const [hours, minutes] = data.preferredTime.split(':').map(Number);
    const preferredTimeInMinutes = hours * 60 + minutes;

    const requestTypeMap: Record<string, RequestType> = {
      'Counseling': RequestType.prayerCounseling,
      'Marriage Counseling': RequestType.prayerCounseling,
      'Prayer Meeting': RequestType.prayerCounseling,
      'House Visit': RequestType.consultation,
      'Hospital Visit': RequestType.consultation,
      'Nursing Home Visit': RequestType.consultation,
      'Funeral Request': RequestType.consultation,
      'Leadership Booking / Speaking Engagement': RequestType.speakingEngagement,
      'Other': RequestType.other,
    };

    const urgencyLevelMap: Record<string, UrgencyLevel> = {
      'Routine': UrgencyLevel.routine,
      'Time-Sensitive': UrgencyLevel.timeSensitive,
      'Emergency (Hospital / Funeral)': UrgencyLevel.emergency,
    };

    try {
      await submitMutation.mutateAsync({
        fullName: data.fullName,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
        churchOrOrganization: data.churchOrOrganization || undefined,
        requestType: requestTypeMap[data.requestType] || RequestType.other,
        leaderRequested: data.leaderRequested,
        preferredDate: BigInt(data.preferredDate.getTime()),
        preferredTime: BigInt(preferredTimeInMinutes),
        urgencyLevel: urgencyLevelMap[data.urgencyLevel] || UrgencyLevel.routine,
        details: data.details,
        consentGiven: data.consentGiven,
        submittedBy: undefined,
        submittedAt: BigInt(0),
      });

      setSubmitted(true);
      reset();
      setSelectedDate(undefined);
    } catch (error: any) {
      alert(error.message || 'Failed to submit request. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <PageSection>
        <div className="max-w-2xl mx-auto text-center">
          <PageTitle>Schedule a Meeting with Leadership</PageTitle>
          <BodyText>
            To schedule an appointment, please log in first. This helps us keep your information secure and allows us to
            track your request.
          </BodyText>
          <Button
            onClick={login}
            disabled={loginStatus === 'logging-in'}
            className="btn-primary"
          >
            {loginStatus === 'logging-in' ? 'Logging in...' : 'Log In to Continue'}
          </Button>
        </div>
      </PageSection>
    );
  }

  if (submitted) {
    return (
      <PageSection>
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle2 className="text-[oklch(var(--flame-gold))] mx-auto mb-6" size={80} />
          <PageTitle>Request Submitted Successfully!</PageTitle>
          <BodyText>
            Thank you for your appointment request. Our leadership team will review your request and contact you soon to
            confirm the details.
          </BodyText>
          <BodyText className="text-sm text-muted-foreground">
            Please note: Submitting a request does not guarantee an appointment until confirmation is received.
          </BodyText>
          <Button onClick={() => setSubmitted(false)} className="btn-primary mt-4">
            Submit Another Request
          </Button>
        </div>
      </PageSection>
    );
  }

  return (
    <>
      <PageSection>
        <PageTitle>Schedule a Meeting with Leadership</PageTitle>
        <p className="text-lg text-[oklch(var(--anointed-purple))] font-semibold mb-4">
          Pastoral Care • Counseling • Ministry Requests
        </p>
        <BodyText>
          At KMI Fellowship of Churches and Elohim's International Revival Center, we believe in personal ministry,
          pastoral care, and spiritual support. Our leadership is available by appointment for counseling, prayer, and
          ministry-related requests.
        </BodyText>
        <BodyText>
          Appointments are scheduled through the request form below and reviewed by our administrative team to ensure
          timely and appropriate response.
        </BodyText>
      </PageSection>

      <PageSection background="muted">
        <SectionTitle>Types of Appointments & Requests</SectionTitle>
        <BodyText>You may request an appointment or visit for the following:</BodyText>
        <ul className="grid md:grid-cols-2 gap-3 text-foreground mt-4">
          {[
            'Pastoral Counseling',
            'Marriage & Family Counseling',
            'Spiritual Guidance & Prayer',
            'Leadership Consultation',
            'House Visit',
            'Hospital Visit',
            'Nursing Home Visit',
            'Visit to the Sick or Shut-In',
            'Funeral & Memorial Service Requests',
            'Leadership Booking (Speaking Engagements, Conferences, Events)',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection>
        <SectionTitle>Leadership Appointment Request Form</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-6">
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName" className="required">
              Full Name *
            </Label>
            <Input
              id="fullName"
              {...register('fullName', { required: 'Full Name is required' })}
              className={errors.fullName ? 'border-destructive' : ''}
            />
            {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Email Address */}
          <div>
            <Label htmlFor="emailAddress">Email Address *</Label>
            <Input
              id="emailAddress"
              type="email"
              {...register('emailAddress', {
                required: 'Email Address is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
              className={errors.emailAddress ? 'border-destructive' : ''}
            />
            {errors.emailAddress && <p className="text-destructive text-sm mt-1">{errors.emailAddress.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              id="phoneNumber"
              type="tel"
              {...register('phoneNumber', { required: 'Phone Number is required' })}
              className={errors.phoneNumber ? 'border-destructive' : ''}
            />
            {errors.phoneNumber && <p className="text-destructive text-sm mt-1">{errors.phoneNumber.message}</p>}
          </div>

          {/* Church / Organization */}
          <div>
            <Label htmlFor="churchOrOrganization">Church / Organization (if applicable)</Label>
            <Input id="churchOrOrganization" {...register('churchOrOrganization')} />
          </div>

          {/* Request Type */}
          <div>
            <Label htmlFor="requestType">Request Type *</Label>
            <Select
              value={requestType}
              onValueChange={(value) => setValue('requestType', value, { shouldValidate: true })}
            >
              <SelectTrigger className={errors.requestType ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select request type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Counseling">Counseling</SelectItem>
                <SelectItem value="Marriage Counseling">Marriage Counseling</SelectItem>
                <SelectItem value="Prayer Meeting">Prayer Meeting</SelectItem>
                <SelectItem value="House Visit">House Visit</SelectItem>
                <SelectItem value="Hospital Visit">Hospital Visit</SelectItem>
                <SelectItem value="Nursing Home Visit">Nursing Home Visit</SelectItem>
                <SelectItem value="Funeral Request">Funeral Request</SelectItem>
                <SelectItem value="Leadership Booking / Speaking Engagement">
                  Leadership Booking / Speaking Engagement
                </SelectItem>
                <SelectItem value="Other">Other (with explanation)</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" {...register('requestType', { required: 'Request Type is required' })} />
            {errors.requestType && <p className="text-destructive text-sm mt-1">{errors.requestType.message}</p>}
          </div>

          {/* Leader Requested */}
          <div>
            <Label htmlFor="leaderRequested">Leader You Are Requesting to Meet With *</Label>
            <Input
              id="leaderRequested"
              placeholder="Please list the leader you are requesting, if applicable."
              {...register('leaderRequested', { required: 'This field is required' })}
              className={errors.leaderRequested ? 'border-destructive' : ''}
            />
            {errors.leaderRequested && <p className="text-destructive text-sm mt-1">{errors.leaderRequested.message}</p>}
          </div>

          {/* Preferred Date */}
          <div>
            <Label>Preferred Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${!selectedDate && 'text-muted-foreground'} ${
                    errors.preferredDate ? 'border-destructive' : ''
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setValue('preferredDate', date, { shouldValidate: true });
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <input type="hidden" {...register('preferredDate', { required: 'Preferred Date is required' })} />
            {errors.preferredDate && <p className="text-destructive text-sm mt-1">{errors.preferredDate.message}</p>}
          </div>

          {/* Preferred Time */}
          <div>
            <Label htmlFor="preferredTime">Preferred Time *</Label>
            <Input
              id="preferredTime"
              type="time"
              {...register('preferredTime', { required: 'Preferred Time is required' })}
              className={errors.preferredTime ? 'border-destructive' : ''}
            />
            {errors.preferredTime && <p className="text-destructive text-sm mt-1">{errors.preferredTime.message}</p>}
          </div>

          {/* Urgency Level */}
          <div>
            <Label htmlFor="urgencyLevel">Urgency Level *</Label>
            <Select
              value={urgencyLevel}
              onValueChange={(value) => setValue('urgencyLevel', value, { shouldValidate: true })}
            >
              <SelectTrigger className={errors.urgencyLevel ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Routine">Routine</SelectItem>
                <SelectItem value="Time-Sensitive">Time-Sensitive</SelectItem>
                <SelectItem value="Emergency (Hospital / Funeral)">Emergency (Hospital / Funeral)</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" {...register('urgencyLevel', { required: 'Urgency Level is required' })} />
            {errors.urgencyLevel && <p className="text-destructive text-sm mt-1">{errors.urgencyLevel.message}</p>}
          </div>

          {/* Details */}
          <div>
            <Label htmlFor="details">Details of Request *</Label>
            <Textarea
              id="details"
              rows={5}
              placeholder="Please provide details regarding your request so we can serve you effectively."
              {...register('details', { required: 'Details are required' })}
              className={errors.details ? 'border-destructive' : ''}
            />
            {errors.details && <p className="text-destructive text-sm mt-1">{errors.details.message}</p>}
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="consentGiven"
              checked={consentGiven}
              onCheckedChange={(checked) => setValue('consentGiven', checked === true, { shouldValidate: true })}
            />
            <Label htmlFor="consentGiven" className="cursor-pointer font-normal">
              I understand this request is subject to availability and confirmation. *
            </Label>
          </div>
          {errors.consentGiven && <p className="text-destructive text-sm">{errors.consentGiven.message}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={submitMutation.isPending || !consentGiven}
            className="btn-primary w-full"
          >
            {submitMutation.isPending ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      </PageSection>
    </>
  );
}
