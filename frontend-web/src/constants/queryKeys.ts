import { getUrl } from "@/app/api/getUrl";

export const getUrlQueryKey = (url: string) => {
    return {
        queryKey: ['urlInfo', url],
        queryFn: async () => (await getUrl(url)),
    }
}