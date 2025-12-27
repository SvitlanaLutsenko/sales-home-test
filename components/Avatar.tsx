import React from 'react';
import { Person20Regular } from '@fluentui/react-icons';
import './Avatar.css';

interface AvatarProps {
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120;
  initials?: string;
  imageUrl?: string;
  color?: 'purple' | 'green' | 'gray' | 'blue';
  showIcon?: boolean;
  statusBadge?: 'available' | 'busy' | 'away' | 'offline';
}

const Avatar: React.FC<AvatarProps> = ({ 
  size = 32, 
  initials, 
  imageUrl, 
  color = 'blue',
  showIcon = false,
  statusBadge
}) => {
  const getBackgroundColor = () => {
    const colors = {
      purple: '#e6bfed',
      green: '#a8f0cd',
      gray: '#e6e6e6',
      blue: '#0f6cbd'
    };
    return colors[color];
  };

  const getForegroundColor = () => {
    const colors = {
      purple: '#63276d',
      green: '#00723b',
      gray: '#616161',
      blue: '#ffffff'
    };
    return colors[color];
  };

  const getFontSize = () => {
    if (size <= 20) return '10px';
    if (size <= 32) return '12px';
    if (size <= 48) return '14px';
    if (size <= 64) return '16px';
    if (size <= 72) return '20px';
    return '24px';
  };

  const getBadgeColor = () => {
    const colors = {
      available: '#13a10e',
      busy: '#c50f1f',
      away: '#ffc83d',
      offline: '#616161'
    };
    return statusBadge ? colors[statusBadge] : undefined;
  };

  const getBadgeSize = () => {
    if (size <= 24) return 8;
    if (size <= 32) return 10;
    if (size <= 48) return 12;
    return 14;
  };

  return (
    <div 
      className="fluent-avatar" 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: getFontSize()
      }}
    >
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt="" 
          className="avatar-image"
        />
      ) : (
        <div 
          className="avatar-fill"
          style={{
            backgroundColor: getBackgroundColor(),
            color: getForegroundColor()
          }}
        >
          {showIcon ? (
            <Person20Regular style={{ width: size * 0.6, height: size * 0.6 }} />
          ) : initials ? (
            <span className="avatar-initials">{initials}</span>
          ) : null}
        </div>
      )}
      {statusBadge && (
        <div 
          className="avatar-badge"
          style={{
            width: `${getBadgeSize()}px`,
            height: `${getBadgeSize()}px`,
            backgroundColor: getBadgeColor()
          }}
        />
      )}
    </div>
  );
};

export default Avatar;
