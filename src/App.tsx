import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Technical from "@/pages/Technical";
import LandingPage from "./pages/LandingPage";
import Photography from "./pages/Photography";
import React, { Suspense } from "react";

const ParticleBackground = React.lazy(() => import("./components/Particles"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/technical" component={Technical} />
      <Route path="/photography" component={Photography} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
        <Router />
        <Toaster />
    </QueryClientProvider>
  );
}

export default App;
