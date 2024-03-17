// app/pages/index.tsx
import LandingPage from "@/page-components/landing-page";
import { HomeLayout } from "@/app/layout";

export default function Home() {
  return (
    <HomeLayout>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <LandingPage />
      </main>
    </HomeLayout>
  );
}
