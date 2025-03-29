import {create} from 'zustand';
import {Track} from 'react-native-track-player';

interface TrackStore {
  track: Track | null | undefined; // Add undefined to the type
  setTrack: (track: Track | null | undefined) => void;
}

export const useTrackStore = create<TrackStore>(set => ({
  track: undefined, // Initial state as undefined
  setTrack: track => set({track}),
}));
