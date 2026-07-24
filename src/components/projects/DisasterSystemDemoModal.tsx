import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldAlert,
  MapPin,
  Thermometer,
  CloudRain,
  Wind,
  Gauge,
  Activity,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  Cpu,
  Layers,
} from 'lucide-react';
import { playMicroSound, triggerCelebration } from '../../utils/helper';

interface DisasterSystemDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisasterSystemDemoModal: React.FC<DisasterSystemDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [ipLocation, setIpLocation] = useState({
    ip: '157.48.212.98',
    city: 'Alappuzha',
    region: 'Kerala',
    country: 'India',
    lat: '9.4981° N',
    lon: '76.3388° E',
  });

  const [simulatedConditions, setSimulatedConditions] = useState({
    temp: 31,
    humidity: 88,
    rainfall: 12, // mm/hr
    windSpeed: 24, // km/h
    pressure: 1008, // hPa
  });

  const [alertTriggered, setAlertTriggered] = useState(false);
  const [isRefreshingIP, setIsRefreshingIP] = useState(false);

  if (!isOpen) return null;

  const handleSimulateDisaster = () => {
    playMicroSound('click');
    setSimulatedConditions({
      temp: 26,
      humidity: 98,
      rainfall: 115, // Severe Torrential Downpour
      windSpeed: 65, // Gale Winds
      pressure: 982, // Low pressure depression
    });
    setAlertTriggered(true);
    triggerCelebration();
  };

  const handleResetConditions = () => {
    playMicroSound('click');
    setSimulatedConditions({
      temp: 31,
      humidity: 88,
      rainfall: 12,
      windSpeed: 24,
      pressure: 1008,
    });
    setAlertTriggered(false);
  };

  const handleRefreshIP = () => {
    playMicroSound('click');
    setIsRefreshingIP(true);
    setTimeout(() => {
      setIsRefreshingIP(false);
      setIpLocation({
        ip: '103.110.170.42',
        city: 'Tiruchirappalli',
        region: 'Tamil Nadu',
        country: 'India',
        lat: '10.7905° N',
        lon: '78.7047° E',
      });
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-8 text-slate-100"
        >
          {/* Header */}
          <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Disaster Detection & Alert System using IP
                </h3>
                <p className="text-xs text-cyan-400 font-mono">
                  Live System Interactive Simulation | Harijith Harikumar (June 2025)
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                playMicroSound('click');
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto text-xs">

            {/* Alert Status Banner */}
            <div
              className={`p-4 rounded-2xl border flex items-center justify-between transition-all duration-300 ${
                alertTriggered
                  ? 'bg-red-500/10 border-red-500/50 text-red-300 animate-pulse shadow-[0_0_25px_rgba(239,68,68,0.3)]'
                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              }`}
            >
              <div className="flex items-center gap-3">
                {alertTriggered ? (
                  <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                )}
                <div>
                  <span className="font-extrabold uppercase tracking-wide text-sm block">
                    {alertTriggered
                      ? '⚠️ SEVERE FLOOD & CYCLONIC DOWNPOUR ALERT DISPATCHED'
                      : '✅ CLIMATE STABLE — NORMAL ENVIRONMENT STATE'}
                  </span>
                  <span className="text-[11px] opacity-80">
                    {alertTriggered
                      ? `Automated warning pushed to IP Geolocation node: ${ipLocation.city}, ${ipLocation.region}`
                      : 'Environmental metrics within safe operational thresholds.'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {alertTriggered ? (
                  <button
                    onClick={handleResetConditions}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 cursor-pointer font-mono"
                  >
                    Reset Normal
                  </button>
                ) : (
                  <button
                    onClick={handleSimulateDisaster}
                    className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold cursor-pointer font-mono shadow-md"
                  >
                    Trigger Storm Event
                  </button>
                )}
              </div>
            </div>

            {/* IP Geolocation Telemetry Card */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-white flex items-center gap-2 font-mono">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  IP GEOLOCATION TELEMETRY
                </span>
                <button
                  onClick={handleRefreshIP}
                  disabled={isRefreshingIP}
                  className="flex items-center gap-1 text-[11px] text-cyan-400 hover:underline cursor-pointer font-mono"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshingIP ? 'animate-spin' : ''}`} />
                  Switch Location IP
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">IP ADDRESS</span>
                  <span className="text-cyan-300 font-bold">{ipLocation.ip}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">CITY / REGION</span>
                  <span className="text-slate-200 font-bold">{ipLocation.city}, {ipLocation.region}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">LATITUDE</span>
                  <span className="text-slate-300">{ipLocation.lat}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">LONGITUDE</span>
                  <span className="text-slate-300">{ipLocation.lon}</span>
                </div>
              </div>
            </div>

            {/* Live Environmental Metrics Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Temperature</span>
                  <Thermometer className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-2xl font-extrabold text-white font-mono">{simulatedConditions.temp}°C</span>
                <span className="text-[10px] text-slate-500 block font-mono">Ambient sensor read</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Rainfall Rate</span>
                  <CloudRain className="w-4 h-4 text-cyan-400" />
                </div>
                <span className={`text-2xl font-extrabold font-mono ${simulatedConditions.rainfall > 50 ? 'text-red-400' : 'text-cyan-400'}`}>
                  {simulatedConditions.rainfall} <span className="text-xs text-slate-400">mm/h</span>
                </span>
                <span className="text-[10px] text-slate-500 block font-mono">Pluviometer API</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Wind Velocity</span>
                  <Wind className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-2xl font-extrabold text-white font-mono">{simulatedConditions.windSpeed} <span className="text-xs text-slate-400">km/h</span></span>
                <span className="text-[10px] text-slate-500 block font-mono">Anemometer stream</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Air Pressure</span>
                  <Gauge className="w-4 h-4 text-violet-400" />
                </div>
                <span className="text-2xl font-extrabold text-white font-mono">{simulatedConditions.pressure} <span className="text-xs text-slate-400">hPa</span></span>
                <span className="text-[10px] text-slate-500 block font-mono">Barometric pressure</span>
              </div>
            </div>

            {/* System Architecture Explanation */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="font-bold text-white flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4 text-violet-400" />
                TECHNICAL ARCHITECTURE & PIPELINE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="font-bold text-cyan-400 text-xs block">1. Node.js & Flask Backend</span>
                  <p className="text-[11px] text-slate-400">
                    Node.js handles asynchronous user web sessions, while Flask (Python) runs data evaluation routines.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="font-bold text-blue-400 text-xs block">2. IP Geolocation API</span>
                  <p className="text-[11px] text-slate-400">
                    Automatically extracts client IP, maps latitude/longitude without forcing manual GPS permissions.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="font-bold text-violet-400 text-xs block">3. Climate Alert Pipeline</span>
                  <p className="text-[11px] text-slate-400">
                    Queries environmental APIs and evaluates thresholds to push instant early warnings to affected zones.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
