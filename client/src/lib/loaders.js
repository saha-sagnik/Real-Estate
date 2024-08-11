import apirequest from "./apiRequest.js"


export const singlePageLoader = async({ request,params}) =>{
    const res = await apirequest("/posts/"+params.id)
    return res.data;
}