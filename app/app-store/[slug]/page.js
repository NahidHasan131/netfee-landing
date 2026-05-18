import AppDetailClient from "./AppDetailClient";

/* required for output: export with dynamic routes */
export function generateStaticParams() {
  return [
    { slug: "admin-app"     },
    { slug: "client-app"    },
    { slug: "sms-responder" },
  ];
}

export default function AppDetailPage() {
  return <AppDetailClient />;
}
