import { backendApi } from "@/config/axios.config";
import { ISaveScoreRequestParams, ISaveScoreRequestResult } from "@/interfaces/ISaveScoreRequest";

export const saveScore = async (data: ISaveScoreRequestParams): Promise<ISaveScoreRequestResult> => {
    try {
        const response = await backendApi.post('/quiz/saveScore', data);
        return response.status === 201 ? { success: true } : { success: false };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
};