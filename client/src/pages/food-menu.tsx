import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function FoodMenu() {
  const [, setLocation] = useLocation();

  const handleBackHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={handleBackHome}
            className="flex items-center gap-2 group"
            data-testid="button-logo-food-menu"
          >
            <img
              src="/logo.png"
              alt="Treat Cater & Events"
              className="h-24 sm:h-28 pb-5 w-auto transition-opacity group-hover:opacity-80"
            />
          </button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleBackHome}
            data-testid="button-back-home"
          >
            Back to Home
          </Button>
        </div>
      </header>

      <main className="flex-1 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 bg-muted/40">
              <h1 className="text-base sm:text-lg font-semibold">
                Food Menu
              </h1>
              <a
                href="/treat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-primary hover:underline"
                data-testid="link-download-menu"
              >
                Open in new tab
              </a>
            </div>
            <div className="relative bg-black/5">
              <object
                data="/treat.pdf"
                type="application/pdf"
                className="w-full h-[calc(100vh-160px)] sm:h-[calc(100vh-180px)]"
              >
                <div className="p-6 text-center text-sm text-muted-foreground space-y-3">
                  <p>
                    The interactive menu preview requires a browser with PDF
                    viewing support.
                  </p>
                  <p>
                    You can{" "}
                    <a
                      href="/treat.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      open the Food Menu PDF in a new tab
                    </a>{" "}
                    to see the exact layout and styling.
                  </p>
                </div>
              </object>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


