// import { List } from "@/components/list";

import { EmailVerification } from "@/components/admin/email-verification";
import { Login } from "@/components/admin/login";
import { Register } from "@/components/admin/register";
import { ResetPassword } from "@/components/admin/reset-password";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Mypage } from "@/components/mypage";
import { List } from "@/components/list";
import { Post } from "@/components/post";
import { Show } from "@/components/show";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-100 dark:bg-gray-950">
      <Header/>
      {/* <Register/> */}
      {/* <EmailVerification/> */}
      {/* <ResetPassword/> */}
      <Mypage/>
      {/* <Login/> */}
      {/* <Post/>       */}
      {/* <List/> */}
      {/* <Show/> */}
      <Footer/>
    </div>
  );
}
