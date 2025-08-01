import {api} from "@/lib";

async function getBanners() {
    const {data} = await api.get("Banner");
    return data;
}

export default getBanners;