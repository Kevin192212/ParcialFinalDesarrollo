const App = () => {
    return (
      <div>
        <VideoGallery />
      </div>
    );
  };
  
  window.App = App;
  
  const rootElement = document.getElementById('root');
  ReactDOM.createRoot(rootElement).render(<App />);