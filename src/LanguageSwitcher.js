// LanguageSwitcher.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <a onClick={toggleLanguage} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
            {lang === 'en' ? '简体中文' : 'English'}
        </a>
    );
};

export default LanguageSwitcher;