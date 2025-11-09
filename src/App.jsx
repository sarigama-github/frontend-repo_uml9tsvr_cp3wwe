import { useState } from 'react';
import LeftSidebar from './components/LeftSidebar.jsx';
import ChatInterface from './components/ChatInterface.jsx';
import RightPanel from './components/RightPanel.jsx';
import TopBar from './components/TopBar.jsx';

function App() {
  const [recommended, setRecommended] = useState([]);

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(99,102,241,0.08),transparent),radial-gradient(900px_500px_at_20%_10%,rgba(236,72,153,0.06),transparent)]">
      <TopBar />

      {/* 3-pane layout with modern scrolling: left scrolls for history + discovery, center chat fixed with internal feed scroll, right has a single scroll */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex gap-4 h-[calc(100vh-64px)]">
        {/* Left navigation + history + discovery (single left scroll) */}
        <LeftSidebar />

        {/* Center column: fixed chat surface; chat feed scrolls inside the component */}
        <main className="flex-1 flex flex-col">
          <ChatInterface onRecommend={setRecommended} />
        </main>

        {/* Right panel: remove nested scrollbars; make panel itself handle its own scroll */}
        <div className="hidden xl:flex w-96 shrink-0">
          <RightPanel products={recommended} />
        </div>
      </div>
    </div>
  );
}

export default App;
