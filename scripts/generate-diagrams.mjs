import { renderMermaid } from 'beautiful-mermaid'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const theme = 'zinc-light'

const diagrams = [
  // distribution-management.md diagrams
  {
    name: 'fund-flow',
    output: '../static/assets/images/fund-flow.svg',
    mermaid: `flowchart TB
    subgraph INFLOWS[INFLOWS]
        direction TB
        ID[Investor deposits]
    end

    subgraph OUTFLOWS[OUTFLOWS]
        direction TB
        IR[Investor redemptions]
    end

    ID --> V1[Vaults]
    V1 -->|After you issue shares| H1[Holdings]

    IR --> H2[Holdings]
    H2 -->|When you revoke shares| V2[Vaults]

    H1 -->|Withdraw| OR[Off-ramp to fiat]
    V2 --> OR`
  },
  {
    name: 'onramp-flow',
    output: '../static/assets/images/onramp-flow.svg',
    mermaid: `flowchart TB
    A[Investor wires USD] --> B[Banking partner converts to USDC]
    B --> C[USDC sent to On/Off-Ramp Manager]
    C --> D[Manager balance increases]
    D --> E[Deposit from Manager to Holdings]
    E --> F[Ready to process orders]`
  },
  {
    name: 'offramp-flow',
    output: '../static/assets/images/offramp-flow.svg',
    mermaid: `flowchart TB
    A[Process redemption] --> C
    B[Or: Withdraw Holdings to Receiver] --> C[Off-ramp partner receives USDC]
    C --> D[Partner converts to USD]
    D --> E[USD wired to bank account]`
  },

  // token-management.md diagrams
  {
    name: 'investment-flow',
    output: '../static/assets/images/investment-flow.svg',
    mermaid: `flowchart TB
    A[Investor deposits 10,000 USDC] --> B[You update NAV]
    B --> C[Price is now $1.05]
    C --> D[You approve and issue shares]
    D --> E[Investor receives 9,523 shares]`
  },
  {
    name: 'redemption-flow',
    output: '../static/assets/images/redemption-flow.svg',
    mermaid: `flowchart TB
    A[Investor redeems 5,000 shares] --> B[You update NAV]
    B --> C[Price is now $1.10]
    C --> D[You approve and revoke shares]
    D --> E[Investor receives 5,500 USDC]`
  },

  // investor-management.md diagram
  {
    name: 'investor-lifecycle',
    output: '../static/assets/images/investor-lifecycle.svg',
    mermaid: `flowchart LR
    A[Onboarding] --> B[Whitelisting]
    B --> C[Investing]
    C --> D[Holding]
    D --> E[Redeeming]
    E --> F[Exit]`
  },

  // create-a-pool/index.md diagram
  {
    name: 'asset-conversion',
    output: '../docs/developer/protocol/guides/create-a-pool/images/asset-conversion.svg',
    mermaid: `flowchart LR
    A[Asset amount] --> B[Pool currency amount]
    B --> C[Share amount]`
  }
]

async function generateDiagrams() {
  for (const diagram of diagrams) {
    console.log(`Generating ${diagram.name}...`)

    const svg = await renderMermaid(diagram.mermaid, { theme })

    const outputPath = join(__dirname, diagram.output)
    mkdirSync(dirname(outputPath), { recursive: true })
    writeFileSync(outputPath, svg)

    console.log(`  ✓ Saved to ${diagram.output}`)
  }

  console.log('\nAll diagrams generated!')
}

generateDiagrams().catch(console.error)
