import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BottomTabStateProps {
  bottomTabActiveState: boolean;
  BOTTOM_TAB_X_POSITION: number;
  popTab1Active: boolean;
  toggleBottomTab: () => void;
  setBottomTabActive: () => void;
  setBottomTabInactive: () => void;
  SET_BOTTOM_TAB_POSITION: (position: number) => void;
  setPopTab1Active: () => void;
  setPopTab1Inactive: () => void;
}

export const useBottomTabState = create<BottomTabStateProps>()(
  persist(
    (set) => ({
      bottomTabActiveState: true,
      BOTTOM_TAB_X_POSITION: 0,
      popTab1Active: false,

      SET_BOTTOM_TAB_POSITION: (position) => set({ BOTTOM_TAB_X_POSITION: position }),
      toggleBottomTab: () => set((state) => ({
        bottomTabActiveState: !state.bottomTabActiveState,
      })),
      setBottomTabActive: () => set({ bottomTabActiveState: true }),
      setBottomTabInactive: () => set({ bottomTabActiveState: false }),
      setPopTab1Active: () => set({ popTab1Active: true }),
      setPopTab1Inactive: () => set({ popTab1Active: false }),
    }),
    {
      name: 'bottom-state-store',
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
