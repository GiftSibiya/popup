import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface PopupStateProps {
  // Popup active states
  popTab1Active: boolean;
  popTab2Active: boolean;
  popTab3Active: boolean;

  // Popup position states (for future use with different popup positions)
  popTab1Position: number;
  popTab2Position: number;
  popTab3Position: number;

  // Actions
  setPopTab1Active: () => void;
  setPopTab1Inactive: () => void;
  setPopTab2Active: () => void;
  setPopTab2Inactive: () => void;
  setPopTab3Active: () => void;
  setPopTab3Inactive: () => void;

  // Position setters (for future use)
  setPopTab1Position: (position: number) => void;
  setPopTab2Position: (position: number) => void;
  setPopTab3Position: (position: number) => void;
}

export const usePopupState = create<PopupStateProps>()(
  persist(
    (set) => ({
      // Initial states
      popTab1Active: false,
      popTab2Active: false,
      popTab3Active: false,

      popTab1Position: 0,
      popTab2Position: 0,
      popTab3Position: 0,

      // Actions
      setPopTab1Active: () => set({ popTab1Active: true }),
      setPopTab1Inactive: () => set({ popTab1Active: false }),
      setPopTab2Active: () => set({ popTab2Active: true }),
      setPopTab2Inactive: () => set({ popTab2Active: false }),
      setPopTab3Active: () => set({ popTab3Active: true }),
      setPopTab3Inactive: () => set({ popTab3Active: false }),

      // Position setters
      setPopTab1Position: (position) => set({ popTab1Position: position }),
      setPopTab2Position: (position) => set({ popTab2Position: position }),
      setPopTab3Position: (position) => set({ popTab3Position: position }),
    }),
    {
      name: 'popup-state-store',
      storage: {
        getItem: async (key) => {
          const item = await AsyncStorage.getItem(key);
          return item ? JSON.parse(item) : null;
        },
        setItem: async (key, value) => {
          await AsyncStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: async (key) => {
          await AsyncStorage.removeItem(key);
        },
      },
    }
  )
); 