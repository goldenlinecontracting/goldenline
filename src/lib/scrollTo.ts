export function scrollToId(id: string, extraOffset = 12) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;

  const targetY =
    el.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;

  window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
}