"use client"

import type React from "react"

import { useState } from "react"
import type { Beer } from "@/lib/types"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface AddBeerDialogProps {
  isOpen: boolean
  onClose: () => void
  onAddBeer: (beer: Beer) => void
}

export default function AddBeerDialog({ isOpen, onClose, onAddBeer }: AddBeerDialogProps) {
  const [formData, setFormData] = useState<Omit<Beer, "id">>({
    name: "",
    type: "",
    abv: 0,
    brewery: "",
    description: "",
    image: "/placeholder.svg?height=200&width=200",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "abv" ? Number.parseFloat(value) || 0 : value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.type.trim()) newErrors.type = "Type is required"
    if (!formData.brewery.trim()) newErrors.brewery = "Brewery is required"
    if (formData.abv <= 0) newErrors.abv = "ABV must be greater than 0"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onAddBeer(formData as Beer)
      setFormData({
        name: "",
        type: "",
        abv: 0,
        brewery: "",
        description: "",
        image: "/placeholder.svg?height=200&width=200",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-slate-800 text-xl">Add a New Beer</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700">
              Beer Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`border-slate-200 focus:border-indigo-300 ${errors.name ? "border-red-300" : ""}`}
              placeholder="Enter beer name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="type" className="text-slate-700">
                Type
              </Label>
              <Input
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`border-slate-200 focus:border-indigo-300 ${errors.type ? "border-red-300" : ""}`}
                placeholder="IPA, Stout, etc."
              />
              {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="abv" className="text-slate-700">
                ABV %
              </Label>
              <Input
                id="abv"
                name="abv"
                type="number"
                step="0.1"
                value={formData.abv || ""}
                onChange={handleChange}
                className={`border-slate-200 focus:border-indigo-300 ${errors.abv ? "border-red-300" : ""}`}
                placeholder="5.0"
              />
              {errors.abv && <p className="text-red-500 text-xs mt-1">{errors.abv}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brewery" className="text-slate-700">
              Brewery
            </Label>
            <Input
              id="brewery"
              name="brewery"
              value={formData.brewery}
              onChange={handleChange}
              className={`border-slate-200 focus:border-indigo-300 ${errors.brewery ? "border-red-300" : ""}`}
              placeholder="Enter brewery name"
            />
            {errors.brewery && <p className="text-red-500 text-xs mt-1">{errors.brewery}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-slate-700">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border-slate-200 focus:border-indigo-300 min-h-[100px]"
              placeholder="Describe the flavor profile, aroma, and other characteristics..."
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="border-slate-200 text-slate-700">
              Cancel
            </Button>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white ml-2">
              Add Beer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
