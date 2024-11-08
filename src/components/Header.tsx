import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import checkUser from "@/lib/checkUser";

const Header = async () => {
  const user = await checkUser();
  return (
    <nav className="w-full bg-slate-500 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <div className="text-2xl font-bold text-white">Expensor</div>
        <div>
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-slate-500 font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
