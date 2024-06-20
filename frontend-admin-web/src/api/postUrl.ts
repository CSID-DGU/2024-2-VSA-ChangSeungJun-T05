import { isAxiosError } from "axios";
import { instance } from "./axios";
import { TURLIds } from "@/types/urlList";

export const postUrl = async ({ url_list }: TURLIds) => {
    try {
        await instance.post("/api/url", { url_list : url_list });
    } catch (error) {
        if (isAxiosError(error)) {
            throw new Error(error.response?.data.message);
        }
    }
}