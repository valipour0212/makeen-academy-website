import {FooterResponse} from "@/types/footer";
import {api} from "@/lib";


async function getFooter(): Promise<FooterResponse> {
    const {data} = await api.get("/Footer")
    return data
}

export default getFooter