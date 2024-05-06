import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import * as User from "./auth/Index";
import * as Post from "./posts/Index";
import * as Mypage from "./mypage/Index";
// import "../styles/globals.css";



export default function Home() {
  return (
    <div className="flex h-full w-full flex-col bg-gray-100 dark:bg-gray-950">
      <Header />
      {/* <User.EmailVerification/>
      <User.Register/>
      <User.Login/>
      <User.ResetPassword/> */}


      {/* <Post.Home/>
      <Post.Create/>
      <Post.Show/> */}

       {/* <Mypage.Info/>
       <Mypage.QRScan/> */}
      <Footer />
    </div>
  );
}
