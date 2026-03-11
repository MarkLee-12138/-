import React from 'react';
import { ModuleType, SystemOption } from '../types';
import {
  LayoutDashboard,
  Store,
  Map,
  FileText,
  Wallet,
  Car,
  Megaphone,
  LogOut,
  CalendarDays,
  ShoppingBag
} from 'lucide-react';

interface SidebarProps {
  system: SystemOption;
  activeModule: ModuleType;
  onChangeModule: (module: ModuleType) => void;
  onLogout: () => void;
}

export default function Sidebar({ system, activeModule, onChangeModule, onLogout }: SidebarProps) {
  const menuItems: { id: ModuleType; label: string; icon: React.FC<any> }[] = [
    { id: 'dashboard', label: '大屏可视化', icon: LayoutDashboard },
    { id: 'merchant', label: '商户管理', icon: Store },
    { id: 'space', label: '空间管理', icon: Map },
    { id: 'contract', label: '合同管理', icon: FileText },
    { id: 'finance', label: '财务管理', icon: Wallet },
    { id: 'parking', label: '停车管理', icon: Car },
    { id: 'investment', label: '招商管理', icon: Megaphone },
    { id: 'activity', label: '活动管理', icon: CalendarDays },
    { id: 'mall', label: '商城管理', icon: ShoppingBag },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white tracking-tight">
          {system}
        </h2>
        <p className="text-xs text-slate-500 mt-1">宛平商管平台</p>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeModule(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400'} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">退出登录</span>
        </button>
      </div>
    </div>
  );
}
