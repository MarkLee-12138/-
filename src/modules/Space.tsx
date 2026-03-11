import React, { useState } from 'react';
import { MapPin, Info, History, Search, Filter } from 'lucide-react';

const mockSpaces = [
  { id: 'A-101', type: '固定商铺', area: '120㎡', status: '已出租', currentTenant: '星巴克咖啡', rent: '¥20,000/月' },
  { id: 'A-102', type: '固定商铺', area: '80㎡', status: '空置', currentTenant: '-', rent: '¥15,000/月' },
  { id: 'B-201', type: '固定商铺', area: '200㎡', status: '已出租', currentTenant: '耐克运动', rent: '¥35,000/月' },
  { id: 'T-001', type: '临时摊位', area: '10㎡', status: '已出租', currentTenant: '手工饰品', rent: '¥1,000/天' },
  { id: 'T-002', type: '临时摊位', area: '15㎡', status: '空置', currentTenant: '-', rent: '¥1,500/天' },
];

export default function SpaceManagement() {
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">空间管理</h2>
            <p className="text-sm text-slate-500 mt-1">管理园区固定商铺与临时摊位空间</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-indigo-600" />
            园区平面图
          </h3>
          <div className="relative w-full h-[500px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            {/* 模拟交互式平面图 */}
            <div className="absolute inset-0 p-8">
              <div className="w-full h-full relative border-4 border-slate-300 rounded-2xl p-4 bg-white">
                <div className="absolute top-4 left-4 text-slate-400 font-bold text-xl opacity-50">北区</div>
                
                {/* 固定商铺 */}
                <button 
                  onClick={() => setSelectedSpace('A-101')}
                  className={`absolute top-16 left-16 w-40 h-32 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${selectedSpace === 'A-101' ? 'bg-indigo-100 border-indigo-500 shadow-md ring-4 ring-indigo-500/20' : 'bg-emerald-50 border-emerald-300 hover:border-emerald-400'}`}
                >
                  <span className="font-bold text-slate-700">A-101</span>
                  <span className="text-xs text-emerald-600 font-medium mt-1">星巴克咖啡</span>
                </button>

                <button 
                  onClick={() => setSelectedSpace('A-102')}
                  className={`absolute top-16 left-64 w-32 h-32 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${selectedSpace === 'A-102' ? 'bg-indigo-100 border-indigo-500 shadow-md ring-4 ring-indigo-500/20' : 'bg-slate-50 border-slate-300 hover:border-slate-400'}`}
                >
                  <span className="font-bold text-slate-700">A-102</span>
                  <span className="text-xs text-slate-500 font-medium mt-1">空置</span>
                </button>

                <button 
                  onClick={() => setSelectedSpace('B-201')}
                  className={`absolute bottom-16 right-16 w-48 h-40 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${selectedSpace === 'B-201' ? 'bg-indigo-100 border-indigo-500 shadow-md ring-4 ring-indigo-500/20' : 'bg-emerald-50 border-emerald-300 hover:border-emerald-400'}`}
                >
                  <span className="font-bold text-slate-700">B-201</span>
                  <span className="text-xs text-emerald-600 font-medium mt-1">耐克运动</span>
                </button>

                {/* 临时摊位区 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 border-2 border-dashed border-rose-300 bg-rose-50/30 rounded-xl p-4 flex flex-wrap gap-4 justify-center items-center">
                  <div className="absolute -top-3 left-4 bg-white px-2 text-xs font-bold text-rose-500">中心广场 (临时摊位)</div>
                  
                  <button 
                    onClick={() => setSelectedSpace('T-001')}
                    className={`w-16 h-16 border-2 rounded-full flex flex-col items-center justify-center transition-all ${selectedSpace === 'T-001' ? 'bg-indigo-100 border-indigo-500 shadow-md ring-4 ring-indigo-500/20' : 'bg-emerald-50 border-emerald-300 hover:border-emerald-400'}`}
                  >
                    <span className="font-bold text-slate-700 text-xs">T-001</span>
                  </button>

                  <button 
                    onClick={() => setSelectedSpace('T-002')}
                    className={`w-16 h-16 border-2 rounded-full flex flex-col items-center justify-center transition-all ${selectedSpace === 'T-002' ? 'bg-indigo-100 border-indigo-500 shadow-md ring-4 ring-indigo-500/20' : 'bg-slate-50 border-slate-300 hover:border-slate-400'}`}
                  >
                    <span className="font-bold text-slate-700 text-xs">T-002</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-96 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
          <div className="p-6 border-b border-slate-200 bg-slate-50/50">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <Info size={20} className="text-indigo-600" />
              空间详情
            </h3>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            {selectedSpace ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-slate-900">{selectedSpace}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    mockSpaces.find(s => s.id === selectedSpace)?.status === '已出租' 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {mockSpaces.find(s => s.id === selectedSpace)?.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">空间类型</p>
                    <p className="font-medium text-slate-800">{mockSpaces.find(s => s.id === selectedSpace)?.type}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">建筑面积</p>
                    <p className="font-medium text-slate-800">{mockSpaces.find(s => s.id === selectedSpace)?.area}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 col-span-2">
                    <p className="text-xs text-slate-500 mb-1">指导租金</p>
                    <p className="font-medium text-slate-800 text-lg text-indigo-600">{mockSpaces.find(s => s.id === selectedSpace)?.rent}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h5 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <History size={18} className="text-slate-400" />
                    历史入驻记录
                  </h5>
                  <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {mockSpaces.find(s => s.id === selectedSpace)?.status === '已出租' && (
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-white p-3 rounded-lg border border-emerald-200 shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-slate-800 text-sm">{mockSpaces.find(s => s.id === selectedSpace)?.currentTenant}</span>
                            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">当前</span>
                          </div>
                          <p className="text-xs text-slate-500">2023.01 - 至今</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                      <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-slate-600 text-sm">瑞幸咖啡</span>
                        </div>
                        <p className="text-xs text-slate-500">2021.05 - 2022.12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                <MapPin size={48} className="opacity-20" />
                <p className="text-sm">请在左侧平面图中点击选择空间</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
