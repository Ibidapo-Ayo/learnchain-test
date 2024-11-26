import LoginForm from "@/components/forms/LoginForm";

export default function Home() {
  return (
    <div className="bg-white rounded-[10px] shadow-lg max-w-[518px] mx-auto h-autp pt-5 pb-10 px-20">
      <h1 className="text-textColor text-[28px] font-normal text-center">Welcome back</h1>

      <LoginForm />
    </div>
  );
}
