// Define el componente App
const App = () => {
    return (
      <div>
        <VideoGallery />
      </div>
    );
  };
  
  // Haz que App esté disponible globalmente
  window.App = App;
  
  // Renderiza el componente App
  const rootElement = document.getElementById('root');
  ReactDOM.createRoot(rootElement).render(<App />);