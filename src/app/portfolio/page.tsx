"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "Modern Lakeside Villa",
    category: "residential",
    type: "Virtual Tour",
    location: "Lake Tahoe, CA",
    description:
      "A stunning modern villa with panoramic lake views and luxurious amenities.",
    image:
      "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Downtown Office Complex",
    category: "commercial",
    type: "3D Rendering",
    location: "Chicago, IL",
    description:
      "A contemporary office complex in the heart of the business district.",
    image:
      "https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Minimalist Urban Loft",
    category: "residential",
    type: "Virtual Tour",
    location: "Brooklyn, NY",
    description:
      "An open-concept loft with industrial elements and modern design.",
    image:
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Sustainable Museum Design",
    category: "architectural",
    type: "Architectural Visualization",
    location: "Portland, OR",
    description:
      "A revolutionary museum design focusing on sustainability and visitor experience.",
    image:
      "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "Luxury Penthouse Apartment",
    category: "residential",
    type: "Virtual Tour",
    location: "Miami, FL",
    description:
      "A high-end penthouse with panoramic city views and custom finishes.",
    image:
      "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    title: "Tech Company Headquarters",
    category: "commercial",
    type: "Interactive Walkthrough",
    location: "Austin, TX",
    description:
      "An innovative headquarters designed for collaboration and creativity.",
    image:
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    title: "Mountain Retreat",
    category: "residential",
    type: "3D Rendering",
    location: "Aspen, CO",
    description:
      "A luxurious mountain home with stunning views and modern amenities.",
    image:
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 8,
    title: "Boutique Hotel Renovation",
    category: "commercial",
    type: "Virtual Tour",
    location: "Santa Barbara, CA",
    description:
      "A complete renovation of a historic building into a luxury boutique hotel.",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 9,
    title: "Coastal Modern Home",
    category: "residential",
    type: "Architectural Visualization",
    location: "Newport, RI",
    description:
      "A contemporary coastal home with clean lines and panoramic ocean views.",
    image:
      "https://images.pexels.com/photos/532568/pexels-photo-532568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function PortfolioPage() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let result = projects;

    if (categoryFilter !== "all") {
      result = result.filter((project) => project.category === categoryFilter);
    }

    if (typeFilter !== "all") {
      result = result.filter((project) => project.type === typeFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query),
      );
    }

    setFilteredProjects(result);
  }, [categoryFilter, typeFilter, searchQuery]);

  const projectTypes = [...new Set(projects.map((project) => project.type))];

  return (
    <div className="flex flex-col">
      {/* Portfolio Hero */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of virtual tours, 3D renderings, and
              architectural visualizations for residential and commercial
              properties.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="category" className="mb-2">
                Category
              </Label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="architectural">Architectural</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="type">Type</Label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Input
                  id="search"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-border hover:border-primary/20 transition-all duration-300 group h-full"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="flex gap-2 mb-2">
                          <Badge className="capitalize">
                            {project.category}
                          </Badge>
                          <Badge variant="outline">{project.type}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {project.location}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <Button
                          variant="link"
                          className="px-0 font-medium text-primary group-hover:underline"
                          asChild
                        >
                          <Link href={`/portfolio/${project.id}`}>
                            View Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search criteria.
              </p>
              <Button
                onClick={() => {
                  setCategoryFilter("all");
                  setTypeFilter("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to create your own virtual experience?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your property to
            life with immersive virtual tours and stunning visualizations.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
