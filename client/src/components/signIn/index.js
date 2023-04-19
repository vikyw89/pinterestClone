import Image from "next/image";
import { updateSyncV } from "use-sync-v";

export const SignInComponent = () => {
  const closeComponent = (e) => {
    if (e.target.id !== "blurredBackground") return;
    updateSyncV("show.signInComponent", false);
  };
  return (
    <div
      id="blurredBackground"
      className="z-50 bg-base-300 text-base-content bg-opacity-20 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"
      onClick={closeComponent}
    >
      <div className="flex flex-col items-center justify-start p-10 max-w-sm rounded-box bg-neutral text-neutral-content">
        <Image src="./p-logo-lowres.png" width="100" height="100" />
        <p className="font-extrabold text-center">Welcome to Pinterest</p>
        <div className="flex flex-col gap-1">
          <label for="email" className="pl-4">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs bg-opacity-20 placeholder-neutral-content"
          />
          <label for="password" className="pl-4 ">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs bg-opacity-20  placeholder-neutral-content"
          />
          <a className="font-bold text-sm text-center">Forgot your password?</a>
          <button className="btn w-full btn-primary text-primary-content">
            Log in
          </button>
          <p className="text-center">OR</p>
          <button className="btn flex bg-transparent border-accent rounded-box items-center gap-2">
            <Image height="30" width="30" src="./Google__G__Logo.svg" />
            <p className="text-neutral-content">Continue with Google</p>
          </button>
          <p className="text-center text-xs">
            By continuing, you agree to Pinterest's Terms of Service and
            acknowledge you've read our Privacy Policy Notice at collection.
          </p>
        </div>
      </div>
    </div>
  );
};
