import React, { useState } from 'react';
import { Search, Plus, Filter, Phone, Mail, Calendar, CheckCircle2, XCircle, Clock, Building2 } from 'lucide-react';

const mockLeads = [
  { id: 'L001', brand: '肯德基', type: '餐饮', contact: '王经理', phone: '13800138000', intentSpace: 'A区', status: '意向洽谈', updateTime: '2023-10-24' },
  { id: 'L002', brand: '阿迪达斯', type: '零售', contact: '李总', phone: '13900139000', intentSpace: 'B区', status: '合同审核', updateTime: '2023-10-23' },
  { id: 'L003', brand: '完美日记', type: '美妆', contact: '张女士', phone: '13700137000', intentSpace: 'B区', status: '初步接触', updateTime: '2023-10-22' },
  { id: 'L004', brand: '密室逃脱', type: '娱乐', contact: '赵先生', phone: '13600136000', intentSpace: 'C区', status: '已签约', updateTime: '2023-10-20' },
  { id: 'L005', brand: '特色小吃', type: '餐饮', contact: '孙老板', phone: '13500135000', intentSpace: '临时摊位', status: '流失', updateTime: '2023-10-15' },
];

export default function InvestmentManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">招商管理</h2>
          <p className="text-sm text-slate-500 mt-1">管理园区招商线索、意向客户与招商进度</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-sm">
          <Plus size={18} />
          新增线索
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">总线索数</p>
          <h4 className="text-3xl font-bold text-slate-800">128</h4>
          <p className="text-xs text-emerald-600 font-medium mt-2 flex items-center gap-1">
            本月新增 15
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">意向洽谈中</p>
          <h4 className="text-3xl font-bold text-indigo-600">32</h4>
          <p className="text-xs text-slate-400 mt-2">转化率 25%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">本月已签约</p>
          <h4 className="text-3xl font-bold text-emerald-600">5</h4>
          <p className="text-xs text-slate-400 mt-2">完成目标 83%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">空置率</p>
          <h4 className="text-3xl font-bold text-rose-600">12.5%</h4>
          <p className="text-xs text-slate-400 mt-2">环比下降 2.1%</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="搜索品牌名称/联系人..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
              <option value="">所有状态</option>
              <option value="初步接触">初步接触</option>
              <option value="意向洽谈">意向洽谈</option>
              <option value="合同审核">合同审核</option>
              <option value="已签约">已签约</option>
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
                <th className="p-4 font-medium">意向品牌</th>
                <th className="p-4 font-medium">业态类型</th>
                <th className="p-4 font-medium">联系方式</th>
                <th className="p-4 font-medium">意向空间</th>
                <th className="p-4 font-medium">最新跟进</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                        {lead.brand.substring(0, 1)}
                      </div>
                      <span className="text-sm font-bold text-slate-800">{lead.brand}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                      {lead.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-1"><span className="text-slate-400">{lead.contact}</span></span>
                      <span className="flex items-center gap-1 text-xs text-slate-500"><Phone size={12} /> {lead.phone}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Building2 size={14} className="text-slate-400" />
                      {lead.intentSpace}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-slate-400" />
                      {lead.updateTime}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <LeadStatusBadge status={lead.status} />
                  </td>
                  <td className="p-4 text-sm text-right">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">跟进记录</button>
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

function LeadStatusBadge({ status }: { status: string }) {
  switch (status) {
    case '初步接触':
      return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">{status}</span>;
    case '意向洽谈':
      return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">{status}</span>;
    case '合同审核':
      return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">{status}</span>;
    case '已签约':
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"><CheckCircle2 size={12} />{status}</span>;
    case '流失':
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200"><XCircle size={12} />{status}</span>;
    default:
      return null;
  }
}
