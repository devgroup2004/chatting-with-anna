import { create } from 'zustand';
import { persist } from 'zustand/middleware'

const useAuthStore = create(persist(
  (set) => ({
    isAuthenticated: false,
    logIn: () => set((state) => ({isAuthenticated: true}))
  }),
  {
    name: 'my-storage-key',
    getStorage: () => localStorage,
  }
));

export { useAuthStore };