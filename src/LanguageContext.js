// LanguageContext.js
import React, { createContext, useContext, useState } from 'react';
import { languages } from './lang';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('zh'); // 默认语言为中文
    const currentLang = languages[lang]; // 根据当前语言获取内容

    const toggleLanguage = () => {
        setLang(prevLang => (prevLang === 'zh' ? 'en' : 'zh')); // 切换语言
    };

    return (
        <LanguageContext.Provider value={{ currentLang, lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};