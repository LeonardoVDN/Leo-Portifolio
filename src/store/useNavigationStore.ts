import { create } from 'zustand'

type Direction = 'forward' | 'back'

interface NavigationStore {
  direction: Direction;
  setDirection: (direction: Direction) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  direction: 'forward',
  setDirection: (direction) => set({ direction }),
}))
