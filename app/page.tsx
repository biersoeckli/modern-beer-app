import BeerCollection from "@/components/beer-collection"
import type { Beer } from "@/lib/types"

// Initial beer data
const initialBeers: Beer[] = [
  {
    id: "1",
    name: "Hoppy Wonder",
    type: "IPA",
    abv: 6.2,
    brewery: "Craft Masters",
    description:
      "A bold IPA with bright citrus notes, hints of grapefruit zest, and a refreshing pine finish. Well-balanced with a moderate bitterness.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Midnight Stout",
    type: "Imperial Stout",
    abv: 7.5,
    brewery: "Dark Brews",
    description:
      "Rich and complex with notes of espresso, dark chocolate, and roasted malt. Velvety smooth mouthfeel with a subtle sweetness on the finish.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Golden Sunshine",
    type: "Pilsner",
    abv: 4.8,
    brewery: "Sunny Brew Co.",
    description:
      "A crisp, clean pilsner with delicate malt character and floral hop aroma. Light-bodied with excellent clarity and a dry, refreshing finish.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">Beer Collection</h1>
          <p className="text-slate-600 max-w-md mx-auto">
            A curated catalog of exceptional craft beers for the discerning enthusiast.
          </p>
        </header>

        <BeerCollection initialBeers={initialBeers} />
      </div>
    </main>
  )
}
