'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const torontoTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Toronto',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(torontoTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12">
      <div className="h-px bg-border mb-8" />
      <div className="flex items-center gap-3 text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span className="font-mono text-sm">{time}</span>
        <span className="text-sm">Salman is currently in Toronto</span>
      </div>
    </footer>
  );
};

export default Footer;
