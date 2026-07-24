import { create } from 'zustand'

/** Represents one future sound preference or playback source. */
export interface Sound {
  id: string
  name: string
}

/** Represents one future to-do item. */
export interface Task {
  id: string
  title: string
  completed: boolean
}

/** Defines the shared, intentionally passive initial application state. */
interface AppState {
  mood: string | null
  weather: string | null
  sounds: Sound[]
  tasks: Task[]
}

/** Exposes placeholder global state until feature actions are implemented. */
export const useAppStore = create<AppState>(() => ({
  mood: null,
  weather: null,
  sounds: [],
  tasks: [],
}))
