export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Winter-Proofing Your Appliances: A Guide for Edmonton Homeowners",
    slug: "winter-proofing-appliances-edmonton",
    excerpt: "Learn essential tips for protecting your home appliances during Edmonton's harsh winters. From refrigerator maintenance to furnace care, discover how to keep your appliances running efficiently in sub-zero temperatures.",
    content: `[Previous content remains the same...]`,
    author: "John Smith",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Maintenance Tips",
    tags: ["winter maintenance", "appliance care", "energy efficiency", "Edmonton winter", "preventive maintenance"],
    image: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&q=80&w=2070",
    metaTitle: "Winter-Proofing Your Appliances: Edmonton Homeowner's Guide | Expert Tips",
    metaDescription: "Learn how to protect your appliances during Edmonton's harsh winters. Expert tips for maintaining refrigerators, washers, dryers, and more in cold weather.",
    metaKeywords: "winter appliance maintenance, Edmonton winter, appliance protection, cold weather appliance care, winter-proofing appliances"
  },
  {
    id: 2,
    title: "Common Refrigerator Problems and DIY Solutions in Edmonton",
    slug: "common-refrigerator-problems-solutions",
    excerpt: "Discover the most common refrigerator issues Edmonton homeowners face and learn expert DIY troubleshooting tips. Save money and time with our comprehensive repair guide.",
    content: `[Previous content remains the same...]`,
    author: "Sarah Johnson",
    date: "2024-01-20",
    readTime: "10 min read",
    category: "Appliance Repair",
    tags: ["refrigerator repair", "DIY solutions", "appliance maintenance", "troubleshooting", "Edmonton appliances"],
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=2070",
    metaTitle: "Common Refrigerator Problems & Solutions | Edmonton Appliance Guide",
    metaDescription: "Expert guide to common refrigerator problems and DIY solutions for Edmonton homeowners. Learn how to diagnose and fix refrigerator issues safely.",
    metaKeywords: "refrigerator repair Edmonton, fridge problems, DIY refrigerator repair, refrigerator maintenance, Edmonton appliance repair"
  },
  {
    id: 3,
    title: "Energy-Efficient Appliance Usage: Saving Money in Edmonton Homes",
    slug: "energy-efficient-appliance-usage-edmonton",
    excerpt: "Learn how to reduce your energy bills by optimizing your appliance usage. Expert tips for Edmonton homeowners on maintaining energy-efficient appliances year-round.",
    content: `[Previous content remains the same...]`,
    author: "Michael Chen",
    date: "2024-01-25",
    readTime: "12 min read",
    category: "Energy Efficiency",
    tags: ["energy efficiency", "cost savings", "appliance maintenance", "sustainable living", "Edmonton utilities"],
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=2070",
    metaTitle: "Energy-Efficient Appliance Usage Guide | Save Money in Edmonton",
    metaDescription: "Reduce your energy bills with expert tips on efficient appliance usage in Edmonton. Learn how to maintain and operate your appliances for maximum energy savings.",
    metaKeywords: "energy efficient appliances Edmonton, appliance energy savings, reduce utility bills, efficient home appliances, Edmonton energy tips"
  },
  {
    id: 4,
    title: "Smart Appliance Maintenance: Extending Lifespan of Your Edmonton Home Appliances",
    slug: "smart-appliance-maintenance-edmonton",
    excerpt: "Master the art of appliance maintenance with our comprehensive guide. Learn professional tips for extending the life of your home appliances in Edmonton's unique climate.",
    content: `[Previous content remains the same...]`,
    author: "David Wilson",
    date: "2024-01-30",
    readTime: "15 min read",
    category: "Maintenance",
    tags: ["appliance maintenance", "preventive care", "appliance lifespan", "home maintenance", "Edmonton appliances"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070",
    metaTitle: "Smart Appliance Maintenance Guide | Extend Appliance Life in Edmonton",
    metaDescription: "Expert guide to maintaining your home appliances in Edmonton. Learn professional tips for extending appliance lifespan and preventing costly repairs.",
    metaKeywords: "appliance maintenance Edmonton, extend appliance life, preventive maintenance, appliance care tips, Edmonton appliance service"
  }
];