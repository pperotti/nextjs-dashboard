import LoginForm from "@/app/ui/login/login-form";
import AcmeLogo from "@/app/ui/acme-logo"

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <AcmeLogo />
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <LoginForm/>
            </div>
        </main>
    );
}