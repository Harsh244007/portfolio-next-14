import "../../public/global.css";
import "../../public/nprogress.css";
export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nav-Projects relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 opacity-0 fade-in">
      {children}
    </div>
  );
}
