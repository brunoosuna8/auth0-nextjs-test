import {getAccessToken} from "@auth0/nextjs-auth0";
export default async function GetTokenComponent({token}:any){


    return(
        <div>Accces Token {token}</div>
    )
}