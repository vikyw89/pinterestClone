import { Page } from "@/common/layout/page";
import { SignInComponent } from "@/components/signIn";
import { supabase } from "@/lib/supabase";
import { Inter } from "next/font/google";
import { updateAsyncV, updateSyncV, useQueryV, useSyncV } from "use-sync-v";
import { useQueryVDefaultConfig } from "use-sync-v/dist/lib/useQueryV";

const inter = Inter({ subsets: ["latin"] });

updateSyncV("show.signInComponent", true);

const getAuth = async () => {
  // const response = await supabase.auth.signInWithOAuth({ provider: "google" });
  const response = await supabase.auth.getSession();
  return response;
};

export default function Home() {
  const { data, error, loading } = useQueryV("auth", getAuth);
  const showSignInComponent = useSyncV("show.signInComponent");
  useQueryVDefaultConfig();

  const signInHandler = () => {
    updateAsyncV("auth", signIn, {});
  };

  return (
    <Page>
      {showSignInComponent && !data && <SignInComponent />}
      {loading && <div className="text-base-content">Loading...</div>}
    </Page>
  );
}
