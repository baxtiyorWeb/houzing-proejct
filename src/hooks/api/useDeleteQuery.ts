import { api } from '@/config/auth/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteRequest = (url: string) => api.delete(url);

type UseDeleteQueryProps = {
	listKeyId?: string | null;
};

const useDeleteQuery = ({ listKeyId = null }: UseDeleteQueryProps) => {
	const queryClient = useQueryClient();

	const { mutate, isLoading, isError, error } = useMutation({
		mutationFn: ({ url }: { url: string }) => deleteRequest(url),
		onSuccess: () => {
			if (listKeyId) {
				queryClient.invalidateQueries({ queryKey: [listKeyId] });
			}
		},
		onError: error => {
			console.error('❌ Delete query error:', error);
		},
	});

	return {
		mutate,
		isLoading,
		isError,
		error,
	};
};

export default useDeleteQuery;
