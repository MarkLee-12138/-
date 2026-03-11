import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Wallet, ArrowUpRight, ArrowDownRight, AlertTriangle, FileText } from 'lucide-react';

const revenueData = [
  { name: '1月', 租金: 4000, 物业费: 2400, 停车费: 2400 },
  { name: '2月', 租金: 3000, 物业费: 1398, 停车费: 2210 },
  { name: '3月', 租金: 2000, 物业费: 9800, 停车费: 2290 },
  { name: '4月', 租金: 2780, 物业费: 3908, 停车费: 2000 },
  { name: '5月', 租金: 1890, 物业费: 4800, 停车费: 2181 },
  { name: '6月', 租金: 2390, 物业费: 3800, 停车费: 2500 },
];

const expenseData = [
  { name: '人员薪酬', value: 400 },
  { name: '设备维护', value: 300 },
  { name: '营销推广', value: 300 },
  { name: '水电能耗', value: 200 },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

const expiringTenants = [
  { id: 'T001', name: '手工饰品', space: 'T-001', expireDate: '2023-10-07', daysLeft: 3 },
  { id: 'M012', name: '瑞幸咖啡', space: 'A-102', expireDate: '2023-12-31', daysLeft: 88 },
];

export default function FinancialManagement() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">财务管理</h2>
          <p className="text-sm text-slate-500 mt-1">园区收支财务信息与租户到期管理</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
            本月报表
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-sm">
            新建账单
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">本月总收入</h3>
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Wallet size={20} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h4 className="text-3xl font-bold text-slate-800">¥845,200</h4>
            <span className="text-sm font-medium text-emerald-600 flex items-center">
              <ArrowUpRight size={16} />
              12.5%
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">较上月同期 ¥751,288</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">本月总支出</h3>
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
              <Wallet size={20} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h4 className="text-3xl font-bold text-slate-800">¥218,500</h4>
            <span className="text-sm font-medium text-rose-600 flex items-center">
              <ArrowUpRight size={16} />
              4.2%
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">较上月同期 ¥209,692</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">待收账款</h3>
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
              <FileText size={20} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h4 className="text-3xl font-bold text-slate-800">¥124,000</h4>
            <span className="text-sm font-medium text-emerald-600 flex items-center">
              <ArrowDownRight size={16} />
              8.1%
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">共 12 笔待催缴账单</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">收入构成趋势 (近半年)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="租金" stackId="a" fill="#6366f1" radius={[0, 0, 4, 4]} />
                <Bar dataKey="物业费" stackId="a" fill="#10b981" />
                <Bar dataKey="停车费" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">本月支出占比</h3>
            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col">
                <span className="text-xs text-slate-500">总支出</span>
                <span className="text-lg font-bold text-slate-800">¥21.8w</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {expenseData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <AlertTriangle size={20} className="text-amber-500" />
                租户到期提醒
              </h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">查看全部</button>
            </div>
            <div className="space-y-4">
              {expiringTenants.map((tenant) => (
                <div key={tenant.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-slate-800 text-sm">{tenant.name}</span>
                      <span className="text-xs text-slate-500">({tenant.space})</span>
                    </div>
                    <p className="text-xs text-slate-500">到期日: {tenant.expireDate}</p>
                  </div>
                  <div className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                    tenant.daysLeft <= 30 ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    剩 {tenant.daysLeft} 天
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
