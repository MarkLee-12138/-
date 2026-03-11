import React, { useState } from 'react';
import { SystemOption } from '../types';
import { Building2, Trees } from 'lucide-react';

interface LoginProps {
  onLogin: (system: SystemOption) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [system, setSystem] = useState<SystemOption>('落日商街');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (username && password) {
      onLogin(system);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-slate-900 p-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-2">宛平商管平台</h1>
          <p className="text-slate-400 text-sm">统一登录入口</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">选择系统</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSystem('落日商街')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                    system === '落日商街'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <Building2 size={18} />
                  <span className="font-medium">落日商街</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSystem('园博河畔')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                    system === '园博河畔'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <Trees size={18} />
                  <span className="font-medium">园博河畔</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">账号</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="请输入账号"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">密码</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="请输入密码"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              登录系统
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
