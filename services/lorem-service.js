import { toastError, ToastMessages } from '~/composables/toast';
const loremApi = 'https://dinoipsum.com/api/';

export class LoremService {
    /**
     * @param {Object} params
     * @param {string} params.format
     * @param {number} params.words
     * @param {number} params.paragraphs
     *
     * @returns {Promise<Response>}
     */
    static async getLoremText (params) {
        const { data, error } = await useAsyncData('get',
            () => $fetch(loremApi, {
                params: {
                    format: 'json',
                    ...params,
                },
            }),
        );

        if (error.value) {
            toastError(ToastMessages.serverError);
            return null;
        }
        return data.value;
    };
}
