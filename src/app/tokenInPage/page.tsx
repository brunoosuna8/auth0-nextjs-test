import GetTokenComponent from "@/components/GetTokenComponent";
import {getAccessToken} from "@auth0/nextjs-auth0";

export default async function TokenInPage(){
    let token:any;
    try{
        const { accessToken } = await getAccessToken();
        token = accessToken
        console.log("accessToken",accessToken)
    }
    catch (e) {
        console.log("error en catch",e)

    }
    return(
        <GetTokenComponent token={token}></GetTokenComponent>
    )
}