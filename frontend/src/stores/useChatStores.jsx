import { create } from "zustand";

const useChatStore = create((set) => ({
  messages: {},
  addMessage: (channel, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [channel]: [...(state.messages[channel] || []), message],
      },
    })),
  clearMessages: () => set({ messages: {} }),
}));

export default useChatStore;
