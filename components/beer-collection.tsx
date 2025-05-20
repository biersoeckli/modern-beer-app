"use client"

import { useState } from "react"
import type { Beer } from "@/lib/types"
import BeerCard from "./beer-card"
import AddBeerDialog from "./add-beer-dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { motion } from "framer-motion"

interface BeerCollectionProps {
  initialBeers: Beer[]
}

export default function BeerCollection({ initialBeers }: BeerCollectionProps) {
  const [beers, setBeers] = useState<Beer[]>(initialBeers)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddBeer = (newBeer: Beer) => {
    setBeers([...beers, { ...newBeer, id: (beers.length + 1).toString() }])
    setIsDialogOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">My Collection</h2>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Beer
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beers.map((beer, index) => (
          <motion.div
            key={beer.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <BeerCard beer={beer} />
          </motion.div>
        ))}
      </div>

      <AddBeerDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onAddBeer={handleAddBeer} />
    </div>
  )
}
