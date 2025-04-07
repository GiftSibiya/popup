import { create } from 'zustand';

interface RegistrationStateStoreType {
  loading: boolean;
  registrationType: string;
  setRegistrationType: (registrationType: string) => void;
  clearRegistrationType: () => void;
};

export const useRegistrationStateStore = create<RegistrationStateStoreType>()((set) => ({
  loading: false,
  registrationType: '',
  setRegistrationType: (registrationType: string) => set({ registrationType }),
  clearRegistrationType: () => set({ registrationType: '' }),

}));