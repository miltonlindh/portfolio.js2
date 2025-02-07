import { createSlice } from '@reduxjs/toolkit';// importera createSlice från redux toolkit

const themeSlice = createSlice({
  name: 'theme', //namnet på slicen
  initialState: localStorage.getItem('theme') || 'light',
  reducers: {
    toggleTheme: (state) => {// Reducer-funktion för att växla temat
      const newTheme = state === 'light' ? 'dark' : 'light';// 
      document.body.setAttribute('data-theme', newTheme);//sätter data-theme attributet på body element
      localStorage.setItem('theme', newTheme);//sparar nya temat i localstorage
      return newTheme;//returnerar det nya temat som nya state
    },
  },
});

export const { toggleTheme } = themeSlice.actions;//exporterar toggleTheme
export default themeSlice.reducer;// exporterar reducer ssom standardexport
