import React from 'react';
import { Add20Regular } from "@fluentui/react-icons";
import './SharedTabs.css';

export interface Tab {
  id: string;
  title: string;
  isActive?: boolean;
}

interface SharedTabsProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
  showAddButton?: boolean;
}

const SharedTabs: React.FC<SharedTabsProps> = ({ tabs, onTabChange, showAddButton = true }) => {
  return (
    <div className="tabs-container">
      <div className="horizontal-tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`horizontal-tab ${tab.isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-title">{tab.title}</span>
            <div className="selection-indicator">
              {tab.isActive && <div className="selector"></div>}
            </div>
          </button>
        ))}
        {showAddButton && (
          <button className="horizontal-tab add-tab">
            <div className="add-icon-container">
              <Add20Regular />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default SharedTabs;
