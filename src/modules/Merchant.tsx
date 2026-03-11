import React, { useState } from 'react';
import { Search, Plus, Filter, MoreHorizontal, CheckCircle2, XCircle, Clock } from 'lucide-react';

const mockMerchants = [
  { id: 'M001', name: '星巴克咖啡', type: '餐饮', status: '营业中', contact: '张三', phone: '13800138000', joinDate: '2023-01-15' },
  { id: 'M002', name: '耐克运动', type: '零售', status: '营业中', contact: '李四', phone: '13900139000', joinDate: '2023-02-20' },
  { id: 'M003', name: '喜茶', type: '餐饮', status: '待审批', contact: '王五', phone: '13700137000', joinDate: '2023-10-05' },
  { id: 'M004', name: '泡泡玛特', type: '零售', status: '装修中', contact: '赵六', phone: '13600136000', joinDate: '2023-09-12' },
  { id: 'M005', name: '海底捞', type: '餐饮', status: '营业中', contact: '孙七', phone: '13500135000', joinDate: '2022-11-11' },
];

export default function MerchantManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">商户管理</h2>
          <p className="text-sm text-slate-500 mt-1">管理园区内所有商户的入驻、审批与日常信息</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-sm">
          <Plus size={18} />
          新增商户
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="搜索商户名称/编号/联系人..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter size={16} />
            筛选
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                <th className="p-4 font-medium">商户编号</th>
                <th className="p-4 font-medium">商户名称</th>
                <th className="p-4 font-medium">业态类型</th>
                <th className="p-4 font-medium">联系人</th>
                <th className="p-4 font-medium">联系电话</th>
                <th className="p-4 font-medium">入驻日期</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockMerchants.map((merchant) => (
                <tr key={merchant.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 text-sm font-medium text-slate-900">{merchant.id}</td>
                  <td className="p-4 text-sm text-slate-700 font-medium">{merchant.name}</td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                      {merchant.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{merchant.contact}</td>
                  <td className="p-4 text-sm text-slate-600">{merchant.phone}</td>
                  <td className="p-4 text-sm text-slate-600">{merchant.joinDate}</td>
                  <td className="p-4 text-sm">
                    <StatusBadge status={merchant.status} />
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
        
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
          <span>共 5 条记录</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-300 rounded-md hover:bg-slate-50 disabled:opacity-50">上一页</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md">1</button>
            <button className="px-3 py-1 border border-slate-300 rounded-md hover:bg-slate-50 disabled:opacity-50">下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case '营业中':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 size={14} />
          {status}
        </span>
      );
    case '待审批':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
          <Clock size={14} />
          {status}
        </span>
      );
    case '装修中':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
          <Clock size={14} />
          {status}
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
          <XCircle size={14} />
          {status}
        </span>
      );
  }
}
