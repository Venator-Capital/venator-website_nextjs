import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "@/pages/Home";
import AIWorkflows from "@/pages/AIWorkflows";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ai-workflows" component={AIWorkflows} />
      <Route>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">404 - Page Not Found</h1>
            <a href="/" className="text-blue-400 hover:text-blue-300">Return Home</a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
