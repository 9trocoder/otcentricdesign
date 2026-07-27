// Database of modern luxury furniture items, interior architecture projects, and studio journal articles

export const CATEGORIES = ['All', 'Chairs', 'Tables', 'Lighting', 'Storage', 'Decor'];

export const DEPARTMENTS = [
  {
    id: 'living',
    title: 'Living Room Architecture',
    itemCount: '18 Pieces',
    category: 'Chairs',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'workspace',
    title: 'Executive Workspaces',
    itemCount: '12 Pieces',
    category: 'Tables',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'storage',
    title: 'Architectural Storage & Sideboards',
    itemCount: '14 Pieces',
    category: 'Storage',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lighting',
    title: 'Sculptural Lighting & Glass',
    itemCount: '15 Pieces',
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800'
  }
];

export const JOURNAL_POSTS = [
  {
    id: 'j1',
    title: 'The Art of Danish Paper Cord Joinery',
    date: 'February 12, 2026',
    author: 'Elena Vance, Master Artisan',
    category: 'Craftsmanship',
    readTime: '5 min read',
    summary: 'Exploring how organic paper cord and solid white oak come together to form hand-spun seating that lasts for generations.',
    content: 'Danish paper cord is one of the most remarkable natural fibers used in 20th-century furniture making. Woven entirely by hand, each seat requires over 400 meters of continuous 3-ply paper cord tightly laced around solid white oak frames. Unlike synthetic alternatives, Danish paper cord breathes, adapts softly to human ergonomic contours, and develops a warm patina over decades of use.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'j2',
    title: 'Sculptural Lighting as Spatial Architecture',
    date: 'January 28, 2026',
    author: 'Marcus Lind, Lighting Director',
    category: 'Illumination',
    readTime: '4 min read',
    summary: 'How ambient brass sconces, handblown Murano glass, and indirect LED channels define mood and volume in modern interiors.',
    content: 'Lighting is not merely a utility; it is the secondary architect of space. In our Palm Springs and Milan installations, we prioritize warm-temperature indirect sources (2700K) paired with handblown Murano glass globes and raw spun brass. When positioned at varying eye-levels, ambient light softens sharp architectural angles and draws attention to tactile wall surfaces like lime-wash and wood veneer.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'j3',
    title: 'Sourcing Italian Terracotta & Mappa Burl',
    date: 'January 14, 2026',
    author: 'Sophia Rossi, Material Curator',
    category: 'Materials',
    readTime: '6 min read',
    summary: 'Inside our quest for rare natural finishes that ground living spaces in organic warmth.',
    content: 'The interplay between unglazed Italian terracotta clay tile and high-figured Mappa burl wood lies at the core of our material philosophy. Mappa burl, harvested from European black poplar trees, exhibits a swirling, cloud-like grain pattern that pairs harmoniously with natural clay stonework.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000'
  }
];

export const PRODUCTS = [
  {
    id: 'p1',
    name: 'The Terracotta Womb Chair',
    category: 'Chairs',
    price: 1250000,
    rating: 4.9,
    description: 'An iconic silhouette designed for ultimate spatial comfort. Featuring premium rust-orange bouclé upholstery, a sculpted fiberglass frame, and solid walnut legs. Perfectly contoured to elevate any contemporary living space.',
    specs: {
      dimensions: '40"W x 38"D x 36"H',
      material: 'Rust Bouclé, Sculpted Fiberglass, Solid Walnut',
      designer: 'Inspired by Eero Saarinen (1948)',
      origin: 'Handcrafted in Italy'
    },
    color: '#bc4315',
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p2',
    name: 'Mid-Century Teak Sideboard',
    category: 'Storage',
    price: 1850000,
    rating: 4.8,
    description: 'A masterpiece of Scandinavian storage design. Handcrafted from solid Burmese teak with book-matched veneer drawers, smooth sliding tambours, and elegant tapered legs. Unrivaled storage for modern architectural homes.',
    specs: {
      dimensions: '72"W x 18"D x 30"H',
      material: 'Solid Teak & Teak Veneers',
      designer: 'OTCentric Studio Team',
      origin: 'Denmark'
    },
    color: '#8d5524',
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p3',
    name: 'Sputnik Brass Pendant',
    category: 'Lighting',
    price: 350000,
    rating: 4.7,
    description: 'Sculptural illumination for luxury interiors. This 12-arm stellar chandelier features spun brass construction with adjustable arms to orchestrate ambient light precisely across dining and living areas.',
    specs: {
      dimensions: '28" Diameter x 15"H (Adjustable rod)',
      material: 'Spun Solid Brass',
      designer: 'Studio OTCentric',
      origin: 'USA'
    },
    color: '#df9828',
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p4',
    name: 'Amber Mushroom Floor Lamp',
    category: 'Lighting',
    price: 280000,
    rating: 4.9,
    description: 'A warm, ambient light source that doubles as living art. Featuring a glossy handblown amber glass shade in a soft contour, sitting on a brushed nickel cylinder pedestal.',
    specs: {
      dimensions: '14" Shade Diameter x 54"H',
      material: 'Handblown Amber Glass, Brushed Stainless Steel',
      designer: 'Contemporary Studio Series',
      origin: 'Murano, Italy'
    },
    color: '#df9526',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p5',
    name: 'Burl Wood Coffee Table',
    category: 'Tables',
    price: 850000,
    rating: 4.6,
    description: 'A gorgeous waterfall coffee table showcasing the natural, wild grains of maple burl wood veneer. Protected with a high-gloss protective finish to highlight natural timber patterns.',
    specs: {
      dimensions: '42"W x 24"D x 16"H',
      material: 'Mappa Burl Veneer, High-Gloss Clear Acrylic Seal',
      designer: 'OTCentric Design Lab',
      origin: 'USA'
    },
    color: '#b38a5b',
    imageUrl: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p6',
    name: 'Olive Velvet Lounge Sofa',
    category: 'Chairs',
    price: 2450000,
    rating: 4.9,
    description: 'Plush velvet, low-slung profile, and architectural elegance. This tufted sectional sofa sits on a recessed plinth base to create a floating visual effect. Upholstered in performance olive-green cotton velvet.',
    specs: {
      dimensions: '88"W x 36"D x 28"H',
      material: 'Performance Velvet, Hardwood Frame, Walnut Base',
      designer: 'OTCentric Design Lab',
      origin: 'Hand-assembled in USA'
    },
    color: '#354734',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p7',
    name: 'Terrazzo Pedestal Side Table',
    category: 'Tables',
    price: 420000,
    rating: 4.5,
    description: 'A solid terrazzo side table constructed from recycled marble, quartz, and granite chips. A bold geometric column that functions as a statement accent in living rooms and outdoor terraces.',
    specs: {
      dimensions: '16" Diameter x 20"H',
      material: 'Recycled Terrazzo Aggregates, Sealed Cement',
      designer: 'Milan Contemporary Series',
      origin: 'Italy'
    },
    color: '#8b8b93',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p8',
    name: 'Danish Cord Dining Chair',
    category: 'Chairs',
    price: 290000,
    rating: 4.8,
    description: 'Understated organic elegance. Crafted from sustainably harvested white oak with a handwoven Danish paper cord seat. A timeless addition to modern dining spaces.',
    specs: {
      dimensions: '22"W x 21"D x 31"H',
      material: 'Solid White Oak, Natural Paper Cord',
      designer: 'Hans Wegner Inspired',
      origin: 'Denmark'
    },
    color: '#d6c3ac',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p9',
    name: 'Travertine Fluted Dining Table',
    category: 'Tables',
    price: 2200000,
    rating: 4.9,
    description: 'An architectural centerpiece constructed from honed Roman travertine stone. Features twin fluted pedestal bases supporting an elliptical stone top with bevelled edge detailing.',
    specs: {
      dimensions: '84"W x 42"D x 30"H',
      material: 'Honed Roman Travertine Stone',
      designer: 'Milan Atelier Series',
      origin: 'Italy'
    },
    color: '#e5d9c5',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p10',
    name: 'Nordic Oak & Leather Lounge Chair',
    category: 'Chairs',
    price: 950000,
    rating: 4.8,
    description: 'Crafted from solid European white oak with saddle-stitched cognac leather cushions. Sculpted armrests and a reclined pitch for relaxed reading.',
    specs: {
      dimensions: '32"W x 34"D x 31"H',
      material: 'Solid White Oak, Full-Grain Saddle Leather',
      designer: 'Copenhagen Studio Team',
      origin: 'Denmark'
    },
    color: '#a06030',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p11',
    name: 'Fluted Opal Glass Wall Sconce',
    category: 'Lighting',
    price: 230000,
    rating: 4.7,
    description: 'Architectural wall light featuring handblown fluted opal glass paired with a solid brushed brass backplate. Emits warm, glare-free ambient light.',
    specs: {
      dimensions: '6"W x 18"H x 4"D',
      material: 'Handblown Opal Glass, Brushed Solid Brass',
      designer: 'OTCentric Lighting Lab',
      origin: 'Italy'
    },
    color: '#df9828',
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p12',
    name: 'Walnut & Cane Media Credenza',
    category: 'Storage',
    price: 1650000,
    rating: 4.9,
    description: 'A low-slung media console with natural woven rattan cane doors framed in solid American walnut. Conceals media electronics while letting remote signals pass.',
    specs: {
      dimensions: '76"W x 19"D x 24"H',
      material: 'Solid Walnut, Woven Natural Rattan Cane',
      designer: 'Palm Springs Atelier',
      origin: 'USA'
    },
    color: '#5c3a21',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p13',
    name: 'Hand-Carved Alabaster Vessel',
    category: 'Decor',
    price: 190000,
    rating: 4.6,
    description: 'Sculpted from a single block of natural translucent white alabaster stone. Functions as an organic centerpiece bowl or art object.',
    specs: {
      dimensions: '12" Diameter x 6"H',
      material: 'Natural White Alabaster Stone',
      designer: 'Tuscan Artisan Series',
      origin: 'Italy'
    },
    color: '#f4f3ef',
    imageUrl: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p14',
    name: 'Ivory Bouclé Swivel Armchair',
    category: 'Chairs',
    price: 1150000,
    rating: 4.9,
    description: 'A sculptural cocoon chair upholstered in tactile ivory bouclé yarn. Features a 360-degree smooth hidden swivel base.',
    specs: {
      dimensions: '34"W x 33"D x 30"H',
      material: 'Tactile Ivory Bouclé, Brushed Brass Base',
      designer: 'OTCentric Design Lab',
      origin: 'USA'
    },
    color: '#f0ece1',
    imageUrl: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p15',
    name: 'Smoked Glass & Steel Coffee Table',
    category: 'Tables',
    price: 730000,
    rating: 4.7,
    description: 'Post-modernist coffee table featuring a heavy smoked glass top resting on intersecting brushed chrome cylinder pedestals.',
    specs: {
      dimensions: '48"W x 28"D x 15"H',
      material: 'Tempered Smoked Glass, Brushed Stainless Steel',
      designer: 'Tokyo Atelier Series',
      origin: 'Japan'
    },
    color: '#4a4a50',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p16',
    name: 'Minimalist Terracotta Ceramic Arch',
    category: 'Decor',
    price: 150000,
    rating: 4.8,
    description: 'Hand-thrown terracotta ceramic sculpture with matte unglazed finish. A bold geometric accent piece for open shelving and sideboards.',
    specs: {
      dimensions: '8"W x 4"D x 14"H',
      material: 'Natural Terracotta Clay',
      designer: 'Studio Craft Collection',
      origin: 'Italy'
    },
    color: '#bc4315',
    imageUrl: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000'
    ]
  }
];

export const PROJECTS = [
  {
    id: 'proj1',
    title: 'The Terracotta Sunroom',
    category: 'Living Rooms',
    style: 'Modern Organic Luxury',
    date: 'Spring 2026',
    client: 'The Henderson Family',
    description: 'A complete architectural redesign of a sunlit living space. Integrating floor-to-ceiling limewash walls, handblown amber pendants, and our flagship Terracotta Womb Chair to create an immersive sanctuary of warmth.',
    story: 'Our intervention focused on earthy tactile finishes: Italian terracotta floor tile, a custom Mappa burl wood coffee table, and soft amber illumination. Custom walnut joinery conceals media equipment while providing open shelving for curated art.',
    quote: 'OTCentric Design created a serene, light-filled space that feels like a natural extension of our garden.',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000',
    afterImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
    galleryImages: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1200'
    ],
    palette: [
      { name: 'Terracotta Clay', hex: '#bc4315' },
      { name: 'Warm Amber', hex: '#df9828' },
      { name: 'Olive Forest', hex: '#354734' },
      { name: 'Mappa Burl Wood', hex: '#b38a5b' }
    ],
    specs: {
      area: '420 sq ft',
      flooring: 'Handmade Italian Terracotta',
      lighting: 'Custom Mushroom Amber Glass & Sputnik Brass',
      timeline: '8 Weeks',
      budget: '₦25,000,000 - ₦35,000,000'
    },
    itemsUsed: ['p1', 'p4', 'p5']
  },
  {
    id: 'proj2',
    title: 'Teak & Leather Executive Study',
    category: 'Workspaces',
    style: 'Mid-Century Contemporary',
    date: 'Winter 2025',
    client: 'David Chen, Tech Founder',
    description: 'A dedicated study designed for deep focus and executive comfort. We paired solid Burmese teak wall paneling with brushed chrome accents, a vintage executive desk, and a custom olive velvet lounge nook.',
    story: 'Designed for a leader who values Danish craftsmanship. We sourced a rare 1968 tambour sideboard for storage and hidden cable management, then created an intimate reading alcove anchored by an olive velvet lounge sofa and brass pendant lighting.',
    quote: 'The study is a quiet sanctuary. It combines timeless mid-century character with sleek modern workflows.',
    beforeImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1000',
    afterImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000',
    galleryImages: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1200'
    ],
    palette: [
      { name: 'Burmese Teak', hex: '#8d5524' },
      { name: 'Deep Olive Velvet', hex: '#354734' },
      { name: 'Spun Brass', hex: '#df9828' },
      { name: 'Graphite Charcoal', hex: '#181818' }
    ],
    specs: {
      area: '350 sq ft',
      flooring: 'Herringbone Smoked Oak',
      lighting: '12-Arm Sputnik Brass Pendant + Desk Lamp',
      timeline: '6 Weeks',
      budget: '₦22,000,000 - ₦28,000,000'
    },
    itemsUsed: ['p2', 'p3', 'p6']
  },
  {
    id: 'proj3',
    title: 'The Sunlit Terrazzo Lounge',
    category: 'Lounge',
    style: 'Contemporary Post-Modern',
    date: 'Summer 2025',
    client: 'Elena & Marcus Rossi',
    description: 'A high-contrast living space featuring clean color blocks, terrazzo pedestal columns, floating shelving, and warm ambient illumination. Crafted for entertaining and relaxing.',
    story: 'We embraced Italian post-modernist principles. Custom terrazzo side tables act as sculptural drink perches beside velvet seating, while concealed warm illumination highlights custom wall niches.',
    quote: 'It is elegant, expressive, and luminous. Guests are always drawn to the terrazzo columns and soft lighting.',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    afterImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000',
    galleryImages: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1200'
    ],
    palette: [
      { name: 'Terrazzo Grey', hex: '#8b8b93' },
      { name: 'Stellar Gold', hex: '#df9828' },
      { name: 'Graphite', hex: '#181818' },
      { name: 'Alabaster', hex: '#faf8f5' }
    ],
    specs: {
      area: '510 sq ft',
      flooring: 'Polished Concrete with Terrazzo Inlays',
      lighting: 'Concentric Brass Sconces & Indirect Ambient LED',
      timeline: '10 Weeks',
      budget: '₦35,000,000 - ₦45,000,000'
    },
    itemsUsed: ['p3', 'p7']
  },
  {
    id: 'proj4',
    title: 'The Danish Dining Gallery',
    category: 'Living Rooms',
    style: 'Japandi Minimalist',
    date: 'Autumn 2025',
    client: 'Dr. Sarah Jenkins',
    description: 'We reconfigured a dark dining space into an open-plan light gallery. Centered around a solid white oak dining table and handwoven Danish cord chairs, this design utilizes linen window treatments and lime-wash walls.',
    story: 'Focusing on tactile honesty, every element in this room celebrates natural fibers and clean joinery. The handwoven Danish paper cord dining chairs provide hours of ergonomic dining support.',
    quote: 'The natural wood textures and Scandinavian minimalism make every meal feel intentional.',
    beforeImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000',
    afterImage: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1000',
    galleryImages: [
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200'
    ],
    palette: [
      { name: 'White Oak', hex: '#d6c3ac' },
      { name: 'Warm Teak', hex: '#8d5524' },
      { name: 'Limewash Off-White', hex: '#faf8f5' },
      { name: 'Graphite Accent', hex: '#181818' }
    ],
    specs: {
      area: '380 sq ft',
      flooring: 'Matte Sealed White Oak Planks',
      lighting: 'Minimalist Paper Lantern Pendant',
      timeline: '5 Weeks',
      budget: '₦18,000,000 - ₦24,000,000'
    },
    itemsUsed: ['p2', 'p8']
  }
];
