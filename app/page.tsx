import BeerCollection from "@/components/beer-collection"
import type { Beer } from "@/lib/types"
import { PrismaClient } from "@/generated/prisma";
import dataAccess from "./server/data-access.client";

export default async function Home() {

  // ugly hack because of docker build
  const getStaticProps = async () => {
    if (process.env.SKIP_BUILD_STATIC === 'true') {
      return [];
    }

    const beers = await dataAccess.client.beer.findMany();
    return beers;
  };
  // Fetch beers from the database
  const beers: Beer[] = await getStaticProps();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">Beer Collection</h1>
          <p className="text-slate-600 max-w-md mx-auto">
            A curated catalog of exceptional craft beers for the discerning enthusiast.
          </p>
        </header>

        <BeerCollection initialBeers={beers} />
      </div>
    </main>
  )
}
