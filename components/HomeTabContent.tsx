'use client';

import React, { useRef, useEffect } from 'react';
import {
  Clock24Regular,
  ArrowReply16Regular,
  Play12Filled,
  Sparkle24Filled,
  CalendarAssistant20Regular,
  Briefcase16Regular,
  DocumentBulletList16Regular,
} from "@fluentui/react-icons";
import Avatar from './Avatar';

const HomeTabContent: React.FC = () => {
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumnWidths = () => {
      if (column2Ref.current && column3Ref.current) {
        const fixedColumnWidth = 346;
        column2Ref.current.style.width = `${fixedColumnWidth}px`;
        column3Ref.current.style.width = `${fixedColumnWidth}px`;
      }
    };

    updateColumnWidths();
    window.addEventListener('resize', updateColumnWidths);
    return () => window.removeEventListener('resize', updateColumnWidths);
  }, []);

  return (
    <div className="content-columns">
      {/* Column 1 - Act */}
      <div className="column">
        <h2 className="column-title">Act</h2>

        <div className="section">
          <h3 className="section-title">Unblock your AI agents</h3>
          <div className="cards-grid">
            <div className="kanban-card">
              <div className="card-header">
                <span className="card-title">Northwind Traders</span>
                <span className="card-time">
                  <Clock24Regular className="time-icon" />
                  3d
                </span>
              </div>
              <div className="card-tags">
                <span className="tag tag-yellow">$1M-$10M</span>
                <span className="tag tag-purple">IoT monitoring</span>
              </div>
              <div className="card-agent">
                <div className="agent-badge">
                  <img src="/icons/Agents.svg" alt="" className="agent-icon-small" />
                  <span className="agent-name">SDR Agent</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>

            <div className="kanban-card">
              <div className="card-header">
                <span className="card-title">Boulder Innovations</span>
                <span className="card-time">
                  <Clock24Regular className="time-icon" />
                  3d
                </span>
              </div>
              <div className="card-tags">
                <span className="tag tag-yellow">$1M-$10M</span>
                <span className="tag tag-purple">IoT monitoring</span>
              </div>
              <div className="card-agent">
                <div className="agent-badge">
                  <img src="/icons/Agents.svg" alt="" className="agent-icon-small" />
                  <span className="agent-name">SDR Agent</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="section-link">Check other items in the pipeline</a>
        </div>

        <div className="section">
          <h3 className="section-title">Reply to high priority messages</h3>
          <div className="email-list">
            <div className="email-item">
              <Avatar 
                size={32} 
                imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
                statusBadge="available"
              />
              <div className="email-content">
                <div className="email-meta">Kadji Bell</div>
                <div className="email-subject">Re: Subscription renewal</div>
                <p className="email-preview">Hi Markus, Thanks for the update on cost changes. I&apos;m doing a comparative pricing analysis right now and I&apos;ll have an answer for you next week if we&apos;ll be renewing. Thanks, Reta</p>
              </div>
              <ArrowReply16Regular className="reply-icon" />
            </div>

            <div className="email-item">
              <Avatar 
                size={32} 
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                statusBadge="available"
              />
              <div className="email-content">
                <div className="email-meta">Mona Kane</div>
                <div className="email-subject">Teams message</div>
                <p className="email-preview">@Markus can you send me the proposed pricing changes for Tailspin Toys deal? I have a similar customer and wanted to compare.</p>
              </div>
              <ArrowReply16Regular className="reply-icon" />
            </div>
          </div>
          <a href="#" className="section-link">Catch up on other messages</a>
        </div>
      </div>

      {/* Column 2 - Get ready */}
      <div className="column" ref={column2Ref}>
        <h2 className="column-title">Get ready</h2>
        <p className="column-subtitle">Your next upcoming sales meeting.</p>

        <div className="section">
          <div className="meeting-card">
            <div className="meeting-header">
              <div className="meeting-indicator"></div>
              <div className="meeting-header-content">
                <h4 className="meeting-title">Accelerating Sales with Copilot: WGB/Fabrikam</h4>
                <div className="meeting-time">Today, 10:30 AM - 11:15 AM</div>
                <div className="meeting-participants">
                  <div className="participant-avatars">
                    <Avatar size={20} initials="JD" color="blue" />
                    <span className="participant-count">+5</span>
                  </div>
                  <span className="meeting-separator">•</span>
                  <div className="meeting-meta-item">
                    <Briefcase16Regular className="meeting-icon" />
                    <span className="meeting-meta-text">Woodgrove Bank</span>
                  </div>
                  <span className="meeting-separator">•</span>
                  <div className="meeting-meta-item">
                    <DocumentBulletList16Regular className="meeting-icon" />
                    <span className="meeting-meta-text">(3)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="highlights">
              <div className="highlights-header">
                <Sparkle24Filled className="sparkle-icon" />
                <span className="highlights-title">Highlights</span>
              </div>
              <ul className="highlights-list">
                <li>$850K pilot on the line—Woodgrove Bank execs are weighing us vs. North Wind. Be ready to tip the scale.</li>
                <li>Elize Rigter (Ops) flagged pricing as a blocker in the previous meeting with your colleague James Barlow.</li>
                <li>Hans Van Dorssen (COO) wants integration finalized—use this call to align on next steps.</li>
              </ul>
            </div>

            <button className="prepare-btn">
              <CalendarAssistant20Regular />
              Prepare with insights
            </button>
          </div>
          <a href="#" className="section-link">Open other meetings</a>
        </div>
      </div>

      {/* Column 3 - Discover */}
      <div className="column" ref={column3Ref}>
        <h2 className="column-title">Discover</h2>
        <p className="column-subtitle">Discover what you may have missed over the last day.</p>
        
        <div className="section discover-section">
          <div className="audio-card">
            <button className="play-btn">
              <Play12Filled />
            </button>
            <span className="audio-duration">6 min</span>
          </div>
        </div>

        <div className="section discover-section">
          <div className="summary-card">
            <div className="summary-header">
              <img src="/icons/Subtract.svg" alt="" className="summary-icon" />
              <h4 className="summary-title">Alpine Ski House deal</h4>
            </div>
            <div className="summary-content">
              <div className="summary-label">
                <Sparkle24Filled className="sparkle-icon" />
                <span>Summary</span>
              </div>
              <ul className="summary-list">
                <li>Mike Baker showed moderate interest but did not indicate a strong need or urgency to move forward.</li>
                <li>Discussion focused on Mike&apos;s current challenges and explored potential solutions, particularly around workflow efficiency and automation.</li>
                <li>No follow-up meeting was scheduled, and there has been no response since the conversation.</li>
              </ul>
            </div>
            <button className="action-btn-outline">
              <DocumentBulletList16Regular />
              View recap
            </button>
          </div>
          <a href="#" className="section-link">Review other updates</a>
        </div>
      </div>
    </div>
  );
};

export default HomeTabContent;
