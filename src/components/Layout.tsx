import React, { useState } from 'react';
import { ModuleType, SystemOption } from '../types';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../modules/Dashboard';
import MerchantManagement from '../modules/Merchant';
import SpaceManagement from '../modules/Space';
import ContractManagement from '../modules/Contract';
import FinancialManagement from '../modules/Finance';
import ParkingManagement from '../modules/Parking';
import InvestmentManagement from '../modules/Investment';
import ActivityManagement from '../modules/Activity';
import MallManagement from '../modules/Mall';

interface LayoutProps {
  system: SystemOption;
  onLogout: () => void;
}

export default function Layout({ system, onLogout }: LayoutProps) {
  const [activeModule, setActiveModule] = useState<ModuleType>('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'merchant':
        return <MerchantManagement />;
      case 'space':
        return <SpaceManagement />;
      case 'contract':
        return <ContractManagement />;
      case 'finance':
        return <FinancialManagement />;
      case 'parking':
        return <ParkingManagement />;
      case 'investment':
        return <InvestmentManagement />;
      case 'activity':
        return <ActivityManagement />;
      case 'mall':
        return <MallManagement />;
      default:
        return <Dashboard />;
    }
  };

  const getModuleTitle = () => {
    switch (activeModule) {
      case 'dashboard': return '大屏可视化系统';
      case 'merchant': return '商户管理';
      case 'space': return '空间管理';
      case 'contract': return '合同管理';
      case 'finance': return '财务管理';
      case 'parking': return '停车管理';
      case 'investment': return '招商管理';
      case 'activity': return '活动管理';
      case 'mall': return '商城管理';
      default: return '大屏可视化系统';
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar
        system={system}
        activeModule={activeModule}
        onChangeModule={setActiveModule}
        onLogout={onLogout}
      />
      <div className="flex-1 ml-64 flex flex-col h-full overflow-hidden">
        <Header system={system} title={getModuleTitle()} />
        <main className="flex-1 overflow-y-auto">
          {renderModule()}
        </main>
      </div>
    </div>
  );
}
