import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <section className="min-h-screen flex justify-betwen h-screen">
      <div className="w-2/5 flex bg-secondary justify-center h-full items-center border p-12">
        <Image
          src="/static/images/auth/login.svg"
          width={500}
          height={500}
          alt="login"
        />
      </div>
      <div className="px-12 flex flex-col justify-center items-center w-3/5">
        <h1 className="text-5xl font-semibold">Login</h1>
        <form className="flex flex-col gap-2 mt-8" autoComplete="off">
          <section className="flex flex-col gap-1">
            <label htmlFor="username" className="text-2xl">
              Username
            </label>
            <input
              placeholder="habitbuilder"
              type="text"
              name="username"
              className="border-2 rounded-md px-2 py-1 focus:outline-none focus:border-secondary"
            />
          </section>
          <section className="flex flex-col gap-1">
            <label htmlFor="pswd" className="text-2xl">
              Password
            </label>
            <input
              placeholder="••••••••••"
              type="password"
              name="pswd"
              className="border-2 rounded-md px-2 py-1 focus:outline-none focus:border-secondary"
            />
          </section>
          <section className="mt-4 text-center">
            <button className="w-full text-xl px-6 py-2 bg-secondary text-white rounded">
              Submit
            </button>
          </section>
        </form>
        <div className="mt-6">
          <Link href="/auth/register">
            <p>
              Don&apos;t have an account?
              <span className="text-secondary underline underline-offset-2 cursor-pointer">
                {" "}
                Sign Up for free!
              </span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
