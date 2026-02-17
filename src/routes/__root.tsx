import Footer from "@/components/layout/footer";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <html lang="en">
      <body className="antialiased dark bg-neutral-900 text-lg">
        <Outlet />
        <Footer />
      </body>
    </html>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
