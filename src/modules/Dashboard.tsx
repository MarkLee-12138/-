import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { Users, Store, Wallet, Car } from 'lucide-react';

const visitData = [
  { name: '1月', visits: 4000 },
  { name: '2月', visits: 3000 },
  { name: '3月', visits: 2000 },
  { name: '4月', visits: 2780 },
  { name: '5月', visits: 1890 },
  { name: '6月', visits: 2390 },
  { name: '7月', visits: 3490 },
];

const revenueData = [
  { name: '周一', revenue: 4000 },
  { name: '周二', revenue: 3000 },
  { name: '周三', revenue: 2000 },
  { name: '周四', revenue: 2780 },
  { name: '周五', revenue: 1890 },
  { name: '周六', revenue: 2390 },
  { name: '周日', revenue: 3490 },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="今日客流" value="12,345" icon={Users} trend="+12%" color="bg-blue-500" />
        <StatCard title="入驻商户" value="156" icon={Store} trend="+3" color="bg-emerald-500" />
        <StatCard title="本月营收" value="¥1.2M" icon={Wallet} trend="+8%" color="bg-indigo-500" />
        <StatCard title="空余车位" value="89/500" icon={Car} trend="-12" color="bg-orange-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">园区二维地图概览</h3>
          <div className="relative w-full h-[400px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            {/* 模拟二维地图 */}
            <div className="absolute inset-0 p-4">
              <div className="w-full h-full relative">
                <div className="absolute top-10 left-10 w-32 h-24 bg-indigo-100 border-2 border-indigo-300 rounded-lg flex items-center justify-center text-indigo-700 font-medium shadow-sm">A区 餐饮</div>
                <div className="absolute top-10 right-20 w-40 h-32 bg-emerald-100 border-2 border-emerald-300 rounded-lg flex items-center justify-center text-emerald-700 font-medium shadow-sm">B区 零售</div>
                <div className="absolute bottom-20 left-1/4 w-48 h-20 bg-orange-100 border-2 border-orange-300 rounded-lg flex items-center justify-center text-orange-700 font-medium shadow-sm">C区 娱乐</div>
                <div className="absolute bottom-10 right-10 w-24 h-40 bg-slate-200 border-2 border-slate-400 rounded-lg flex items-center justify-center text-slate-600 font-medium shadow-sm">停车场</div>
                
                {/* 临时摊位区域 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 border-2 border-dashed border-rose-400 bg-rose-50/50 rounded-lg flex items-center justify-center text-rose-600 font-medium">
                  中心广场 (临时摊位区)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">月度客流趋势</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={visitData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Line type="monotone" dataKey="visits" stroke="#6366f1" strokeWidth={3} dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">本周营收概况</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, trend, color }: any) {
  const isPositive = trend.startsWith('+');
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-slate-800">{value}</h4>
        <p className={`text-xs font-medium mt-2 ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {trend} 较上期
        </p>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm ${color}`}>
        <Icon size={24} />
      </div>
    </div>
  );
}
