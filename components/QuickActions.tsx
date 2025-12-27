import React from 'react';
import { ChevronDown24Regular } from "@fluentui/react-icons";
import './QuickActions.css';

const QuickActions: React.FC = () => {
  return (
    <div className="quick-actions">
      <h2 className="quick-actions-title">Quick actions</h2>
      <p className="quick-actions-subtitle">Need extra help? Try these prompts</p>
      
      <div className="quick-actions-list">
        <button className="quick-action-card">
          Summarize my <span className="highlight">today&apos;s</span> meetings
        </button>
        
        <button className="quick-action-card">
          Schedule a meeting with <span className="highlight">external participants</span> Friday <span className="highlight">at 3pm</span>
        </button>
        
        <button className="quick-action-card">
          Show all past and upcoming meeting with <span className="highlight">client</span>
        </button>
        
        <button className="quick-action-card">
          Show Earlier meetings <span className="highlight">this week</span> with open action items
        </button>
      </div>
      
      <button className="see-more-btn">
        <span>See more</span>
        <ChevronDown24Regular className="chevron-icon" />
      </button>
    </div>
  );
};

export default QuickActions;
