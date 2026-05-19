export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-ispm-15",
    title: "What is ISPM 15 and Why Does It Matter for Sri Lankan Exporters?",
    date: "2026-05-20",
    description:
      "If you export goods from Sri Lanka, you've likely come across the term ISPM 15. But what does it actually mean — and why can your shipment be rejected at the border without it?",
    content: `
If you export goods from Sri Lanka, you've likely come across the term ISPM 15. But what does it actually mean — and why can your shipment be rejected at the border without it?

## What is ISPM 15?

ISPM 15 stands for **International Standards for Phytosanitary Measures No. 15**. It is a global standard developed by the International Plant Protection Convention (IPPC) that regulates wooden packaging materials used in international trade.

The standard was introduced to prevent the spread of invasive insects and plant diseases — such as the Asian longhorned beetle and pine wood nematode — that can hide inside raw timber and travel undetected across borders.

Countries that have adopted ISPM 15 require that all wooden packaging materials — including pallets, crates, dunnage, and wooden spools — be treated and certified before entry.

## Which Countries Require ISPM 15?

Over 180 countries have adopted ISPM 15, including all of Sri Lanka's major export destinations:

- European Union (all 27 member states)
- United States
- United Kingdom
- Australia and New Zealand
- China, Japan, and South Korea
- Canada
- Middle East (UAE, Saudi Arabia, Qatar)

If your pallet is not ISPM 15 compliant when it arrives in any of these countries, customs authorities can quarantine, treat, or destroy your shipment — at your cost.

## What Does ISPM 15 Treatment Involve?

There are two approved treatment methods under ISPM 15:

### Heat Treatment (HT) — Most Common

The wood is heated in a kiln until the core temperature reaches 56°C for a minimum of 30 continuous minutes. This kills all insects and larvae living inside the timber.

Heat treatment is the most widely accepted method globally and the treatment method used by CeyPall.

### Methyl Bromide Fumigation (MB)

A chemical gas treatment that was once widely used but is now being phased out globally due to its environmental impact. Many countries, including the EU, no longer accept MB-treated pallets.

## What is the IPPC Stamp?

After treatment, every ISPM 15-compliant pallet must carry the official IPPC mark — a stamp burned or branded directly into the wood.

The stamp contains:
- The IPPC wheat symbol
- The country code (LK for Sri Lanka)
- The producer/treatment provider code
- The treatment method (HT for heat treatment)

Without this stamp, even a treated pallet is considered non-compliant.

## Who Can Certify ISPM 15 Pallets in Sri Lanka?

In Sri Lanka, ISPM 15 heat treatment providers must be registered with the National Plant Quarantine Service (NPQS) under the Department of Agriculture.

CeyPall (Pvt) Ltd is an IPPC-registered, NPQS-certified pallet manufacturer based in Kochchikade. We supply ISPM 15-compliant, heat-treated, IPPC-stamped pallets with a treatment certificate included with every order.

## Why Does This Matter for Your Business?

Getting ISPM 15 wrong can cost your business in multiple ways:

- Shipment delays at the destination port
- Quarantine fees and re-treatment costs
- Destruction of your goods if the pallet is deemed a biosecurity risk
- Damage to your relationship with the importer or buyer

Using a certified pallet manufacturer from the start is far cheaper than dealing with a rejected shipment halfway around the world.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
