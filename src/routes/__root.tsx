import Navbar from "@/components/layout/navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <html lang="en">
      <body className="antialiased dark">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-6">
          <Outlet />
        </main>
      </body>
    </html>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
