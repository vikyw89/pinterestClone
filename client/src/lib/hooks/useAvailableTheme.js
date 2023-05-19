import { setSyncSWR, useSyncSWR } from 'swr-sync-state'

setSyncSWR('theme', [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
].sort((a, b) => (a > b ? 1 : -1))
)

export const useAvailableTheme = () => {
  const theme = useSyncSWR('theme')
  return theme
}