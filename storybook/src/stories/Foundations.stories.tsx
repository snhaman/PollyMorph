import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
  tags: ["autodocs"],
};
export default meta;

const Swatch = ({ name, hex }: { name: string; hex: string }) => (
  <div className="flex flex-col gap-1 w-24">
    <div className="h-12 w-full rounded-[var(--radius-md)] border border-black/10" style={{ backgroundColor: hex }} />
    <p style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--color-neutral-grey)", lineHeight: 1.2 }}>{name}</p>
    <p style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--color-neutral-dark)", lineHeight: 1.2 }}>{hex}</p>
  </div>
);

export const ColorPalette: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "1rem" }}>
      <div>
        <p style={{ fontSize: "12px", fontWeight: 700, fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-neutral-grey)", marginBottom: "12px" }}>Primary</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {[["purple","#8E42EE"],["orange","#F78E12"],["red","#FF004D"],["green","#24CF35"],["yellow","#F7E217"],["blue","#3C5DE2"],["cyan","#06B6D4"],["pink","#EC4899"]].map(([n,c])=><Swatch key={n} name={`primary.${n}`} hex={c}/>)}
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px", fontWeight: 700, fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-neutral-grey)", marginBottom: "12px" }}>Secondary</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {[["purple","#936DC3"],["orange","#D98C30"],["pink","#D85C99"],["cyan","#21A3B9"],["blue","#6173BD"],["red","#CC3361"]].map(([n,c])=><Swatch key={n} name={`secondary.${n}`} hex={c}/>)}
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px", fontWeight: 700, fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-neutral-grey)", marginBottom: "12px" }}>Status</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {[["yellow","#F7E217"],["red","#FF004D"],["green","#24CF35"],["blue","#3C5DE2"]].map(([n,c])=><Swatch key={n} name={`status.${n}`} hex={c}/>)}
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px", fontWeight: 700, fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-neutral-grey)", marginBottom: "12px" }}>Chart sequence — apply in order, never skip</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
          {["#936DC3","#F78E12","#21A3B9","#6173BD","#D85C99","#24CF35","#D98C30","#3C5DE2","#CC3361"].map((c,i)=>(
            <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"2px" }}>
              <div style={{ width:32, height:32, borderRadius:"50%", backgroundColor:c, border:"1px solid rgba(0,0,0,0.1)" }}/>
              <span style={{ fontSize:9, fontFamily:"monospace", color:"var(--color-neutral-grey)" }}>{i+1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

const TypeRow = ({ label, spec, sample, style }: { label: string; spec: string; sample: string; style: React.CSSProperties }) => (
  <div style={{ display:"flex", alignItems:"baseline", gap:"1.5rem", borderBottom:"1px solid var(--color-neutral-light)", padding:"12px 0" }}>
    <div style={{ width:160, flexShrink:0 }}>
      <p style={{ fontSize:10, fontFamily:"monospace", color:"var(--color-neutral-grey)", lineHeight:1.3 }}>{label}</p>
      <p style={{ fontSize:9, fontFamily:"monospace", color:"#9CA3AF", lineHeight:1.3, marginTop:2 }}>{spec}</p>
    </div>
    <p style={{ ...style, color:"var(--color-neutral-dark)", margin:0 }}>{sample}</p>
  </div>
);

export const Typography: StoryObj = {
  render: () => (
    <div style={{ display:"flex", flexDirection:"column", gap:"2.5rem", padding:"1rem", maxWidth:800 }}>

      <section>
        <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
          <p style={{ fontSize:11, fontWeight:700, fontFamily:"Inter, sans-serif", textTransform:"uppercase", letterSpacing:"0.1em", color:"var(--color-neutral-grey)", margin:0 }}>Display</p>
          <span style={{ display:"inline-flex", alignItems:"center", padding:"2px 8px", borderRadius:9999, fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", background:"#FEF3C7", color:"#92400E", border:"1px solid #FDE68A" }}>Web &amp; Marketing only — not for product UI</span>
        </div>
        <p style={{ fontSize:"0.75rem", fontFamily:"Inter, sans-serif", color:"var(--color-neutral-grey)", marginBottom:16 }}>Reserved for hero text on websites and marketing pages. Too large for software interfaces.</p>
        {[
          { label:"display.lg", spec:"Space Grotesk · 54/64 · 400", size:"3.375rem", lh:"4rem",    fw:400 },
          { label:"display.md", spec:"Space Grotesk · 44/52 · 450", size:"2.75rem",  lh:"3.25rem", fw:450 },
          { label:"display.sm", spec:"Space Grotesk · 36/44 · 500", size:"2.25rem",  lh:"2.75rem", fw:500 },
        ].map(({label,spec,size,lh,fw})=>(
          <TypeRow key={label} label={label} spec={spec} sample="The quick brown fox" style={{ fontFamily:"'Space Grotesk', sans-serif", fontSize:size, lineHeight:lh, fontWeight:fw }} />
        ))}
      </section>

      <section>
        <p style={{ fontSize:11, fontWeight:700, fontFamily:"Inter, sans-serif", textTransform:"uppercase", letterSpacing:"0.1em", color:"var(--color-neutral-grey)", margin:"0 0 4px" }}>Slate</p>
        <p style={{ fontSize:"0.75rem", fontFamily:"Inter, sans-serif", color:"var(--color-neutral-grey)", marginBottom:16 }}>Section and page headings inside the product.</p>
        {[
          { label:"slate.lg", spec:"Space Grotesk · 32/40 · 450 · 0",      size:"2rem",    lh:"2.5rem",  fw:450, ls:"0" },
          { label:"slate.md", spec:"Space Grotesk · 28/36 · 500 · +0.5px", size:"1.75rem", lh:"2.25rem", fw:500, ls:"0.03125rem" },
          { label:"slate.sm", spec:"Space Grotesk · 24/32 · 600 · +0.5px", size:"1.5rem",  lh:"2rem",    fw:600, ls:"0.03125rem" },
        ].map(({label,spec,size,lh,fw,ls})=>(
          <TypeRow key={label} label={label} spec={spec} sample="Dataset overview" style={{ fontFamily:"'Space Grotesk', sans-serif", fontSize:size, lineHeight:lh, fontWeight:fw, letterSpacing:ls }} />
        ))}
      </section>

      <section>
        <p style={{ fontSize:11, fontWeight:700, fontFamily:"Inter, sans-serif", textTransform:"uppercase", letterSpacing:"0.1em", color:"var(--color-neutral-grey)", margin:"0 0 4px" }}>Title</p>
        <p style={{ fontSize:"0.75rem", fontFamily:"Inter, sans-serif", color:"var(--color-neutral-grey)", marginBottom:16 }}>Paragraph and content headers — card titles, panel headings, table column labels.</p>
        {[
          { label:"title.lg", spec:"Inter · 22/28 · 500 · 0",      size:"1.375rem", lh:"1.75rem", fw:500, ls:"0" },
          { label:"title.md", spec:"Inter · 16/24 · 600 · 0",      size:"1rem",     lh:"1.5rem",  fw:600, ls:"0" },
          { label:"title.sm", spec:"Inter · 14/20 · 600 · 0",      size:"0.875rem", lh:"1.25rem", fw:600, ls:"0" },
          { label:"title.xs", spec:"Inter · 12/16 · 600 · +0.2px", size:"0.75rem",  lh:"1rem",    fw:600, ls:"0.0125rem" },
        ].map(({label,spec,size,lh,fw,ls})=>(
          <TypeRow key={label} label={label} spec={spec} sample="Differential expression results" style={{ fontFamily:"'Inter', sans-serif", fontSize:size, lineHeight:lh, fontWeight:fw, letterSpacing:ls }} />
        ))}
      </section>

      <section>
        <p style={{ fontSize:11, fontWeight:700, fontFamily:"Inter, sans-serif", textTransform:"uppercase", letterSpacing:"0.1em", color:"var(--color-neutral-grey)", margin:"0 0 4px" }}>Body</p>
        <p style={{ fontSize:"0.75rem", fontFamily:"Inter, sans-serif", color:"var(--color-neutral-grey)", marginBottom:16 }}>Main body text for all running copy.</p>
        {[
          { label:"body.lg", spec:"Inter · 16/28 · 400 · 0",      size:"1rem",      lh:"1.75rem",  fw:400, ls:"0" },
          { label:"body.md", spec:"Inter · 14/24 · 400 · 0",      size:"0.875rem",  lh:"1.5rem",   fw:400, ls:"0" },
          { label:"body.sm", spec:"Inter · 12/20 · 400 · +0.1px", size:"0.75rem",   lh:"1.25rem",  fw:400, ls:"0.00625rem" },
          { label:"body.xs", spec:"Inter · 11/18 · 400 · +0.2px", size:"0.6875rem", lh:"1.125rem", fw:400, ls:"0.0125rem" },
        ].map(({label,spec,size,lh,fw,ls})=>(
          <TypeRow key={label} label={label} spec={spec} sample="Genes with adjusted p-value < 0.05 are highlighted in the volcano plot." style={{ fontFamily:"'Inter', sans-serif", fontSize:size, lineHeight:lh, fontWeight:fw, letterSpacing:ls }} />
        ))}
      </section>

      <section>
        <p style={{ fontSize:11, fontWeight:700, fontFamily:"Inter, sans-serif", textTransform:"uppercase", letterSpacing:"0.1em", color:"var(--color-neutral-grey)", margin:"0 0 4px" }}>CLI</p>
        <p style={{ fontSize:"0.75rem", fontFamily:"Inter, sans-serif", color:"var(--color-neutral-grey)", marginBottom:16 }}>Code snippets, terminal output, monospace values.</p>
        {[
          { label:"cli.lg", spec:"JetBrains Mono · 14/20 · 500 · 0",       size:"0.875rem",  lh:"1.25rem",  fw:500, ls:"0" },
          { label:"cli.md", spec:"JetBrains Mono · 12/16 · 500 · +0.2px",  size:"0.75rem",   lh:"1rem",     fw:500, ls:"0.0125rem" },
          { label:"cli.sm", spec:"JetBrains Mono · 11/16 · 500 · +0.35px", size:"0.6875rem", lh:"1rem",     fw:500, ls:"0.021875rem" },
          { label:"cli.xs", spec:"JetBrains Mono · 10/14 · 500 · +0.35px", size:"0.625rem",  lh:"0.875rem", fw:500, ls:"0.021875rem" },
        ].map(({label,spec,size,lh,fw,ls})=>(
          <TypeRow key={label} label={label} spec={spec} sample="polly files sync --workspace tcga-luad --output /data" style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:size, lineHeight:lh, fontWeight:fw, letterSpacing:ls }} />
        ))}
      </section>

      <section>
        <p style={{ fontSize:11, fontWeight:700, fontFamily:"Inter, sans-serif", textTransform:"uppercase", letterSpacing:"0.1em", color:"var(--color-neutral-grey)", margin:"0 0 4px" }}>Tag</p>
        <p style={{ fontSize:"0.75rem", fontFamily:"Inter, sans-serif", color:"var(--color-neutral-grey)", marginBottom:16 }}>Used in tags, tabs, and chips. Always uppercase.</p>
        {[
          { label:"tag.lg", spec:"Inter Bold · 14/20 · 700 · 0",       size:"0.875rem",  lh:"1.25rem",  fw:700, ls:"0" },
          { label:"tag.md", spec:"Inter Bold · 12/16 · 700 · +0.2px",  size:"0.75rem",   lh:"1rem",     fw:700, ls:"0.0125rem" },
          { label:"tag.sm", spec:"Inter Bold · 11/16 · 700 · +0.35px", size:"0.6875rem", lh:"1rem",     fw:700, ls:"0.021875rem" },
          { label:"tag.xs", spec:"Inter Bold · 10/14 · 700 · +0.35px", size:"0.625rem",  lh:"0.875rem", fw:700, ls:"0.021875rem" },
        ].map(({label,spec,size,lh,fw,ls})=>(
          <TypeRow key={label} label={label} spec={spec} sample="RNA-SEQ · DIFFERENTIAL EXPRESSION · PATHWAY" style={{ fontFamily:"'Inter', sans-serif", fontSize:size, lineHeight:lh, fontWeight:fw, letterSpacing:ls, textTransform:"uppercase" }} />
        ))}
      </section>

    </div>
  ),
};
