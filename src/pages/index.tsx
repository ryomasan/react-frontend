// import { List } from "@/components/list";

import { EmailVerification } from "./admin/email-verification";
import { Login } from "./admin/login";
import { Register } from "./admin/register";
import { ResetPassword } from "./admin/reset-password";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Post } from "../components/create";
import { Show } from "../components/show";
import { QRScan } from "../components/qrscan";
import Link from "../../node_modules/next/link";
import Mypage from "./auth/mypage";
import Index from "./post/index";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-100 dark:bg-gray-950">
      <Header />
      {/* <Link href="auth/register">ああああ</Link> */}
      {/* <Register /> */}
      {/* <EmailVerification/> */}
      {/* <ResetPassword/> */}
      {/* <Mypage/> */}
      {/* <QRScan/> */}

      {/* <Login/> */}
      {/* <Post/>       */}
      {/* <List/> */}
      {/* <Show/> */}
      <Footer />
    </div>
  );
}
