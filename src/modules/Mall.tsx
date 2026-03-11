import React, { useState } from 'react';
import { Search, Plus, Filter, ShoppingBag, Package, ClipboardList, TrendingUp, MoreHorizontal, CheckCircle2, XCircle, Clock } from 'lucide-react';

const mockProducts = [
  { id: 'P001', name: '星巴克大杯拿铁', category: '饮品', price: '¥32.00', stock: 999, status: '上架中', sales: 1250 },
  { id: 'P002', name: '耐克空军一号', category: '鞋服', price: '¥749.00', stock: 45, status: '上架中', sales: 320 },
  { id: 'P003', name: '海底捞双人套餐', category: '餐饮', price: '¥198.00', stock: 100, status: '上架中', sales: 890 },
  { id: 'P004', name: '泡泡玛特盲盒', category: '潮玩', price: '¥69.00', stock: 0, status: '已售罄', sales: 2100 },
  { id: 'P005', name: '中秋定制月饼礼盒', category: '食品', price: '¥299.00', stock: 500, status: '已下架', sales: 450 },
];

const mockOrders = [
  { id: 'ORD-20231024-001', user: '张三 (138****1234)', product: '星巴克大杯拿铁 x2', amount: '¥64.00', status: '已完成', time: '2023-10-24 10:30' },
  { id: 'ORD-20231024-002', user: '李四 (139****5678)', product: '耐克空军一号 x1', amount: '¥749.00', status: '待发货', time: '2023-10-24 11:15' },
  { id: 'ORD-20231024-003', user: '王五 (137****9012)', product: '海底捞双人套餐 x1', amount: '¥198.00', status: '待付款', time: '2023-10-24 14:20' },
  { id: 'ORD-20231023-089', user: '赵六 (136****3456)', product: '泡泡玛特盲盒 x3', amount: '¥207.00', status: '已发货', time: '2023-10-23 16:45' },
];

export default function MallManagement() {
  const [activeTab, setActiveTab] = useState('商品管理');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">商城管理</h2>
          <p className="text-sm text-slate-500 mt-1">管理线上商城的产品上下架、库存及订单处理</p>
        </div>
        {activeTab === '商品管理' && (
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus size={18} />
            新增商品
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Package size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">在售商品</p>
            <h4 className="text-2xl font-bold text-slate-800">342</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <ClipboardList size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">今日订单</p>
            <h4 className="text-2xl font-bold text-emerald-600">128</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
            <ShoppingBag size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">待处理订单</p>
            <h4 className="text-2xl font-bold text-slate-800">15</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">今日销售额</p>
            <h4 className="text-2xl font-bold text-slate-800">¥12,450</h4>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('商品管理')}
              className={`px-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === '商品管理'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              商品管理
            </button>
            <button
              onClick={() => setActiveTab('订单处理')}
              className={`px-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === '订单处理'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              订单处理
            </button>
          </div>
        </div>

        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={activeTab === '商品管理' ? "搜索商品名称/编号..." : "搜索订单号/手机号..."}
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
          {activeTab === '商品管理' ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                  <th className="p-4 font-medium">商品信息</th>
                  <th className="p-4 font-medium">分类</th>
                  <th className="p-4 font-medium">售价</th>
                  <th className="p-4 font-medium">库存</th>
                  <th className="p-4 font-medium">总销量</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                          <Package size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800">{product.name}</span>
                          <span className="text-xs text-slate-400 mt-0.5">{product.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                        {product.category}
                      </span>
                    </td>
                    <td className="p-4 text-sm font-bold text-rose-600">{product.price}</td>
                    <td className="p-4 text-sm text-slate-600">
                      <span className={product.stock < 10 ? 'text-rose-600 font-bold' : ''}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{product.sales}</td>
                    <td className="p-4 text-sm">
                      <ProductStatusBadge status={product.status} />
                    </td>
                    <td className="p-4 text-sm text-right">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm mr-3">编辑</button>
                      <button className="text-slate-400 hover:text-rose-600 font-medium text-sm">下架</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                  <th className="p-4 font-medium">订单编号</th>
                  <th className="p-4 font-medium">买家信息</th>
                  <th className="p-4 font-medium">商品内容</th>
                  <th className="p-4 font-medium">实付金额</th>
                  <th className="p-4 font-medium">下单时间</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 text-sm font-medium text-indigo-600 cursor-pointer hover:underline">{order.id}</td>
                    <td className="p-4 text-sm text-slate-700">{order.user}</td>
                    <td className="p-4 text-sm text-slate-600 max-w-[200px] truncate" title={order.product}>{order.product}</td>
                    <td className="p-4 text-sm font-bold text-slate-800">{order.amount}</td>
                    <td className="p-4 text-sm text-slate-500">{order.time}</td>
                    <td className="p-4 text-sm">
                      <OrderStatusBadge status={order.status} />
                    </td>
                    <td className="p-4 text-sm text-right">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">处理</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductStatusBadge({ status }: { status: string }) {
  switch (status) {
    case '上架中':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"><CheckCircle2 size={14} />{status}</span>;
    case '已售罄':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200"><XCircle size={14} />{status}</span>;
    case '已下架':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"><Clock size={14} />{status}</span>;
    default:
      return null;
  }
}

function OrderStatusBadge({ status }: { status: string }) {
  switch (status) {
    case '待付款':
      return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">{status}</span>;
    case '待发货':
      return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">{status}</span>;
    case '已发货':
      return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">{status}</span>;
    case '已完成':
      return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">{status}</span>;
    default:
      return null;
  }
}
