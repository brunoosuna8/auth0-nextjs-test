import UserInfo from "@/components/UserInfo";
import { getAccessToken } from '@auth0/nextjs-auth0';

export default function Home() {

  return (
      <UserInfo></UserInfo>
  );
}
