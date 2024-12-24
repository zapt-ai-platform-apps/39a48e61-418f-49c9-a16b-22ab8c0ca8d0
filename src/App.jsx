import { createSignal, onMount } from 'solid-js';

export default function App() {
  const [darkMode, setDarkMode] = createSignal(false);

  onMount(() => {
    // Check for user's preference in localStorage
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode());
    document.documentElement.classList.toggle('dark', !darkMode());
    localStorage.setItem('theme', darkMode() ? 'light' : 'dark');
  };

  return (
    <div class="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <header class="flex justify-between items-center p-4">
        <h1 class="text-2xl font-bold">App Template</h1>
        <button
          onClick={toggleDarkMode}
          class="p-2 bg-light-primary dark:bg-dark-primary text-white rounded cursor-pointer transition duration-300"
        >
          {darkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <main class="p-4 h-full">
        <p>Welcome to the app!</p>
      </main>
      <footer class="p-4 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          class="underline text-light-primary dark:text-dark-primary"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}