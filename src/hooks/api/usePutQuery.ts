import { api } from '@/config/auth/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type PutRequestProps = {
	url: string;
	attributes?: null | undefined;
};

const putRequest = ({ url, attributes }: PutRequestProps) =>
	api.put(url, attributes);

type UsePutQueryProps = {
	hideSuccessToast?: boolean;
	listKeyId?: string | null;
};

const usePutQuery = ({
	hideSuccessToast = false,
	listKeyId = null,
}: UsePutQueryProps) => {
	const queryClient = useQueryClient();

	const { mutate, isLoading, isError, error } = useMutation({
		mutationFn: putRequest, // ✅ `mutationFn` obyekt ichida bo'lishi kerak
		onSuccess: data => {
			if (!hideSuccessToast) {
				console.log('✅ Success:', data);
			}
			if (listKeyId) {
				queryClient.invalidateQueries({ queryKey: [listKeyId] }); // ✅ v5 usuli
			}
		},
		onError: err => {
			console.error('❌ Error:', err);
		},
	});

	return {
		mutate,
		isLoading,
		isError,
		error,
	};
};

export default usePutQuery;
