// scripts/include.js
async function loadFragment(targetId, url) {
  const el = document.getElementById(targetId);
  if (!el) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    el.innerHTML = await res.text();
  } catch (e) {
    console.error("Не вдалося завантажити фрагмент", url, e);
  }
}

loadFragment("site-header", "header.html");
loadFragment("site-footer", "footer.html");
