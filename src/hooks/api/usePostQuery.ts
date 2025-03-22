import { api } from '@/config/auth/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type PostRequestProps = {
	url: string;
	attributes?: null | undefined;
	config?: object;
};

const postRequest = ({ url, attributes, config = {} }: PostRequestProps) =>
	api.post(url, attributes, config);

type UsePostQueryProps = {
	hideSuccessToast?: boolean;
	listKeyId?: string | null;
};

const usePostQuery = ({
	hideSuccessToast = false,
	listKeyId = null,
}: UsePostQueryProps) => {
	const queryClient = useQueryClient();

	const { mutate, isLoading, isError, error } = useMutation({
		mutationFn: postRequest, // ✅ v5: `mutationFn` obyekt ichida bo'lishi kerak
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

export default usePostQuery;
