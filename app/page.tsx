'use client';

import React, { useState } from 'react';
import {
  Home24Regular,
  Search24Regular,
  Chat24Regular,
  Bot24Regular,
  Notebook24Regular,
  ChevronDown24Regular,
  Settings24Regular,
  Add24Regular,
  Clock24Regular,
  ArrowReply16Regular,
  CheckmarkStarburst20Regular,
  Mic20Regular,
  PanelLeftText20Regular,
  Compose20Regular,
  ShieldTask24Regular,
  MoreHorizontal24Regular,
  Options20Regular,
  Briefcase16Regular,
  CalendarAssistant20Regular,
  DocumentBulletList16Regular,
} from "@fluentui/react-icons";
import SharedTabs from '@/components/SharedTabs';
import HomeTabContent from '@/components/HomeTabContent';
import QuickActions from '@/components/QuickActions';
import type { Tab } from '@/components/SharedTabs';
import './sales-page.css';
import './meetings-page.css';

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [activeTab, setActiveTab] = useState('meetings');

  const tabs: Tab[] = [
    { id: 'home', title: 'Home', isActive: activeTab === 'home' },
    { id: 'grow', title: 'Grow your business', isActive: activeTab === 'grow' },
    { id: 'track', title: 'Track your progress', isActive: activeTab === 'track' },
    { id: 'meetings', title: 'Meetings', isActive: activeTab === 'meetings' },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="sales-page">
      {/* Navigation - Rocksteady (Left Sidebar) */}
      <aside className={`navigation-sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        {/* Fixed Top Bar */}
        <div className="nav-top-bar">
          <div className="app-brand">
            <div className="brand-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1437 3.34932C13.9101 2.54966 13.177 2 12.3439 2L11.7427 2C10.8467 2 10.0758 2.634 9.90296 3.51321L8.85352 8.85006L9.15094 7.89102C9.39431 7.1063 10.1202 6.57143 10.9418 6.57143L14.2351 6.57143L15.6352 7.74347L16.8818 6.57143H16.4905C15.6574 6.57143 14.9242 6.02177 14.6907 5.22211L14.1437 3.34932Z" fill="#424242"/>
                <path d="M6.0492 16.6427C6.28017 17.4462 7.01519 17.9997 7.85121 17.9997H9.07497C10.0844 17.9997 10.9126 17.2006 10.9488 16.1918L11.1295 11.1426L10.842 12.0951C10.6031 12.8867 9.87385 13.4283 9.04701 13.4283L5.73383 13.4283L4.34959 12.5431L3.32812 13.4283H3.71324C4.54926 13.4283 5.28427 13.9818 5.51524 14.7853L6.0492 16.6427Z" fill="url(#paint0_radial_15190_66538)"/>
                <path d="M12.2503 2H5.68785C3.81286 2 2.68787 4.39748 1.93788 6.79497C1.04933 9.63537 -0.113354 13.4342 3.25037 13.4342H6.11145C6.9435 13.4342 7.67548 12.8878 7.91125 12.0899C8.40466 10.4199 9.26493 7.52162 9.94109 5.31373C10.2857 4.18837 10.5728 3.22188 11.0134 2.62001C11.2604 2.28258 11.6721 2 12.2503 2Z" fill="url(#paint1_radial_15190_66538)"/>
                <path d="M12.2503 2H5.68785C3.81286 2 2.68787 4.39748 1.93788 6.79497C1.04933 9.63537 -0.113354 13.4342 3.25037 13.4342H6.11145C6.9435 13.4342 7.67548 12.8878 7.91125 12.0899C8.40466 10.4199 9.26493 7.52162 9.94109 5.31373C10.2857 4.18837 10.5728 3.22188 11.0134 2.62001C11.2604 2.28258 11.6721 2 12.2503 2Z" fill="url(#paint2_linear_15190_66538)"/>
                <path d="M7.74902 18.0006H14.3115C16.1865 18.0006 17.3114 15.6039 18.0614 13.2073C18.95 10.3678 20.1127 6.57031 16.7489 6.57031H13.8877C13.0557 6.57031 12.3238 7.11657 12.088 7.91444C11.5946 9.58386 10.7343 12.481 10.0582 14.688C9.71358 15.813 9.42651 16.7792 8.98593 17.3808C8.73893 17.7181 8.32725 18.0006 7.74902 18.0006Z" fill="url(#paint3_radial_15190_66538)"/>
                <path d="M7.74902 18.0006H14.3115C16.1865 18.0006 17.3114 15.6039 18.0614 13.2073C18.95 10.3678 20.1127 6.57031 16.7489 6.57031H13.8877C13.0557 6.57031 12.3238 7.11657 12.088 7.91444C11.5946 9.58386 10.7343 12.481 10.0582 14.688C9.71358 15.813 9.42651 16.7792 8.98593 17.3808C8.73893 17.7181 8.32725 18.0006 7.74902 18.0006Z" fill="url(#paint4_linear_15190_66538)"/>
                <defs>
                  <radialGradient id="paint0_radial_15190_66538" cx="0" cy="0" r="1" gradientTransform="matrix(4.0792 5.17125 4.81539 -4.22088 4.74347 13.4005)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB657"/>
                    <stop offset="0.633728" stopColor="#FF5F3D"/>
                    <stop offset="0.923392" stopColor="#C02B3C"/>
                  </radialGradient>
                  <radialGradient id="paint1_radial_15190_66538" cx="0" cy="0" r="1" gradientTransform="matrix(-0.594541 -10.1312 58.8167 -3.23085 5.52522 13.4301)" gradientUnits="userSpaceOnUse">
                    <stop offset="0.03" stopColor="#FFC800"/>
                    <stop offset="0.31" stopColor="#98BD42"/>
                    <stop offset="0.49" stopColor="#52B471"/>
                    <stop offset="0.843838" stopColor="#0D91E1"/>
                  </radialGradient>
                  <linearGradient id="paint2_linear_15190_66538" x1="6.11337" y1="2" x2="6.59201" y2="13.4355" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DCBFF"/>
                    <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0"/>
                  </linearGradient>
                  <radialGradient id="paint3_radial_15190_66538" cx="0" cy="0" r="1" gradientTransform="matrix(-5.18438 14.3365 -17.6444 -6.32742 17.0861 5.4512)" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0661714" stopColor="#8C48FF"/>
                    <stop offset="0.5" stopColor="#F2598A"/>
                    <stop offset="0.895833" stopColor="#FFB152"/>
                  </radialGradient>
                  <linearGradient id="paint4_linear_15190_66538" x1="17.6045" y1="5.87247" x2="17.5982" y2="8.98568" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0581535" stopColor="#F8ADFA"/>
                    <stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="brand-text">M365 Copilot</span>
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <PanelLeftText20Regular />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="nav-scrollable">
          <nav className="nav-menu">
            <div className="nav-item active">
              <Home24Regular className="nav-icon" />
              <span className="nav-label">Home</span>
            </div>
            <div className="nav-item">
              <Search24Regular className="nav-icon" />
              <span className="nav-label">Search</span>
            </div>
            <div className="nav-item">
              <Chat24Regular className="nav-icon" />
              <span className="nav-label">Chat</span>
            </div>

            {/* Agents Accordion */}
            <div className="nav-accordion collapsed">
              <div className="nav-item accordion-header">
                <div className="indent-spacer"></div>
                <Bot24Regular className="nav-icon" />
                <span className="nav-label">Agents</span>
                <ChevronDown24Regular className="nav-chevron" />
              </div>
            </div>

            {/* Chats Accordion - Expanded */}
            <div className="nav-accordion expanded">
              <div className="nav-item accordion-header">
                <div className="indent-spacer"></div>
                <Clock24Regular className="nav-icon" />
                <span className="nav-label">Chats</span>
                <ChevronDown24Regular className="nav-chevron chevron-up" />
              </div>
              
              {/* Chat History Sub-items */}
              <div className="nav-sub-items">
                <div className="nav-item sub-item">
                  <div className="indent-spacer"></div>
                  <span className="nav-label">Latest on Copilot for Sales - WGB</span>
                </div>
                <div className="nav-item sub-item">
                  <div className="indent-spacer"></div>
                  <span className="nav-label">RFP for new market strategies and opportunities</span>
                </div>
                <div className="nav-item sub-item">
                  <div className="indent-spacer"></div>
                  <span className="nav-label">Follow-up Tasks for Meeting</span>
                  <ArrowReply16Regular className="task-status-icon" />
                </div>
                <div className="nav-item sub-item">
                  <div className="indent-spacer"></div>
                  <span className="nav-label">FY23 Budget Summary</span>
                </div>
                <div className="nav-item sub-item">
                  <div className="indent-spacer"></div>
                  <span className="nav-label">Weather on upcoming trip</span>
                </div>
                <div className="nav-item sub-item all-link">
                  <div className="indent-spacer"></div>
                  <span className="nav-label">All chats</span>
                </div>
              </div>
            </div>

            {/* Pages Accordion */}
            <div className="nav-accordion collapsed">
              <div className="nav-item accordion-header">
                <div className="indent-spacer"></div>
                <Notebook24Regular className="nav-icon" />
                <span className="nav-label">Pages</span>
                <ChevronDown24Regular className="nav-chevron" />
              </div>
            </div>

            {/* Notebooks */}
            <div className="nav-item">
              <Notebook24Regular className="nav-icon" />
              <span className="nav-label">Notebooks</span>
            </div>

            {/* Create */}
            <div className="nav-item">
              <Add24Regular className="nav-icon" />
              <span className="nav-label">Create</span>
            </div>

            {/* Actions */}
            <div className="nav-item">
              <Settings24Regular className="nav-icon" />
              <span className="nav-label">Actions</span>
            </div>

            {/* Apps */}
            <div className="nav-item">
              <Bot24Regular className="nav-icon" />
              <span className="nav-label">Apps</span>
            </div>
          </nav>
        </div>

        {/* Bottom Fixed Bar - User Profile */}
        <div className="nav-bottom">
          <div className="user-profile">
            <div className="avatar">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='10' fill='%23E6E6E6'/%3E%3C/svg%3E" alt="User" />
            </div>
            <span className="user-name">Erika Fuller</span>
          </div>
          <button className="more-options">
            <Settings24Regular />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="breadcrumb">
            <div className="sales-logo">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00011 30L18.5875 30C22.2972 30 24.3757 26.0493 22.7831 23.0725C22.3512 22.2651 21.9302 21.4156 21.9302 20.5L17.5 16L16.0001 16L4.73667 21.2295C3.06777 22.0043 2.00011 23.6771 2.00011 25.5171L2.00011 26C2.00011 28.2091 3.79097 30 6.00011 30Z" fill="url(#paint0_linear_header)"/>
                <path d="M25.9999 2.00001L13.4125 2.00001C9.61543 2.00001 7.52729 6.13909 9.33562 9.13624C9.73916 9.80508 10.1876 10.4615 10.4126 11.2095L10.5 11.5L15 16L15.9999 16C16.6564 16 17.3026 15.8371 17.8806 15.5259L27.5138 10.3387C29.045 9.51416 29.9999 7.91551 29.9999 6.17644L29.9999 6C29.9999 3.79086 28.209 2.00001 25.9999 2.00001Z" fill="url(#paint1_linear_header)"/>
                <path d="M19.9999 10L25.9996 10C28.2088 10 29.9997 8.20914 29.9997 6V18.5874C29.9997 22.799 24.9077 24.9082 21.9297 21.9301L15.9999 16.0002V14C15.9999 11.7909 17.7908 10 19.9999 10Z" fill="url(#paint2_linear_header)"/>
                <path d="M11.9999 22H5.99992C3.79079 22 1.99995 23.7909 2 26V13.413C2 9.20139 7.09196 7.09224 10.07 10.0703L15.9999 16.0002L15.9999 18C15.9998 20.2092 14.209 22 11.9999 22Z" fill="url(#paint3_linear_header)"/>
                <mask id="mask0_header" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="2" y="6" width="29" height="24">
                  <path d="M2.00101 25.9999C2.00103 23.7908 3.79186 22 6.00094 22H12.001C14.2101 22 16.001 20.2091 16.001 18L16.001 15.9999V14C16.001 11.7909 17.7918 10 20.001 10H26.0009C28.2101 10 30.0009 8.20914 30.0009 6V29.9999H6.00095C3.79183 29.9999 2.00099 28.209 2.00101 25.9999Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_header)">
                  <g filter="url(#filter0_f_header)">
                    <path d="M6.0008 22.9992H12.0004C14.2095 22.9992 16.0004 21.2083 16.0004 18.9992V14.999C16.0004 12.7899 17.7913 10.999 20.0004 10.999H26C28.2091 10.999 30 9.20818 30 6.99904V5.99924C30 3.7901 28.2091 1.99924 26 1.99924H2.00056L2.00079 26.9893C2.00609 24.7847 3.79491 22.9992 6.0008 22.9992Z" fill="url(#paint4_linear_header)" fillOpacity="0.5"/>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_f_header" x="-2.72627" y="-2.72725" width="37.4535" height="34.4447" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2.36362" result="effect1_foregroundBlur_header"/>
                  </filter>
                  <linearGradient id="paint0_linear_header" x1="1.52284" y1="29.6818" x2="17.2065" y2="13.7727" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#122882"/>
                    <stop offset="0.478498" stopColor="#1A43BC"/>
                    <stop offset="1" stopColor="#0BA0C5"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_header" x1="27.2291" y1="1.99999" x2="14.979" y2="16.4375" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9BF3AF"/>
                    <stop offset="0.664642" stopColor="#3DD9EB"/>
                    <stop offset="1" stopColor="#3DCBFF"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_header" x1="2.00032" y1="17.7935" x2="31.4947" y2="17.7935" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2764E7"/>
                    <stop offset="0.235628" stopColor="#0099F8"/>
                    <stop offset="0.734926" stopColor="#16BFDF"/>
                    <stop offset="1" stopColor="#3EE5C9"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_header" x1="2.00032" y1="17.7935" x2="31.4947" y2="17.7935" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2764E7"/>
                    <stop offset="0.235628" stopColor="#0099F8"/>
                    <stop offset="0.734926" stopColor="#16BFDF"/>
                    <stop offset="1" stopColor="#3EE5C9"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear_header" x1="29.3636" y1="5.81765" x2="2.84968" y2="28.4491" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2253CE"/>
                    <stop offset="0.494743" stopColor="#122882"/>
                    <stop offset="1" stopColor="#191164"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="breadcrumb-text">Sales</span>
          </div>
          <div className="header-actions">
            <button className="action-btn action-btn-edit">
              <Compose20Regular />
            </button>
            <button className="action-btn action-btn-shield">
              <ShieldTask24Regular />
            </button>
            <button className="action-btn">
              <MoreHorizontal24Regular />
            </button>
          </div>
        </header>

        {/* Sales Agent Header */}
        <div className="sales-header">
          <div className="agent-info">
            <div className="agent-header-row">
              <div className="agent-icon">
                <img src="/icons/Copilot for Sales.svg" alt="" className="agent-logo" />
              </div>
              <h1 className="agent-name">Sales</h1>
            </div>
            <div className="agent-created">
              <span>Created by: Microsoft</span>
              <CheckmarkStarburst20Regular className="verified-badge" />
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="chat-input-container">
          <div className="chat-input">
            <div className="input-area">
              <textarea 
                className="input-field" 
                placeholder="Ask Sales"
                rows={1}
              />
            </div>
            <div className="input-footer">
              <div className="input-tools">
                <button className="add-btn">
                  <Add24Regular />
                </button>
                <button className="tool-btn">
                  <Options20Regular />
                  <span>Tools</span>
                </button>
                <button className="tool-btn">
                  <Briefcase16Regular />
                  <span>Sources</span>
                </button>
              </div>
              <div className="input-actions">
                <button className="dictate-btn">
                  <Mic20Regular />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Shared Tabs Component */}
        <SharedTabs tabs={tabs} onTabChange={handleTabChange} />

        {/* Home Tab Content */}
        {activeTab === 'home' && <HomeTabContent />}

        {/* Meetings Content */}
        {activeTab === 'meetings' && (
          <div className="meetings-layout">
            <div className="meetings-content">
            {/* Sales meetings header */}
            <div className="meetings-header">
              <div className="meetings-title-row">
                <h2 className="meetings-title">Sales meetings</h2>
                <button className="open-calendar-btn">
                  <CalendarAssistant20Regular />
                  <span>Open Calendar</span>
                </button>
              </div>
            </div>

            {/* Upcoming meetings section */}
            <div className="upcoming-section">
              <h3 className="section-heading">Upcoming meetings next 24 hours</h3>
              
              <div className="section-row">
                <p className="section-count">Today (3)</p>
                <div className="pagination">
                  <button className="pagination-btn disabled">
                    <ChevronDown24Regular style={{ transform: 'rotate(90deg)' }} />
                  </button>
                  <span className="pagination-text">2 of 7</span>
                  <button className="pagination-btn">
                    <ChevronDown24Regular style={{ transform: 'rotate(-90deg)' }} />
                  </button>
                </div>
              </div>

              <div className="upcoming-cards">
                {/* Card 1 */}
                <div className="meeting-card upcoming">
                  <div className="card-status-bar"></div>
                  <div className="card-content">
                    <h4 className="meeting-title">Accelerating Sales with Copilot: WGB/Fabrikam</h4>
                    <p className="meeting-time">Today, 10:30 AM - 11:15 AM</p>
                    <div className="meeting-meta">
                      <div className="meta-item">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="meta-avatar" />
                        <span className="meta-count">+5</span>
                      </div>
                      <span className="meta-separator">•</span>
                      <div className="meta-item">
                        <Briefcase16Regular className="meta-icon" />
                        <span>Woodgrove Bank</span>
                      </div>
                      <span className="meta-separator">•</span>
                      <div className="meta-item">
                        <DocumentBulletList16Regular className="meta-icon" />
                        <span>Files (3)</span>
                      </div>
                    </div>
                    
                    <div className="highlights-section">
                      <div className="highlights-header">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2L9.5 6H14L10.5 9L12 13L8 10L4 13L5.5 9L2 6H6.5L8 2Z" fill="#464feb"/>
                        </svg>
                        <span className="highlights-title">Highlights</span>
                      </div>
                      <ul className="highlights-list">
                        <li>$850K pilot on the line—Woodgrove Bank execs are weighing us vs. North Wind. Be ready to tip the scale.</li>
                        <li>Elize Rigter (Ops) flagged pricing as a blocker in the previous meeting with your colleague James Barlow.</li>
                        <li>Hans Van Dorssen (COO) wants integration finalized—use this call to align on next steps.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="meeting-card upcoming">
                  <div className="card-status-bar striped"></div>
                  <div className="card-content">
                    <h4 className="meeting-title">Contoso Renewal Call</h4>
                    <p className="meeting-time">Today, 2:30 PM - 2:45 PM</p>
                    <div className="meeting-meta">
                      <div className="meta-item">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="meta-avatar" />
                        <span className="meta-count">+3</span>
                      </div>
                      <span className="meta-separator">•</span>
                      <div className="meta-item">
                        <Briefcase16Regular className="meta-icon" />
                        <span>Contoso</span>
                      </div>
                    </div>
                    
                    <div className="highlights-section">
                      <div className="highlights-header">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2L9.5 6H14L10.5 9L12 13L8 10L4 13L5.5 9L2 6H6.5L8 2Z" fill="#464feb"/>
                        </svg>
                        <span className="highlights-title">Highlights</span>
                      </div>
                      <ul className="highlights-list">
                        <li>$850K pilot on the line—Woodgrove Bank execs are weighing us vs. North Wind. Be ready to tip the scale.</li>
                        <li>Elize Rigter (Ops) flagged pricing as a blocker in the previous meeting with your colleague James Barlow.</li>
                        <li>Hans Van Dorssen (COO) wants integration finalized—use this call to align on next steps.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="section-link">Prepare for other upcoming meetings</a>
            </div>

            {/* Recent meetings section */}
            <div className="recent-section">
              <h3 className="section-heading">Recent meetings</h3>
              
              <div className="section-group">
                <button className="section-toggle">
                  <ChevronDown24Regular className="toggle-icon" />
                  <span className="section-count">Today (2)</span>
                </button>

                <div className="recent-cards">
                  <div className="meeting-card recent">
                    <div className="card-status-bar"></div>
                    <div className="card-content">
                      <h4 className="meeting-title">Accelerating Sales with Copilot: WGB/Fabrikam</h4>
                      <div className="meeting-time-row">
                        <span className="meeting-time">Today, 9:00 AM - 9:30 AM</span>
                        <span className="meta-separator">•</span>
                        <a href="#" className="teams-link">Open Team&apos;s recap</a>
                      </div>
                      <div className="meeting-meta">
                        <div className="meta-item">
                          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="meta-avatar" />
                          <span className="meta-count">+5</span>
                        </div>
                        <span className="meta-separator">•</span>
                        <div className="meta-item">
                          <Briefcase16Regular className="meta-icon" />
                          <span>TechCorp</span>
                        </div>
                        <span className="meta-separator">•</span>
                        <div className="meta-item">
                          <DocumentBulletList16Regular className="meta-icon" />
                          <span>Files (3)</span>
                        </div>
                        <span className="meta-separator">•</span>
                        <div className="meta-item">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect width="12" height="14" x="2" y="1" fill="#464feb" rx="1"/>
                          </svg>
                          <span>Actions (7)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="meeting-card recent">
                    <div className="card-status-bar"></div>
                    <div className="card-content">
                      <h4 className="meeting-title">Maximizing Earnings with Navigator</h4>
                      <div className="meeting-time-row">
                        <span className="meeting-time">Today, 9:00 AM - 9:30 AM</span>
                        <span className="meta-separator">•</span>
                        <a href="#" className="teams-link">Open Team&apos;s recap</a>
                      </div>
                      <div className="meeting-meta">
                        <div className="meta-item">
                          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar" className="meta-avatar" />
                          <span className="meta-count">+5</span>
                        </div>
                        <span className="meta-separator">•</span>
                        <div className="meta-item">
                          <Briefcase16Regular className="meta-icon" />
                          <span>TechCorp</span>
                        </div>
                        <span className="meta-separator">•</span>
                        <div className="meta-item">
                          <DocumentBulletList16Regular className="meta-icon" />
                          <span>Files (3)</span>
                        </div>
                        <span className="meta-separator">•</span>
                        <div className="meta-item">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect width="12" height="14" x="2" y="1" fill="#464feb" rx="1"/>
                          </svg>
                          <span>Actions (7)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="section-link">Catch up on earlier meetings</a>
            </div>
            </div>
            
            {/* Quick Actions Sidebar */}
            <QuickActions />
          </div>
        )}

        {/* Other tabs content can be added here */}
        {activeTab !== 'meetings' && activeTab !== 'home' && (
          <div className="tab-content-placeholder">
            <p style={{ textAlign: 'center', color: 'var(--colorNeutralForeground3)', padding: '40px' }}>
              Content for {tabs.find(t => t.id === activeTab)?.title} tab
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
