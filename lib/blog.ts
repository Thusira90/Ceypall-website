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

ISPM 15 stands for International Standards for Phytosanitary Measures No. 15. It is a global standard developed by the International Plant Protection Convention (IPPC) that regulates wooden packaging materials used in international trade.

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
  {
    slug: "why-sri-lankan-exporters-need-ippc-certified-pallets",
    title: "Why Sri Lankan Exporters Need IPPC-Certified Pallets",
    date: "2026-05-20",
    description:
      "A rejected shipment at a foreign port is costly and entirely avoidable. Here's why IPPC certification matters for every Sri Lankan exporter.",
    content: `
Sri Lanka exports billions of dollars worth of goods every year — from tea and apparel to electronics and rubber products. But there's one thing many exporters overlook until it's too late: the pallet carrying their goods must be IPPC-certified.

## What is the IPPC?

The International Plant Protection Convention (IPPC) is an international treaty administered by the United Nations Food and Agriculture Organization (FAO). It sets the global standards for preventing the spread of plant pests and diseases through international trade.

One of its most important standards is ISPM 15, which governs wooden packaging materials — including pallets — used in international shipments. Under ISPM 15, wooden pallets must be treated and stamped with the official IPPC mark before they can legally enter most countries.

## What Does IPPC-Certified Mean for a Pallet?

An IPPC-certified pallet has been treated using an approved method — most commonly heat treatment (56°C core temperature for 30 minutes minimum), stamped with the official IPPC mark, and produced by a registered manufacturer certified by the national plant protection authority. In Sri Lanka, this is the National Plant Quarantine Service (NPQS).

## Why Do Sri Lankan Exporters Specifically Need This?

### Your destination countries require it

The vast majority of Sri Lanka's export destinations — the EU, USA, UK, Australia, Japan, China, Middle East — all require ISPM 15-compliant pallets. Non-compliant pallets are stopped at the border.

### Your freight forwarder may not check

Many freight forwarders focus on documentation and logistics — not on whether your pallet has the right stamp. The responsibility for the pallet falls on you, the exporter.

### Non-compliance is expensive

If your shipment arrives at a foreign port on a non-certified pallet, the consequences can include:

- Re-treatment at the destination — at your expense
- Quarantine and storage fees while the issue is resolved
- Destruction of the pallet if re-treatment is not possible
- Delays that damage your relationship with the buyer

### It protects Sri Lanka's export reputation

Countries monitor biosecurity compliance by origin. Repeated violations from Sri Lankan exporters could lead to tighter scrutiny of all Sri Lankan shipments — affecting the entire industry.

## How to Make Sure Your Pallets Are IPPC-Certified

The simplest way is to source your pallets from a registered IPPC manufacturer in Sri Lanka. When ordering, confirm the manufacturer is NPQS-registered, pallets carry the IPPC stamp, a treatment certificate is provided, and the treatment method is HT (heat treatment) — accepted in all markets including the EU.

## What the IPPC Stamp Looks Like

Every compliant pallet carries a mark that includes the IPPC wheat symbol, LK (the ISO country code for Sri Lanka), a unique producer code registered with NPQS, and HT indicating heat treatment. If any of these elements are missing, the pallet is not compliant — regardless of how it was treated.

## CeyPall: IPPC-Registered Pallet Manufacturer in Sri Lanka

CeyPall (Pvt) Ltd is officially registered with the National Plant Quarantine Service of Sri Lanka as a certified ISPM 15 heat treatment provider. Every pallet we manufacture is heat-treated to 56°C core temperature for 30 minutes, IPPC-stamped with our registered producer code, and supplied with a treatment certificate. Available in standard and custom sizes with island-wide delivery across Sri Lanka.
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
