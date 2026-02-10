"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  VscDebugStart,
  VscMute,
  VscUnmute,
  VscSettingsGear,
} from "react-icons/vsc";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

type TVideoSource = {
  resolution: "480" | "720" | "1080" | "4k";
  url: string;
  sizeMB: number;
};

type Props = {
  banner: string;
  name: string;
  sources: TVideoSource[];
};

const playbackSpeeds = [0.5, 1, 1.25, 1.5, 2];

export default function MoviePlayer({ banner, name, sources }: Props) {
  const bestSource =
    sources.find((s) => s.resolution === "1080") ||
    sources.find((s) => s.resolution === "720") ||
    sources.find((s) => s.resolution === "480") ||
    sources[0];

  const [currentSource, setCurrentSource] = useState(bestSource);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  // Auto-hide controls
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setShowControls(false), 3000);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
    resetControlsTimeout();
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    videoRef.current?.play();
    setIsPlaying(true);
    resetControlsTimeout();
  };

  const handleVolumeChange = (val: number) => {
    if (!videoRef.current) return;
    // eslint-disable-next-line prefer-const
    let newVolume = Math.max(0, Math.min(1, val));
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    resetControlsTimeout();
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.volume = volume || 1;
      setIsMuted(false);
    } else {
      videoRef.current.volume = 0;
      setIsMuted(true);
    }
    resetControlsTimeout();
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    resetControlsTimeout();
  };

  const changePlaybackRate = (rate: number) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
    resetControlsTimeout();
  };

  const changeQuality = (source: TVideoSource) => {
    setCurrentSource(source);
    setShowSettings(false);
    resetControlsTimeout();
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto"
      onMouseMove={resetControlsTimeout}
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
        {!isPlaying ? (
          <>
            <Image src={banner} alt={name} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <button
              onClick={() => {
                setIsLoading(true);
                setIsPlaying(true);
              }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="bg-red-600 hover:bg-red-700 transition w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center">
                <VscDebugStart className="text-white text-[18px] md:text-[35px] lg:text-[40px] xl:text-[50px]" />
              </div>
            </button>
          </>
        ) : (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              key={currentSource.url}
              onCanPlay={handleCanPlay}
              src={currentSource.url}
            />

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Controls */}
            {showControls && (
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-between px-4 bg-black/30 py-2 rounded transition-opacity duration-300">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayPause}
                    className="text-white text-xl cursor-pointer"
                  >
                    {isPlaying ? "❚❚" : "▶"}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="text-white text-xl cursor-pointer"
                  >
                    {isMuted ? <VscMute /> : <VscUnmute />}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
                    onChange={(e) =>
                      handleVolumeChange(parseFloat(e.target.value))
                    }
                    className="w-24"
                  />
                </div>

                <div className="flex items-center gap-10 relative">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-white text-xl cursor-pointer"
                  >
                    <VscSettingsGear />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="text-white text-xl cursor-pointer"
                  >
                    {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                  </button>

                  {/* Settings menu */}
                  {showSettings && (
                    <div className="absolute bottom-10 right-0 bg-black text-white rounded shadow-lg p-3 z-20 w-40">
                      <div className="mb-2 font-semibold border-b border-gray-700 pb-1">
                        Playback Speed
                      </div>
                      {playbackSpeeds.map((speed) => (
                        <button
                          key={speed}
                          onClick={() => changePlaybackRate(speed)}
                          className={`block w-full text-left px-2 py-1 rounded cursor-pointer ${
                            playbackRate === speed
                              ? "bg-red-500"
                              : "hover:bg-gray-700"
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}

                      <div className="mt-2 mb-1 font-semibold border-b border-gray-700 pb-1">
                        Quality
                      </div>
                      {sources.map((s) => (
                        <button
                          key={s.resolution}
                          onClick={() => changeQuality(s)}
                          className={`block w-full text-left px-2 py-1 rounded cursor-pointer ${
                            currentSource.resolution === s.resolution
                              ? "bg-red-500"
                              : "hover:bg-gray-700"
                          }`}
                        >
                          {s.resolution}p
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
