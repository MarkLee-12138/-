import React, { useState } from 'react';
import { Car, Search, Filter, ArrowRightLeft, Clock, CreditCard } from 'lucide-react';

const mockLogs = [
  { id: 'L001', plate: '京A·88888', type: '月租车', entryTime: '2023-10-24 08:30:12', exitTime: '-', status: '在场', fee: '-' },
  { id: 'L002', plate: '京C·12345', type: '临时车', entryTime: '2023-10-24 09:15:00', exitTime: '2023-10-24 11:30:00', status: '已离场', fee: '¥15.00' },
  { id: 'L003', plate: '京N·98765', type: '临时车', entryTime: '2023-10-24 10:05:22', exitTime: '-', status: '在场', fee: '¥5.00(预估)' },
  { id: 'L004', plate: '京F·66666', type: '月租车', entryTime: '2023-10-24 07:45:10', exitTime: '2023-10-24 18:00:00', status: '已离场', fee: '¥0.00' },
  { id: 'L005', plate: '冀R·A1B2C', type: '临时车', entryTime: '2023-10-24 14:20:00', exitTime: '-', status: '在场', fee: '¥10.00(预估)' },
];

export default function ParkingManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">停车管理</h2>
          <p className="text-sm text-slate-500 mt-1">园区停车场实时监控与车辆进出记录</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
            月租办理
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-sm">
            收费规则设置
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Car size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">总车位</p>
            <h4 className="text-2xl font-bold text-slate-800">500</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Car size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">空余车位</p>
            <h4 className="text-2xl font-bold text-emerald-600">89</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
            <ArrowRightLeft size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">今日进出车次</p>
            <h4 className="text-2xl font-bold text-slate-800">1,245</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
            <CreditCard size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">今日临停收入</p>
            <h4 className="text-2xl font-bold text-slate-800">¥4,560</h4>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="搜索车牌号..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
              <option value="">所有车辆类型</option>
              <option value="月租车">月租车</option>
              <option value="临时车">临时车</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors bg-white">
              <Filter size={16} />
              高级筛选
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                <th className="p-4 font-medium">车牌号</th>
                <th className="p-4 font-medium">车辆类型</th>
                <th className="p-4 font-medium">入场时间</th>
                <th className="p-4 font-medium">出场时间</th>
                <th className="p-4 font-medium">停车时长</th>
                <th className="p-4 font-medium">产生费用</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-800">
                    <div className="inline-flex items-center px-2 py-1 rounded bg-blue-600 text-white tracking-widest">
                      {log.plate}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      log.type === '月租车' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {log.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{log.entryTime}</td>
                  <td className="p-4 text-sm text-slate-600">{log.exitTime}</td>
                  <td className="p-4 text-sm text-slate-600 flex items-center gap-1">
                    <Clock size={14} className="text-slate-400" />
                    {log.status === '在场' ? '2小时15分' : '2小时15分'}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-700">{log.fee}</td>
                  <td className="p-4 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      log.status === '在场' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-right">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">查看详情</button>
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
