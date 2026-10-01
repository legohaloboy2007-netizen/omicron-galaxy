import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  filterFn: (node: { displayName?: string; isFolder: boolean }) => {
    const databasePages = [
      // Regions
      "Core Systems",
      "Outer Rim",
      "Ice Kingdom",
      "Ashen Kingdom",
      "Farlands",
      "Voidlands",
      "Shroud",
      "Veil",
      "Bleeding Abyss",
      "Elysarian Dominion",
      "Eden Reach",

      // Major factions
      "Hell Hosts",
      "Angel Swords",
      "Free World Order",
      "Obsidian Veil",
      "Protection and Crime Enforcement",
      "Crimson Order",
      "Hunters",
      "Reality Weavers",
      "Anchorless Caste",
      "Riftborn",
      "Dominion Keepers",
      "Terrorism Control Agency",
      "Free Order Rebellion",
    ]

    return !node.isFolder && databasePages.includes(node.displayName ?? "")
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()