import React, { useState } from 'react';
import { 
  BookOpen, Star, GitFork, Code2, AlertCircle, GitBranch, 
  Play, FileText, History, Terminal, ArrowUpRight, Eye 
} from 'lucide-react';

export default function App() {
  const [tab, setTab] = useState('code');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1f2328]">
      {/* Header */}
      <header className="bg-[#f6f8fa] border-b border-[#d0d7de] pt-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-xl overflow-hidden">
              <BookOpen size={20} className="text-[#57606a]" />
              <span className="text-[#0969da] font-semibold hover:underline">CMC-ORG</span>
              <span className="text-[#57606a]">/</span>
              <span className="font-bold text-[#0969da] hover:underline">job-execution-track</span>
              <span className="text-xs font-medium text-[#57606a] border border-[#d0d7de] rounded-full px-2 ml-2">Public</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1 bg-white border border-[#d0d7de] rounded-md text-xs font-bold hover:bg-[#f3f4f6]">
              <Star size={14} /> Star <span className="bg-[#afb8c133] px-1.5 py-0.5 rounded-full ml-1">128</span>
            </button>
          </div>
          <nav className="flex gap-1 overflow-x-auto">
            {['code', 'issues', 'pull requests'].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 capitalize whitespace-nowrap ${
                  tab === item ? 'border-[#fd8c73] font-semibold' : 'border-transparent text-[#57606a]'
                }`}
              >
                {item === 'code' && <Code2 size={16} />}
                {item === 'issues' && <AlertCircle size={16} />}
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {tab === 'code' ? (
            <>
              {/* File Explorer */}
              <div className="border border-[#d0d7de] rounded-md overflow-hidden mb-6 bg-white text-sm">
                <div className="bg-[#f6f8fa] p-3 border-b border-[#d0d7de] flex justify-between italic text-[#57606a]">
                  <div className="flex items-center gap-2 font-bold text-black">
                    <div className="w-5 h-5 bg-black rounded-full" /> CMC_Admin
                  </div>
                  <span>2 days ago</span>
                </div>
                <div className="divide-y divide-[#d0d7de]">
                  {['curriculum/', 'src/', 'README.md', 'LICENSE'].map((name) => (
                    <div key={name} className="p-3 flex items-center hover:bg-[#f6f8fa] cursor-pointer">
                      <div className="w-1/3 flex items-center gap-3">
                        {name.endsWith('/') ? <BookOpen size={16} className="text-[#54aeff]" /> : <FileText size={16} className="text-[#57606a]" />}
                        <span className="text-[#0969da] hover:underline">{name}</span>
                      </div>
                      <span className="text-[#57606a] italic">Refactor core logic</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* README View */}
              <div className="border border-[#d0d7de] rounded-md overflow-hidden shadow-sm">
                <div className="bg-[#f6f8fa] p-3 border-b border-[#d0d7de] text-sm font-semibold italic flex items-center gap-2">
                  <History size={16} /> README.md
                </div>
                <div className="p-6 md:p-12 prose prose-slate max-w-none">
                  <h1 className="text-3xl font-black border-b pb-4 mb-8 italic tracking-tighter">🚀 CMC JOB TRACK</h1>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-sm italic">
                    <strong>Warning:</strong> 강의 시청이 아닌 4주간의 실제 지원 실행을 강제하는 시스템입니다.
                  </div>
                  <h2 className="text-xl font-bold mb-4 border-b pb-2 italic">## How it works</h2>
                  <div className="bg-[#1b1f23] text-[#7ee787] p-5 rounded-md font-mono text-xs mb-8">
                    <p className="text-gray-500"># 진단 시스템 가동</p>
                    <p>$ npm run start-diagnosis</p>
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="bg-[#1f883d] text-white px-10 py-3 rounded-md font-bold hover:bg-[#1a7f37]">
                    3분 판정 테스트 시작
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="py-20 text-center text-gray-400">Section Restricted</div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div>
            <h3 className="font-semibold text-sm mb-2">About</h3>
            <p className="text-sm italic">비전공자/지방대 컴공생을 위한 결과 지향형 취업 실행 시스템.</p>
          </div>
          <div className="pt-4 border-t border-[#d0d7de]">
            <h3 className="font-semibold text-sm mb-3">Languages</h3>
            <div className="h-2 flex rounded-full overflow-hidden bg-[#f3f4f6]">
              <div className="bg-[#f1e05a] w-[80%]" />
              <div className="bg-[#3178c6] w-[20%]" />
            </div>
            <p className="text-[10px] text-gray-500 mt-2 font-bold">JavaScript 80.0% · CSS 20.0%</p>
          </div>
        </aside>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md border border-[#d0d7de] rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-[#f6f8fa] p-3 border-b flex justify-between font-mono text-[10px] font-bold">
              <span>diagnostic_tool.sh</span>
              <button onClick={() => setIsModalOpen(false)}>✕</button>
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold mb-6 italic italic">"내 역량을 1분 안에 설명할 수 있나요?"</h3>
              <div className="grid gap-2">
                <button className="text-left p-4 border border-[#d0d7de] rounded hover:bg-[#f6f8fa]">네, 가능합니다.</button>
                <button className="text-left p-4 border border-[#d0d7de] rounded hover:bg-[#f6f8fa]">아니오, 어렵습니다.</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
