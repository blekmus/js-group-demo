import { create } from "zustand";

const useActiveMembersStore = create((set) => ({
  activeMembers: {
    general: [
      {
        username: "admin",
        avatar:
          "https://thelonelylands.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F47277246&w=3840&q=75",
      },
    ],
    lesson: [
      {
        username: "admin",
        avatar:
          "https://thelonelylands.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F47277246&w=3840&q=75",
      },
    ],
    default: [
      {
        username: "admin",
        avatar:
          "https://thelonelylands.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F47277246&w=3840&q=75",
      },
    ]
  },

  addMember: (channel, username) =>
    set((state) => {
      const channelMembers = state.activeMembers[channel] || [];

      const exists = channelMembers.some(
        (member) => member.username === username
      );
      if (exists) return state;

      return {
        activeMembers: {
          ...state.activeMembers,
          [channel]: [
            ...channelMembers,
            {
              username,
              avatar: `https://api.dicebear.com/9.x/glass/svg?seed=${username}`,
            },
          ],
        },
      };
    }),

  getMembers: (channel) => (state) => state.activeMembers[channel] || [],

  clearMembers: (channel) =>
    set((state) => ({
      activeMembers: {
        ...state.activeMembers,
        [channel]: [],
      },
    })),
}));

export default useActiveMembersStore;
