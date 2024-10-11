"use client";
import { create } from "zustand";

export const usePostItStore = create((set) => ({
  idCounter: 1,
  postIt: [],
  increaseIdCounter: () =>
    set((state) => ({
      idCounter: state.idCounter + 1,
    })),
  addPostIt: (item) =>
    set((state) => ({
      postIt: [...state.postIt, item],
    })),
}));
