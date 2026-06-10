// Columbus-metro service areas. Each generates a localized SEO landing page at
// /junk-removal/[slug]. The `blurb` and `landmarks` give each page unique,
// genuinely-local content so they read as real area pages — not thin doorway
// pages. Edit freely; add or remove suburbs as the service area changes.

export type Location = {
  slug: string;
  city: string; // e.g. "Dublin"
  county: string;
  zips: string[];
  /** Unique 2–3 sentence intro mentioning the area specifically. */
  blurb: string;
  /** Local neighborhoods / landmarks woven into the page copy. */
  landmarks: string[];
};

export const serviceAreaLabel = "Columbus & Central Ohio";

export const locations: Location[] = [
  {
    slug: "columbus",
    city: "Columbus",
    county: "Franklin County",
    zips: ["43004", "43085", "43201", "43215", "43219", "43229"],
    blurb:
      "From the Short North and German Village to Clintonville and the Far East Side, Get Gone Junk Removal is Columbus's go-to crew for fast, friendly junk hauling. Whether you're cleaning out a Victorian in Olde Towne East or a split-level in Northland, we load it all.",
    landmarks: ["Short North", "German Village", "Clintonville", "Olde Towne East", "Northland"],
  },
  {
    slug: "dublin-oh",
    city: "Dublin",
    county: "Franklin County",
    zips: ["43016", "43017"],
    blurb:
      "Get Gone Junk Removal serves all of Dublin, from Muirfield Village to Historic Dublin and Bridge Park. We handle garage cleanouts, furniture removal, and post-renovation debris for Dublin homeowners and businesses alike.",
    landmarks: ["Muirfield Village", "Historic Dublin", "Bridge Park", "Tartan Fields"],
  },
  {
    slug: "westerville-oh",
    city: "Westerville",
    county: "Franklin County",
    zips: ["43081", "43082"],
    blurb:
      "Need junk gone in Westerville? We cover Uptown Westerville, Highlands, and everything around Hoover Reservoir. From basement cleanouts to old appliance pickup, our local crews make it easy.",
    landmarks: ["Uptown Westerville", "Hoover Reservoir", "Otterbein University", "Highlands"],
  },
  {
    slug: "hilliard-oh",
    city: "Hilliard",
    county: "Franklin County",
    zips: ["43026"],
    blurb:
      "Get Gone Junk Removal proudly serves Hilliard, including Old Hilliard, Heritage Trail, and the neighborhoods around Homestead Park. Same-day junk and furniture removal with upfront pricing.",
    landmarks: ["Old Hilliard", "Homestead Park", "Heritage Trail", "Hoffman Farms"],
  },
  {
    slug: "grove-city-oh",
    city: "Grove City",
    county: "Franklin County",
    zips: ["43123"],
    blurb:
      "From Town Center to the neighborhoods near Fryer Park and Scioto Grove Metro Park, Get Gone Junk Removal hauls junk across Grove City. Garage cleanouts, hot tubs, appliances — we take it all.",
    landmarks: ["Grove City Town Center", "Fryer Park", "Scioto Grove Metro Park"],
  },
  {
    slug: "gahanna-oh",
    city: "Gahanna",
    county: "Franklin County",
    zips: ["43230"],
    blurb:
      "Get Gone Junk Removal serves Gahanna, the Herb Capital of Ohio, from Olde Gahanna to the neighborhoods around Creekside and Friendship Park. Fast, friendly, full-service junk removal.",
    landmarks: ["Creekside", "Olde Gahanna", "Friendship Park", "Big Walnut Trail"],
  },
  {
    slug: "reynoldsburg-oh",
    city: "Reynoldsburg",
    county: "Franklin County",
    zips: ["43068"],
    blurb:
      "Reynoldsburg homeowners trust Get Gone Junk Removal for everything from estate cleanouts to single-item furniture pickup. We cover Olde Reynoldsburg, Brice, and the Summit Station area.",
    landmarks: ["Olde Reynoldsburg", "Blacklick Woods Metro Park", "Summit Station"],
  },
  {
    slug: "upper-arlington-oh",
    city: "Upper Arlington",
    county: "Franklin County",
    zips: ["43220", "43221"],
    blurb:
      "In Upper Arlington, Get Gone Junk Removal handles cleanouts from the historic homes near Tremont to the neighborhoods around the Mallway and Northam Park — carefully protecting your floors and landscaping on the way out.",
    landmarks: ["Tremont", "Northam Park", "The Mallway", "Miller Park"],
  },
  {
    slug: "worthington-oh",
    city: "Worthington",
    county: "Franklin County",
    zips: ["43085", "43235"],
    blurb:
      "Get Gone Junk Removal serves Worthington, from Old Worthington and High Street to the neighborhoods near the Olentangy River. Basement cleanouts, appliance removal, and donation-first hauling.",
    landmarks: ["Old Worthington", "High Street", "Olentangy River", "Worthington Hills"],
  },
  {
    slug: "pickerington-oh",
    city: "Pickerington",
    county: "Fairfield County",
    zips: ["43147"],
    blurb:
      "Violet Township and Pickerington homeowners count on Get Gone Junk Removal for garage, basement, and whole-home cleanouts — from Old Pickerington Village to the neighborhoods around Sycamore Creek Park.",
    landmarks: ["Olde Pickerington Village", "Sycamore Creek Park", "Violet Township"],
  },
  {
    slug: "new-albany-oh",
    city: "New Albany",
    county: "Franklin County",
    zips: ["43054"],
    blurb:
      "Get Gone Junk Removal serves New Albany, from the Village Center to the estates around the New Albany Country Club. We handle high-end furniture removal and full cleanouts with care.",
    landmarks: ["New Albany Village Center", "Rose Run Park", "New Albany Country Club"],
  },
  {
    slug: "powell-oh",
    city: "Powell",
    county: "Delaware County",
    zips: ["43065"],
    blurb:
      "From Historic Downtown Powell to the neighborhoods near the Columbus Zoo and Liberty Township, Get Gone Junk Removal hauls junk, furniture, and appliances for Powell families.",
    landmarks: ["Historic Downtown Powell", "Columbus Zoo", "Liberty Township"],
  },
  {
    slug: "bexley-oh",
    city: "Bexley",
    county: "Franklin County",
    zips: ["43209"],
    blurb:
      "Get Gone Junk Removal serves Bexley's tree-lined streets, from the homes near Capital University to Main Street and Drexel. Careful cleanouts that respect your historic home.",
    landmarks: ["Capital University", "Main Street", "Jeffrey Mansion", "Drexel"],
  },
  {
    slug: "grandview-heights-oh",
    city: "Grandview Heights",
    county: "Franklin County",
    zips: ["43212"],
    blurb:
      "In Grandview Heights and the Grandview Yard area, Get Gone Junk Removal handles tight-alley pickups, condo cleanouts, and furniture removal with neighborhood-friendly crews.",
    landmarks: ["Grandview Yard", "Grandview Avenue", "Wallace Gardens"],
  },
  {
    slug: "canal-winchester-oh",
    city: "Canal Winchester",
    county: "Fairfield County",
    zips: ["43110"],
    blurb:
      "Get Gone Junk Removal serves Canal Winchester, from the historic downtown to the neighborhoods around Winchester Lakes. Same-day junk and appliance removal with honest, upfront pricing.",
    landmarks: ["Historic Downtown Canal Winchester", "Winchester Lakes", "Stradley Park"],
  },
];

export const suburbs = locations.filter((l) => l.slug !== "columbus");

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
