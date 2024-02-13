import { LoginButton } from "@/auth/LoginButton";

function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen m-auto text-lg  text-gray-700 italic">
        <LoginButton />
      </div>
    </main>
  );
}
export default Home;
