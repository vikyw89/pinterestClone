import Image from "next/image";

export const SignInComponent = () => {
  return (
    <div className=" bg-black bg-opacity-70 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="card w-96 glass flex flex-col items-center justify-start p-10">
        <Image src="./p-logo-lowres.png" width="100" height="100" />
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      {/* <div className="bg-slate-950 rounded-3xl z-50 p-5 flex flex-col items-center justify-center gap-5 text-slate-100 max-w-xs">
        <Image src="./p-logo-lowres.png" width="100" height="100" />
        <p className="font-extrabold text-4xl text-slate-200 text-center">
          Welcome to Panterest
        </p>
        <div className="flex flex-col">
          <label for="email" className="p-2 text-base">
            Email
          </label>
          <input
            id="email"
            className=" p-2 rounded-xl bg-transparent "
            placeholder="Email"
            value=""
          />
          <label for="password" className="p-2 text-base">
            Password
          </label>
          <input
            id="email"
            type="password"
            className=" p-2 rounded-xl bg-transparent "
            placeholder="Password"
            value=""
          />
          <a className="font-bold">Forgot your password?</a>
          <button className="bg-red-700 p-2 rounded-3xl text-xl font-bold">
            Log in
          </button>
          <p className="text-center">OR</p>
          <button className="flex bg-transparent border-slate-400 rounded-3xl p-2 items-center gap-2">
            <Image height="30" width="30" src="./Google__G__Logo.svg" />
            Continue with Google
          </button>
          <p>
            By continuing, you agree to Pinterest's Terms of Service; Opens a
            new tab and acknowledge you've read our Privacy Policy; Opens a new
            tab. Notice at collection; Opens a new tab.
          </p>
        </div>
      </div> */}
    </div>
  );
};
