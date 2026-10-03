import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardView from './components/dashboard/DashboardView';
import ExamWizard from './components/wizard/ExamWizard';
import ExamPreviewTabs from './components/preview/ExamPreviewTabs';
import QuestionBankView from './components/bank/QuestionBankView';
import SeaPlmHubView from './components/seaplm/SeaPlmHubView';
import ExamAnalyzerView from './components/analyzer/ExamAnalyzerView';
import QuickQuestionView from './components/quick/QuickQuestionView';
import SettingsView from './components/settings/SettingsView';
import IntegrationView from './components/integration/IntegrationView';
import PinLockModal from './components/auth/PinLockModal';
import { fetchJson } from './utils/api';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [globalMode, setGlobalMode] = useState('TT27_SEA_PLM');
  const [currentExam, setCurrentExam] = useState(null);
  const [savedExams, setSavedExams] = useState([]);
  const [isPinUnlocked, setIsPinUnlocked] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('app_pin_unlocked') === 'true';
    }
    return false;
  });

  // Fetch saved exams from backend
  const loadSavedExams = async () => {
    try {
      const res = await fetchJson('/exams/saved');
      if (res.exams && res.exams.length > 0) {
        setSavedExams(res.exams);
        if (!currentExam) setCurrentExam(res.exams[0]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadSavedExams();
  }, []);

  const handleExamReady = (newExam) => {
    setCurrentExam(newExam);
    setSavedExams(prev => [newExam, ...prev.filter(e => e.examId !== newExam.examId)]);
    setCurrentView('preview');
  };

  return (
    <>
      {!isPinUnlocked && (
        <PinLockModal onUnlock={() => setIsPinUnlocked(true)} />
      )}
      <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar
        currentView={currentView === 'preview' ? 'saved' : currentView}
        setCurrentView={(view) => {
          if (view === 'saved' && currentExam) {
            setCurrentView('preview');
          } else {
            setCurrentView(view);
          }
        }}
      />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header
          currentView={currentView === 'preview' ? 'saved' : currentView}
          globalMode={globalMode}
          setGlobalMode={setGlobalMode}
          onQuickCreate={() => setCurrentView('wizard')}
        />

        <main className="flex-1 mt-16 p-7 overflow-y-auto">
          {currentView === 'dashboard' && (
            <DashboardView
              onNavigate={(view) => setCurrentView(view)}
              savedExamsCount={savedExams.length}
            />
          )}

          {currentView === 'wizard' && (
            <ExamWizard
              initialMode={globalMode}
              onExamReady={handleExamReady}
            />
          )}

          {currentView === 'integration' && <IntegrationView />}

          {currentView === 'preview' && currentExam && (
            <ExamPreviewTabs
              exam={currentExam}
              onBackToEdit={() => setCurrentView('wizard')}
            />
          )}

          {currentView === 'matrix' && currentExam && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-base">Ma trận đề đang làm việc</h3>
                <button
                  onClick={() => setCurrentView('preview')}
                  className="text-xs text-emerald-700 font-bold hover:underline"
                >
                  Xem toàn bộ đề thi & Hướng dẫn chấm →
                </button>
              </div>
              <ExamPreviewTabs exam={currentExam} />
            </div>
          )}

          {currentView === 'specs' && currentExam && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-base">Bản đặc tả đề đang làm việc</h3>
                <button
                  onClick={() => setCurrentView('preview')}
                  className="text-xs text-emerald-700 font-bold hover:underline"
                >
                  Xem toàn bộ đề thi & Hướng dẫn chấm →
                </button>
              </div>
              <ExamPreviewTabs exam={currentExam} />
            </div>
          )}

          {currentView === 'bank' && <QuestionBankView />}

          {currentView === 'seaplm' && <SeaPlmHubView />}

          {currentView === 'analyzer' && <ExamAnalyzerView />}

          {currentView === 'quick' && <QuickQuestionView />}

          {currentView === 'saved' && (
            currentExam ? (
              <ExamPreviewTabs exam={currentExam} />
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <div className="text-slate-400 text-sm mb-3">Chưa có đề thi nào được tạo.</div>
                <button
                  onClick={() => setCurrentView('wizard')}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-emerald-700"
                >
                  Tạo đề kiểm tra đầu tiên ngay
                </button>
              </div>
            )
          )}

          {currentView === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  </>
  );
}
