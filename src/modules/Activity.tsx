import React, { useState } from 'react';
import { Search, Plus, Filter, CalendarDays, Ticket, Zap, Users, MoreHorizontal, CheckCircle2, Clock, XCircle } from 'lucide-react';

const mockActivities = [
  { id: 'ACT-001', name: '夏日星空音乐节', type: '园区活动', status: '进行中', startTime: '2023-07-15 18:00', endTime: '2023-07-17 22:00', participants: 12500, conversion: '-' },
  { id: 'ACT-002', name: '星巴克双人下午茶拼团', type: '拼团', status: '进行中', startTime: '2023-10-20 00:00', endTime: '2023-10-31 23:59', participants: 342, conversion: '12.5%' },
  { id: 'ACT-003', name: '耐克限量球鞋1元秒杀', type: '秒杀', status: '未开始', startTime: '2023-11-11 20:00', endTime: '2023-11-11 20:10', participants: 5800, conversion: '-' },
  { id: 'ACT-004', name: '中秋国风游园会', type: '园区活动', status: '已结束', startTime: '2023-09-28 10:00', endTime: '2023-10-06 22:00', participants: 45000, conversion: '-' },
  { id: 'ACT-005', name: '海底捞满200减50团购', type: '团购', status: '进行中', startTime: '2023-10-01 00:00', endTime: '2023-11-30 23:59', participants: 1205, conversion: '8.2%' },
];

export default function ActivityManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('全部');

  const tabs = ['全部', '园区活动', '拼团', '秒杀', '团购'];

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">活动管理</h2>
          <p className="text-sm text-slate-500 mt-1">管理园区活动发布、拼团、秒杀及团购等营销活动</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-sm">
          <Plus size={18} />
          发布新活动
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <CalendarDays size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">进行中活动</p>
            <h4 className="text-2xl font-bold text-slate-800">12</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">累计参与人次</p>
            <h4 className="text-2xl font-bold text-emerald-600">89.5k</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
            <Ticket size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">核销订单数</p>
            <h4 className="text-2xl font-bold text-slate-800">12,450</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
            <Zap size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">平均转化率</p>
            <h4 className="text-2xl font-bold text-slate-800">10.3%</h4>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="搜索活动名称/编号..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors bg-white">
            <Filter size={16} />
            筛选
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                <th className="p-4 font-medium">活动名称</th>
                <th className="p-4 font-medium">活动类型</th>
                <th className="p-4 font-medium">起止时间</th>
                <th className="p-4 font-medium">参与人次/预约</th>
                <th className="p-4 font-medium">转化率</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockActivities
                .filter(act => activeTab === '全部' || act.type === activeTab)
                .map((activity) => (
                <tr key={activity.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{activity.name}</span>
                      <span className="text-xs text-slate-400 mt-0.5">{activity.id}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                      {activity.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs">{activity.startTime}</span>
                      <span className="text-xs text-slate-400">至 {activity.endTime}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-700">
                    {activity.participants.toLocaleString()}
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    {activity.conversion}
                  </td>
                  <td className="p-4 text-sm">
                    <ActivityStatusBadge status={activity.status} />
                  </td>
                  <td className="p-4 text-sm text-right">
                    <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ActivityStatusBadge({ status }: { status: string }) {
  switch (status) {
    case '进行中':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 size={14} />
          {status}
        </span>
      );
    case '未开始':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
          <Clock size={14} />
          {status}
        </span>
      );
    case '已结束':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
          <XCircle size={14} />
          {status}
        </span>
      );
    default:
      return null;
  }
}
