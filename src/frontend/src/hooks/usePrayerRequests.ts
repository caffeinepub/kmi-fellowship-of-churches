import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { UrgencyLevel } from '../backend';

interface SubmitPrayerRequestParams {
  fullName: string;
  emailAddress: string;
  phoneNumber: string | null;
  prayerRequest: string;
  urgencyLevel: UrgencyLevel;
}

interface SubmitEmergencyPrayerParams {
  fullName: string;
  emailAddress: string;
  prayerRequest: string;
}

export function useSubmitPrayerRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitPrayerRequestParams) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitPrayerRequest(
        params.fullName,
        params.emailAddress,
        params.phoneNumber,
        params.prayerRequest,
        params.urgencyLevel
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prayerRequests'] });
    },
  });
}

export function useSubmitEmergencyPrayer() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitEmergencyPrayerParams) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitEmergencyPrayer(
        params.fullName,
        params.emailAddress,
        params.prayerRequest
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prayerRequests'] });
      queryClient.invalidateQueries({ queryKey: ['emergencyPrayerRequests'] });
    },
  });
}

export function useGetAllPrayerRequests() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['prayerRequests'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPrayerRequests();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetEmergencyPrayerRequests() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['emergencyPrayerRequests'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEmergencyPrayerRequests();
    },
    enabled: !!actor && !isFetching,
  });
}
