import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';
import { SystemOption } from '../types';

interface HeaderProps {
  system: SystemOption;
  title: string;
}

export default function Header({ system, title }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
          {system}
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="搜索..."
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all"
          />
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-700">管理员</p>
            <p className="text-xs text-slate-500">admin@wanping.com</p>
          </div>
          <UserCircle size={32} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}
