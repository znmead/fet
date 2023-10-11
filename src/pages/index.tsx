import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
// import Script from 'next/script'
import Link from "next/link";

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
      {/* <Script src="http://localhost:8097" /> */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">

        <div>
          {/* // DISPLAY IF USER IS SIGNED OUT */}
          {!user.isSignedIn && <SignInButton>
            <button style={{ color: 'skyblue' }}>Sign in with Clerk</button>
          </SignInButton>}

          {/* // DISPLAY IF USER IS SIGNED IN */}
          {!!user.isSignedIn && <SignOutButton>
            <button style={{ color: 'skyblue' }}>Sign out with Clerk</button>
          </SignOutButton>}
        </div>
        <div>
          {data?.map((post) => (<div key={post.id}>{post.content}</div>
          ))}
        </div>

      </main>
    </>
  );
}
