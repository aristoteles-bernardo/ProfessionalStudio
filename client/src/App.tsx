import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "./pages/not-found";
import Admin from "./pages/Admin";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import ProjectManagement from "@/pages/services/ProjectManagement";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-foreground">
      <Navbar />
      <main className="pt-28">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/services/project-management" component={ProjectManagement} />
          <Route path="/services/data-analysis" component={DataAnalysis} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;