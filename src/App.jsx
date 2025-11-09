import TopBar from './components/TopBar';
import LeftSidebar from './components/LeftSidebar';
import ChatInterface from './components/ChatInterface';
import RightPanel from './components/RightPanel';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <TopBar />
      <main className="flex-1 flex">
        <LeftSidebar />
        <ChatInterface />
        <RightPanel />
      </main>
    </div>
  );
}
