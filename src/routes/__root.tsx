import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Educando — Atividades prontas para professoras do 1º ao 5º ano" },
      { name: "description", content: "Centenas de atividades dinâmicas e divertidas. Planeje suas aulas em minutos e volte a sentir prazer em ensinar." },
      { name: "author", content: "Educando" },
      { property: "og:title", content: "Educando — Atividades prontas para professoras do 1º ao 5º ano" },
      { property: "og:description", content: "Centenas de atividades dinâmicas e divertidas. Planeje suas aulas em minutos e volte a sentir prazer em ensinar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Educando — Atividades prontas para professoras do 1º ao 5º ano" },
      { name: "twitter:description", content: "Centenas de atividades dinâmicas e divertidas. Planeje suas aulas em minutos e volte a sentir prazer em ensinar." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/85a558c1-199c-4dbf-9bb6-5b04c3a07c90/id-preview-a65004ee--28461580-a854-4f45-953c-50587b55afeb.lovable.app-1778882854177.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/85a558c1-199c-4dbf-9bb6-5b04c3a07c90/id-preview-a65004ee--28461580-a854-4f45-953c-50587b55afeb.lovable.app-1778882854177.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700;1,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        children: `window.pixelId = "6a1227e587c5368f69744172";var a = document.createElement("script");a.setAttribute("async", "");a.setAttribute("defer", "");a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");document.head.appendChild(a);`,
      },
      {
        src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
        async: true,
        defer: true,
        "data-utmify-prevent-xcod-sck": "",
        "data-utmify-prevent-subids": "",
      } as any,
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
