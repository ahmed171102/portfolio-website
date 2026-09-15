export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 text-center text-sm text-foreground/50 dark:border-white/10">
      <p>© {new Date().getFullYear()} Ahmed Adel Goda. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}
