import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export interface ToastStateProps {
  // Toast state
  toast: {
    visible: boolean;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration: number;
  };

  // Toast actions
  showToast: (props: ToastProps) => void;
  hideToast: () => void;
}

export const useToastState = create<ToastStateProps>()(
  persist(
    (set) => ({
      // Toast initial state
      toast: {
        visible: false,
        message: '',
        type: 'info',
        duration: 2000,
      },

      // Toast actions
      showToast: (props: ToastProps) => {
        console.log('showToast in zustand has been clicked');
        set({
          toast: {
            visible: true,
            message: props.message,
            type: props.type || 'info',
            duration: props.duration || 2000,
          },
        });

        // Note: Auto-hiding is now handled in the ToastPopUp component
      },

      hideToast: () => set((state) => ({
        toast: {
          ...state.toast,
          visible: false,
        },
      })),
    }),
    {
      name: 'toast-storage',
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