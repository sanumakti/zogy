import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src="/zogy-head-logo.png" alt="ZOGY Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-bold text-xl">ZOGY</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#tokenomics" className="text-sm font-medium hover:text-primary transition-colors">
              Tokenomics
            </a>
            <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">
              Community
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-balance">ZOGY</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  The memecoin that's hopping to the moon! 🐸🚀
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contract Address</h3>
                <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                  <code className="text-sm font-mono flex-1">Coming Soon</code>
                  <Button size="sm" variant="ghost">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Buy $ZOGY
                </Button>
                <Button size="lg" variant="outline">
                  View Chart
                </Button>
              </div>

              <div className="flex items-center space-x-4">
                <Button size="sm" variant="ghost">
                  <img src="/twitter-icon.png" alt="Twitter" className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost">
                  <img src="/telegram-icon.webp" alt="Telegram" className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img src="/zogy-mascot.png" alt="ZOGY Frog Mascot" className="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/zogy-full-body-mascot.png" alt="ZOGY Full Body Mascot" className="w-80 h-80 object-contain" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-balance">About Zogy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Zogy the Frog isn't just another memecoin – it's a movement. Born from the swamps of crypto
                  innovation, Zogy hops where others crawl.
                </p>
                <p>
                  With our unique tokenomics and strong community focus, we're building an ecosystem that rewards
                  holders and creates real utility in the memecoin space.
                </p>
                <p>Join our pond and experience the most ribbiting journey in crypto!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <CardTitle>Total Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">1,000,000,000</div>
                <CardDescription>1 Billion $ZOGY</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <CardTitle>LP Pool</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">10%</div>
                <CardDescription>Liquidity provision</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">5%</div>
                <CardDescription>Game development</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Community</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/twitter-icon.png" alt="Twitter" className="w-8 h-8" />
                </div>
                <CardTitle>Twitter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Follow us for updates and memes</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/telegram-icon.webp" alt="Telegram" className="w-8 h-8" />
                </div>
                <CardTitle>Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Join our active community chat</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img src="/zogy-head-logo.png" alt="ZOGY Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-bold text-xl">ZOGY</span>
            </div>

            <div className="flex items-center space-x-4">
              <Button size="sm" variant="ghost">
                <img src="/twitter-icon.png" alt="Twitter" className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost">
                <img src="/telegram-icon.webp" alt="Telegram" className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground space-y-2">
            <p>© 2025 Zogy the Frog. All rights reserved.</p>
            <p>$ZOGY is a meme coin with no intrinsic value or financial return expectation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
