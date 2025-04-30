// Verifica si ya hay tema guardado
if (!("theme" in localStorage)) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    localStorage.theme = prefersDark ? "dark" : "light";
  }
  
  // Aplica el tema guardado
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  