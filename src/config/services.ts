// Service offerings. Featured services get their own SEO landing page at
// /services/[slug]. Add more entries here to expand coverage later.

export type Service = {
  slug: string;
  name: string;
  /** Short headline used on cards. */
  tagline: string;
  /** One-line summary for cards + meta descriptions. */
  summary: string;
  /** Phosphor-ish icon key, mapped in components/icon.tsx */
  icon: string;
  /** Whether this service has its own /services/[slug] page. */
  featured: boolean;
  /** Bullet list of what's included (shown on the service page). */
  includes: string[];
  /** Common items people ask us to remove. */
  items: string[];
  /** SEO copy blocks for the dedicated page. */
  page?: {
    intro: string;
    sections: { heading: string; body: string }[];
  };
};

export const services: Service[] = [
  {
    slug: "residential-junk-removal",
    name: "Residential Junk Removal",
    tagline: "Whole-home cleanouts, garage to attic",
    summary:
      "Garage, basement, attic, and full-home cleanouts. We carry it down the stairs and out the door — you don't lift a thing.",
    icon: "house",
    featured: true,
    includes: [
      "Garage, basement & attic cleanouts",
      "Whole-home & estate cleanouts",
      "Curbside or in-home pickup",
      "Sweep-up after we load",
      "Same-day & next-day availability",
    ],
    items: [
      "Old furniture",
      "Boxes & clutter",
      "Exercise equipment",
      "Carpet & rugs",
      "Yard & garage junk",
      "General household junk",
    ],
    page: {
      intro:
        "Reclaim your space without lifting a finger. Get Gone Junk Removal handles residential cleanouts across Columbus and the surrounding suburbs — from a single overstuffed garage to a full estate cleanout. Our crews show up on time, give you an upfront price before we start, and haul everything away in one trip.",
      sections: [
        {
          heading: "Garage, basement & attic cleanouts",
          body: "Stairs, tight corners, decades of stuff — we've hauled it all. Our two-person crews bring the muscle and the truck so you can finally park in your garage again. We sort donatable and recyclable items as we load.",
        },
        {
          heading: "Whole-home & estate cleanouts",
          body: "Moving, downsizing, or settling an estate? We clear out an entire house quickly and respectfully, working room by room. We'll donate usable furniture to local Columbus charities and recycle what we can so the rest doesn't end up in a landfill.",
        },
        {
          heading: "How pricing works",
          body: "No tedious quote forms. We price by how much space your junk fills in our truck, and we tell you the all-in price before we lift anything — labor, hauling, and disposal included. Text us a photo and we'll ballpark it on the spot.",
        },
      ],
    },
  },
  {
    slug: "furniture-appliance-removal",
    name: "Furniture & Appliance Removal",
    tagline: "Couches, mattresses, fridges — gone today",
    summary:
      "Heavy, awkward, and too big for the curb. We disconnect, lift, and haul furniture and appliances so you don't strain your back.",
    icon: "couch",
    featured: true,
    includes: [
      "Couches, sectionals & recliners",
      "Mattresses & box springs",
      "Refrigerators, washers & dryers",
      "Dishwashers & stoves",
      "Desks, dressers & cabinets",
      "Eco-friendly appliance recycling",
    ],
    items: [
      "Sofas & sectionals",
      "Mattresses",
      "Refrigerators",
      "Washers & dryers",
      "Dining sets",
      "Office furniture",
    ],
    page: {
      intro:
        "That sectional won't fit in your car and the city won't take the fridge at the curb. Get Gone Junk Removal removes heavy furniture and appliances anywhere in your Columbus home — upstairs, downstairs, or out back — and recycles old appliances responsibly.",
      sections: [
        {
          heading: "Furniture removal done right",
          body: "Sofas, mattresses, dressers, dining sets, office furniture — we lift it, navigate the doorways and stairs, and protect your floors and walls on the way out. Gently-used pieces are donated to local charities whenever possible.",
        },
        {
          heading: "Appliance removal & recycling",
          body: "Refrigerators, washers, dryers, dishwashers, and stoves are heavy and contain materials that don't belong in a landfill. We disconnect and haul them, then route them to certified recyclers so refrigerants and metals are handled properly.",
        },
        {
          heading: "Single items welcome",
          body: "You don't need a truckload. Got one couch or a single old fridge? We'll come grab it — often the same day — for a fair single-item price you'll know before we arrive.",
        },
      ],
    },
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
