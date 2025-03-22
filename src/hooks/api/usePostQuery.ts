import { api } from '@/config/auth/api';
import { useMutation, useQueryClient } from 'react-query';

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

	const { mutate, isLoading, isError, error } = useMutation<
		unknown, // Serverdan keladigan ma'lumot
		unknown, // Xatolik turi
		PostRequestProps // Mutate-ga beriladigan argumentlar
	>(params => postRequest(params), {
		onSuccess: data => {
			if (!hideSuccessToast) {
				console.log('✅ Success:', data);
			}
			if (listKeyId) {
				queryClient.invalidateQueries(listKeyId);
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
