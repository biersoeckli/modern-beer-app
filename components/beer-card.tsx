import Image from "next/image"
import type { Beer } from "@/lib/types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BeerCardProps {
  beer: Beer
}

export default function BeerCard({ beer }: BeerCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 bg-white border-slate-200">
      <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="absolute top-2 right-2">
          <Badge className="bg-indigo-500 hover:bg-indigo-600">{beer.abv}% ABV</Badge>
        </div>
        <Image
          src={beer.image || "/placeholder.svg"}
          alt={beer.name}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <CardHeader className="pb-2">
        <div>
          <h3 className="font-bold text-xl text-slate-800">{beer.name}</h3>
          <p className="text-slate-500 text-sm">{beer.brewery}</p>
        </div>
      </CardHeader>
      <CardContent>
        <Badge variant="outline" className="mb-3 border-indigo-200 text-indigo-700 font-medium">
          {beer.type}
        </Badge>
        <p className="text-slate-600 text-sm leading-relaxed">{beer.description}</p>
      </CardContent>
    </Card>
  )
}
