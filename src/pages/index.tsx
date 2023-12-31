import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  const { data } = api.posts.getAll.useQuery();
  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center h-screen">
        <div className="bg-purple-500 h-full w-full md:max-w-2xl border-x border-slate-400">
          <div className="flex border-b border-slate-400 p-4">
            {!user.isSignedIn && <div className="flex justify-right"><SignInButton /></div>}
            {!!user.isSignedIn && <div className="flex justify-right"><SignOutButton /></div>}
          </div>
          <div>
            <Link href="/music" legacyBehavior>
              <a className={buttonVariants({ variant: "outline" })}>Music</a>
            </Link>

            {data?.map((post) => (
              <div className="flex p-1 h-full w-full md:max-w-2xl justify-center" key={post.id}>
                {post.content}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
