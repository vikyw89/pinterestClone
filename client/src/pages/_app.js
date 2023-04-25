import "@/styles/globals.css";
import { useEffect } from "react";
import { updateSyncV, useSyncV } from "use-sync-v";

updateSyncV(
  "theme",
  [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ].sort((a, b) => (a > b ? 1 : -1))
);

export default function App({ Component, pageProps }) {
  const activeTheme = useSyncV("activeTheme")

  useEffect(()=>{
    document.querySelector('html').setAttribute('data-theme',activeTheme)
  })

  return <Component {...pageProps} />;
}
