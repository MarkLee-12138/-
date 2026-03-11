import React, { useState } from 'react';
import { Search, Filter, FileText, Download, Eye, AlertCircle } from 'lucide-react';

const mockContracts = [
  { id: 'HT-2023-001', merchant: '星巴克咖啡', space: 'A-101', type: '租赁合同', startDate: '2023-01-15', endDate: '2026-01-14', amount: '¥720,000', status: '生效中' },
  { id: 'HT-2023-002', merchant: '耐克运动', space: 'B-201', type: '租赁合同', startDate: '2023-02-20', endDate: '2028-02-19', amount: '¥2,100,000', status: '生效中' },
  { id: 'HT-2023-003', merchant: '手工饰品', space: 'T-001', type: '临时租赁', startDate: '2023-10-01', endDate: '2023-10-07', amount: '¥7,000', status: '即将到期' },
  { id: 'HT-2022-045', merchant: '海底捞', space: 'C-301', type: '租赁合同', startDate: '2022-11-11', endDate: '2027-11-10', amount: '¥3,500,000', status: '生效中' },
  { id: 'HT-2021-012', merchant: '瑞幸咖啡', space: 'A-102', type: '租赁合同', startDate: '2021-05-01', endDate: '2022-12-31', amount: '¥300,000', status: '已终止' },
];

export default function ContractManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">合同管理</h2>
          <p className="text-sm text-slate-500 mt-1">管理入驻商户的租赁合同及相关文件</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
            <Download size={18} />
            导出报表
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-sm">
            <FileText size={18} />
            起草合同
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="搜索合同编号/商户名称..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
              <option value="">所有状态</option>
              <option value="生效中">生效中</option>
              <option value="即将到期">即将到期</option>
              <option value="已终止">已终止</option>
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
                <th className="p-4 font-medium">合同编号</th>
                <th className="p-4 font-medium">商户名称</th>
                <th className="p-4 font-medium">关联空间</th>
                <th className="p-4 font-medium">合同类型</th>
                <th className="p-4 font-medium">起止日期</th>
                <th className="p-4 font-medium">合同总额</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockContracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 text-sm font-medium text-indigo-600 cursor-pointer hover:underline">{contract.id}</td>
                  <td className="p-4 text-sm text-slate-700 font-medium">{contract.merchant}</td>
                  <td className="p-4 text-sm text-slate-600">{contract.space}</td>
                  <td className="p-4 text-sm text-slate-600">{contract.type}</td>
                  <td className="p-4 text-sm text-slate-600">
                    <div className="flex flex-col">
                      <span>{contract.startDate}</span>
                      <span className="text-slate-400 text-xs">至 {contract.endDate}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-700">{contract.amount}</td>
                  <td className="p-4 text-sm">
                    <ContractStatusBadge status={contract.status} />
                  </td>
                  <td className="p-4 text-sm text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" title="查看详情">
                        <Eye size={18} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="下载附件">
                        <Download size={18} />
                      </button>
                    </div>
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

function ContractStatusBadge({ status }: { status: string }) {
  switch (status) {
    case '生效中':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          {status}
        </span>
      );
    case '即将到期':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
          <AlertCircle size={14} />
          {status}
        </span>
      );
    case '已终止':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
          {status}
        </span>
      );
    default:
      return null;
  }
}
