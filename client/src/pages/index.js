import { Page } from "@/common/layout/page";
import { SignInComponent } from "@/components/signIn";
import { supabase } from "@/lib/supabase";
import { Inter } from "next/font/google";
import { updateAsyncV, updateSyncV, useQueryV, useSyncV } from "use-sync-v";

const inter = Inter({ subsets: ["latin"] });

updateSyncV("show.signInComponent", true);

const getAuth = async () => {
  // const response = await supabase.auth.signInWithOAuth({ provider: "google" });
  const response = await supabase.auth.getSession();
  return response;
};

export default function Home() {
  const { data } = useQueryV("auth", getAuth);
  const showSignInComponent = useSyncV("show.signInComponent");

  const signInHandler = () => {
    updateAsyncV("auth", signIn, {});
  };

  return (
    <Page>
      {showSignInComponent && !data && <SignInComponent />}
    </Page>
  );
}
