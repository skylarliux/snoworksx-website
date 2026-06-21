import Link from 'next/link';

export const metadata = {
  title: 'Manufacturing Technology | SNOWORKSX',
  description: 'The cores, constructions, profiles, base materials, and advanced technologies behind every SNOWORKSX product — snowboards, skis, boots and poles. Industry-leading capability across the full range.',
};

const TECH_SECTIONS = [
  {
    title: 'Snowboard Core Technology',
    intro: 'The core is the heart of every board. We mill ours on CNC machines to exact weight and flex specifications.',
    items: [
      { name: 'Multi-species blended core (bamboo/aspen/paulownia)', desc: 'Optimised snap, edge response, and damping. Lightweight paulownia in tip/tail reduces swing weight. Available in standard and women\u2019s-specific geometry.' },
      { name: 'Single-species aspen core', desc: 'Consistent flex and proven durability across the size range. Energetic and snappy \u2014 the all-round all-mountain choice.' },
      { name: 'Bamboo-dominant blended core', desc: 'Higher tensile strength than steel, withstands compression better than concrete. Our 5-year-warranty-grade construction.' },
      { name: 'Women\u2019s-specific core geometry', desc: 'Shaped and tuned to female biomechanics \u2014 optimised flex per size, reduced swing weight, enhanced turn initiation.' },
    ],
  },
  {
    title: 'Ski Core Technology',
    intro: 'Six wood species, each selected for a specific blend of weight, energy, and dampening.',
    items: [
      { name: 'Aspen', desc: 'Lightweight, resilient all-rounder. Great energy, forgiving character.' },
      { name: 'Aspen Microblock', desc: 'Many small stringers give a consistent flex, smooth feel, and damp ride.' },
      { name: 'Maple', desc: 'Energetic, tough, dense wood that absorbs impact and returns energy.' },
      { name: 'Paulownia', desc: 'Lively, low-density with excellent strength-to-weight ratio. Reduces overall ski weight.' },
      { name: 'Fir', desc: 'Stiff, strong, and dense for solid edge-to-edge performance.' },
      { name: 'Balsa', desc: 'Ultra-light and responsive \u2014 a key component in class-leading performance-to-weight touring constructions.' },
    ],
  },
  {
    title: 'Construction Methods',
    intro: 'How the core, fibreglass, metal, and base layers come together defines the ride.',
    items: [
      { name: 'Hybrid cap/sidewall construction', desc: 'Tip and tail capped for reduced swing weight; full sidewall underfoot for power and edge grip. Lightest, most durable construction available.' },
      { name: 'Full metal laminate (Titanal)', desc: 'Titanal sheet above and below the core delivers a damp, precise, and accurate feel. Standard and recycled-alloy options available.' },
      { name: 'Triaxially braided fibreglass', desc: 'Patented process \u2014 fibres interlocked at 0\u00b0/45\u00b0/45\u00b0 around a milled core. Pronounced torsional strength while retaining wood flex patterns.' },
      { name: 'Full cap construction (DuraCap)', desc: 'Core and internals enveloped by the topsheet layer. Generally lighter, enhanced durability and forgiveness.' },
      { name: 'Full dual sidewall construction', desc: 'Maximum edge feel, performance, and topsheet impact resistance \u2014 the premium construction for aggressive all-mountain skis.' },
      { name: 'Sintered P-Tex sidewall profiling', desc: 'Profiled sintered polymer sidewalls \u2014 durable, impact-resistant, reduce production waste, and provide a smoother ride.' },
    ],
  },
  {
    title: 'Profile & Rocker Types',
    intro: 'Camber, rocker, and every blend between \u2014 tuned to the discipline.',
    items: [
      { name: 'Directional Camber (snowboard)', desc: 'Most responsive \u2014 camber from front foot to tail, early rise at nose. Precision and control with deep-snow float.' },
      { name: 'Combination Camber (snowboard)', desc: 'Best of both: pop and precision of camber plus float and predictability of rocker.' },
      { name: 'Directional Rocker (snowboard)', desc: 'Medium rise tip, flat middle, low rise tail \u2014 effortless all-terrain turns and float in soft snow.' },
      { name: 'Full Camber (snowboard/ski)', desc: 'Maximum pop and edge pressure. Ultra-responsive for powerful freestyle and piste performance.' },
      { name: 'Powder Rocker (ski)', desc: 'High and long rise at tip, low camber underfoot, medium long rise in tail \u2014 maximum float in soft snow.' },
      { name: 'All-Terrain Rocker (ski)', desc: 'Gradual rise in tip for versatility, low short rise in tail for added control in variable conditions.' },
      { name: 'Catch-Free Rocker (ski)', desc: 'Medium gradual rise in tip, low gradual rise in tail \u2014 effortless turn initiation for progressive skiing.' },
    ],
  },
  {
    title: 'Advanced Technologies',
    intro: 'The reinforcements and shaping technologies that set premium products apart.',
    items: [
      { name: 'Variable-angle fibreglass reinforcement', desc: 'Alters fibre orientation along board length for precision-tuned torsion and flex. Lively, energetic, and remarkably composed.' },
      { name: 'Y-shaped titanal layup', desc: 'Metal placed furthest from neutral axis at tip for precision, edge-to-edge underfoot for power, tapered in tail for smooth release.' },
      { name: 'Torsion Control Design (ski)', desc: 'Progressive torsional flex \u2014 stiffest in forebody and centre, easing toward tail. Precise turn initiation and smooth release.' },
      { name: 'Pre-cambered carbon fork inserts', desc: 'Shaped to offer greater response and energy return by increasing width toward the tail \u2014 more energy the harder the tail is flexed.' },
      { name: 'Volume-shift shaping', desc: 'Volume moved from tip/tail underfoot \u2014 shorter, wider design with same float and stability. Better mobility and line options.' },
      { name: 'Aerospace-grade fibreglass inserts', desc: 'Pre-cure fibreglass core inserts providing unmatched structural performance at reduced weight \u2014 increases edge hold, reduces chatter.' },
      { name: 'Bio-based resin formulation (30% bio-content)', desc: 'Proprietary resin blend with 30% bio-content. Superior cold-temperature toughness and bond strength. Lower carbon footprint.' },
      { name: 'Natural flax fibre layer', desc: 'Uni-directional natural flax improves tracking in variable terrain \u2014 enhanced suspension and composure for all-mountain and freeride lines.' },
      { name: 'Recycled metal alloy laminate', desc: 'Recycled Titanal laid over edges to improve contact and control. Same performance characteristics with reduced environmental footprint.' },
    ],
  },
  {
    title: 'Base Materials \u2014 5 Grades',
    intro: 'From entry-level extruded bases to the fastest carbon-infused sintered bases.',
    items: [
      { name: 'Grade 1 \u2014 Carbon-infused sintered base', desc: 'Carbon added to sintered base for increased wax retention and decreased drag. Fastest and most durable base available.' },
      { name: 'Grade 2 \u2014 Wax-infused sintered base', desc: 'Uses hardest-grade sintered base material \u2014 holds wax longer for relentless glide, longer intervals between waxing.' },
      { name: 'Grade 3 \u2014 Sintered 4000 base', desc: 'Absorbs wax deep into material for relentless glide and unrivalled durability. Standard for all-mountain and freeride production.' },
      { name: 'Grade 4 \u2014 Extruded base', desc: 'Low maintenance, consistent glide, easy to repair. Ideal for beginner/entry-level positioning.' },
      { name: 'Grade 5 \u2014 Stone-ground factory finish', desc: 'Boards leave the factory with a flat, structured P-Tex base that properly absorbs wax and glides faster than belt-sanded alternatives.' },
    ],
  },
  {
    title: 'Ski Boot Technology',
    intro: 'Shells, liners, and fit systems engineered for performance and comfort.',
    items: [
      { name: 'Variable-thickness TPU shell', desc: 'Shell walls of four different TPU grades \u2014 ultimate combination of lightness and responsiveness. Fully heat-moldable.' },
      { name: 'Eco-friendly Pebax upper cuff (touring)', desc: 'Lightweight, eco-friendly material for consistent flex across cold temperature range. Improved heat-moldability.' },
      { name: 'Performance heat-moldable liner', desc: 'Stiff asymmetric tongue, pre-molded ankle pockets, and high-density power collar. Tour notch available on backcountry models.' },
      { name: 'Cable/reel micro-adjustment lacing', desc: 'Even pressure distribution across the foot. Incremental micro-adjustment \u2014 upper and lower zones independently tightenable.' },
      { name: 'MultiFit last system', desc: 'Accommodates 97\u2013104mm foot widths in a single shell. Eliminates the need for multiple last options.' },
      { name: 'Energy integration \u2014 Y-shaped rear support', desc: 'Rivet-free cuff/shell integration that maximises fore/aft flex efficiency and lateral stiffness.' },
      { name: '50\u00b0 walk mechanism', desc: 'Lever on rear cuff unlocks for 50\u00b0 range of motion. GripWalk outsole compatibility standard across comfort and touring lines.' },
      { name: 'Modular honeycomb bootboard', desc: 'Traps heat 15% better than a traditional bootboard. Swappable hard and soft inserts adjust dampening vs power transfer.' },
    ],
  },
  {
    title: 'Pole Technology',
    intro: 'Shafts, grips, baskets, and adjustment systems for every condition.',
    items: [
      { name: 'Carbon Web shaft', desc: 'External carbon strands precisely laminated onto a carbon shaft \u2014 our lightest, stiffest, and most durable pole construction.' },
      { name: '100% Composite shaft', desc: 'Full composite construction \u2014 a great combination of weight, durability, and value.' },
      { name: 'Aircraft-grade 7075 / 6061 aluminium shaft', desc: 'High-strength seamless aluminium tubing. 18mm heavy-duty freeride and 16mm lightweight touring options.' },
      { name: 'Safety-release Ripcord grip', desc: 'Safety-releasable strap integrated into the grip top. Lightweight cored-out grip design with push-button hinging top.' },
      { name: 'LockJaw 6000 adjustment mechanism', desc: 'T6 6000-series aluminium with Teflon bushings \u2014 25% weight reduction over plastic equivalents. Best clamp force, most durable.' },
      { name: 'Articulating powder basket (80mm)', desc: 'Ball-and-socket design with 50\u00b0 unhindered movement \u2014 effortlessly matches the snow surface during traverses.' },
      { name: 'Tool-free swappable baskets', desc: 'Tips and baskets changeable without tools for summer/winter conversion. Nested basket design for compact storage.' },
      { name: 'Built-in bubble inclinometer', desc: 'Quick, accurate slope angle measurement in the grip \u2014 an essential backcountry avalanche-safety feature.' },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0A0A0A', padding: '72px 0 56px', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-overlay" style={{ opacity: 0.35 }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-tag-white">Manufacturing Technology</span>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(40px,6vw,72px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-.01em', lineHeight: 1.0, marginBottom: 20 }}>
            The Technology<br />Behind Every Build
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 620, lineHeight: 1.65 }}>
            Cores, constructions, profiles, base materials, and advanced reinforcement technologies. Every brand partner receives a full capability briefing during onboarding \u2014 here\u2019s an overview of what we build with.
          </p>
        </div>
      </section>

      {/* Capability stats */}
      <section style={{ background: '#CC1414', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="tech-stats">
            {[
              { num: '6', label: 'Core wood species' },
              { num: '7+', label: 'Profile & rocker types' },
              { num: '5', label: 'Base material grades' },
              { num: '6', label: 'Construction methods' },
            ].map(({ num, label }, i) => (
              <div key={label} style={{ textAlign: 'center', padding: '4px 16px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.25)' : 'none' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, marginBottom: 4 }}>{num}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){.tech-stats{grid-template-columns:repeat(2,1fr)!important;gap:16px 0!important}}`}</style>
      </section>

      {/* Tech sections */}
      <section style={{ padding: 'clamp(44px,6vw,72px) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {TECH_SECTIONS.map((ts) => (
              <div key={ts.title}>
                <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(24px,3vw,34px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.01em', marginBottom: 8, paddingBottom: 10, borderBottom: '2px solid #CC1414', display: 'inline-block' }}>{ts.title}</h2>
                {ts.intro && <p style={{ fontSize: 15, color: '#6B6B6B', lineHeight: 1.7, maxWidth: 640, marginBottom: 24 }}>{ts.intro}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }} className="tech-cards">
                  {ts.items.map(({ name, desc }) => (
                    <div key={name} style={{ background: '#F7F7F7', border: '1px solid #E5E5E5', padding: '18px 20px' }}>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.03em', marginBottom: 7, color: '#0A0A0A' }}>{name}</div>
                      <div style={{ fontSize: 13.5, color: '#555', lineHeight: 1.65 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:680px){.tech-cards{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: '#0A0A0A', color: '#FFFFFF', padding: 'clamp(44px,6vw,72px) 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 40, fontWeight: 800, textTransform: 'uppercase', marginBottom: 16 }}>Build With Our Technology</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.65 }}>
            Every construction, core, and technology shown here is available for your OEM project. Tell us what you want to build.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-red">Request a Quote →</Link>
            <Link href="/process" className="btn-outline-white">See Our Process</Link>
          </div>
        </div>
      </section>
    </>
  );
}
