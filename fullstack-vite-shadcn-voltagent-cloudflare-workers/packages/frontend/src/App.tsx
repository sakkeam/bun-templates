import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    // https://ui.shadcn.com/docs/dark-mode/vite
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {null}
    </ThemeProvider>
  );
}

export default App;
