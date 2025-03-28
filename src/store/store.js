import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./slices/ProfileSlice";
import fileSlice from "./slices/FileSlice";
import aboutMeSlice from "./slices/AboutMeSlice";
import skillSlice from "./slices/SkillSlice";
import experienceSlice from "./slices/ExperienceSlice";
import educationSlice from "./slices/EducationSlice";
import loginSlice from "./slices/LoginSlice";

const store = configureStore({
    reducer: {
        login: loginSlice,
        profile: profileSlice,
        file: fileSlice,
        aboutMe: aboutMeSlice,
        skills: skillSlice,
        experience: experienceSlice,
        education: educationSlice
    }
})

export default store;