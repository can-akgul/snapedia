(() => {
  // API endpoints
  const API = {
    RANDOM: "/random",
    INTERESTS: "/api/interests"
  };

  // Translation data
  const TRANSLATIONS = {
    tr: {
      settings: "Ayarlar",
      home: "Ana Sayfa", 
      bookmarks: "Kaydedilenler",
      appearance: "Görünüm",
      theme: "Tema:",
      light: "Açık",
      dark: "Koyu",
      system: "Sistem",
      language: "Dil:",
      interests: "İlgi Alanları",
      "saved-articles": "Kaydedilen Makaleler",
      loading: "Yükleniyor…",
      "loading-desc": "Lütfen bekleyin, rastgele bir madde getiriliyor.",
             "read-on-wiki": "Ana sayfada aç",
      "get-new": "Yeni getir",
      "no-bookmarks": "Henüz kaydettiğiniz makale yok",
      "bookmark-hint": "Ana sayfadan makaleleri kaydetmeye başlayın",
             "bookmark-saved": "Makale kaydedildi!",
       "bookmark-removed": "Makale kaldırıldı!",
       "link-copied": "Bağlantı kopyalandı!",
       "share-failed": "Paylaşım başarısız oldu",
       error: "Bir hata oluştu",
       random: "Rastgele",
       trending: "Trend",
       interests: "İlgi Alanları",
       "random-settings": "Rastgele Makale Ayarları",
       "trending-settings": "Trend Makale Ayarları", 
       "interests-settings": "İlgi Alanları Ayarları",
       "apply-random": "Rastgele Makale Modu Uygula",
       "apply-trending": "Trend Makale Modu Uygula",
       "apply-interests": "İlgi Alanları Modu Uygula",
       "select-interests": "İlgi alanlarınızı seçin:",
       "trending-info": "Bilgi:",
       "trending-desc": "Seçilen dilde dünün en çok görüntülenen makaleleri gösterir.",
       "theme-section": "Tema",
       "feed-type": "Feed Tipi",
       "interest-topics": "İlgi Konuları",
       "topics": "Konular",
       "topics-desc": "Bu seçenekler sadece yukarıda 'İlgi Konuları' seçtiğinizde aktif olur.",
       "apply-settings": "Ayarları Uygula"
    },
    en: {
      settings: "Settings",
      home: "Home",
      bookmarks: "Bookmarks", 
      appearance: "Appearance",
      theme: "Theme:",
      light: "Light",
      dark: "Dark",
      system: "System",
      language: "Language:",
      interests: "Interests",
      "saved-articles": "Saved Articles",
      loading: "Loading…",
      "loading-desc": "Please wait, fetching a random article.",
             "read-on-wiki": "Open in home",
      "get-new": "Get New",
      "no-bookmarks": "No saved articles yet",
      "bookmark-hint": "Start saving articles from the home page",
             "bookmark-saved": "Article bookmarked!",
       "bookmark-removed": "Article removed!",
       "link-copied": "Link copied!",
       "share-failed": "Share failed",
       error: "An error occurred",
       random: "Random",
       trending: "Trending",
       interests: "Interests",
       "random-settings": "Random Article Settings",
       "trending-settings": "Trending Article Settings",
       "interests-settings": "Interests Settings", 
       "apply-random": "Apply Random Mode",
       "apply-trending": "Apply Trending Mode",
       "apply-interests": "Apply Interests Mode",
       "select-interests": "Select your interests:",
       "trending-info": "Info:",
       "trending-desc": "Shows the most viewed articles from yesterday in the selected language.",
       "theme-section": "Theme",
       "feed-type": "Feed Type", 
       "interest-topics": "Interest Topics",
       "topics": "Topics",
       "topics-desc": "These options are only active when you select 'Interest Topics' above.",
       "apply-settings": "Apply Settings"
    },
    ru: {
      settings: "Настройки",
      home: "Главная",
      bookmarks: "Закладки",
      appearance: "Внешний вид",
      theme: "Тема:",
      light: "Светлая",
      dark: "Тёмная",
      system: "Система",
      language: "Язык:",
      interests: "Интересы",
      "saved-articles": "Сохранённые статьи",
      loading: "Загрузка…",
      "loading-desc": "Пожалуйста, подождите, загружается случайная статья.",
             "read-on-wiki": "Открыть на главной",
      "get-new": "Получить новую",
      "no-bookmarks": "Пока нет сохранённых статей",
      "bookmark-hint": "Начните сохранять статьи с главной страницы",
             "bookmark-saved": "Статья сохранена!",
       "bookmark-removed": "Статья удалена!",
       "link-copied": "Ссылка скопирована!",
       "share-failed": "Ошибка при отправке",
       error: "Произошла ошибка",
       random: "Случайно",
       trending: "В тренде",
       interests: "Интересы",
       "random-settings": "Настройки случайных статей",
       "trending-settings": "Настройки трендовых статей",
       "interests-settings": "Настройки интересов",
       "apply-random": "Применить случайный режим",
       "apply-trending": "Применить трендовый режим", 
       "apply-interests": "Применить режим интересов",
       "select-interests": "Выберите ваши интересы:",
       "trending-info": "Информация:",
       "trending-desc": "Показывает самые просматриваемые статьи вчера на выбранном языке.",
       "theme-section": "Тема",
       "feed-type": "Тип ленты",
       "interest-topics": "Темы интересов", 
       "topics": "Темы",
       "topics-desc": "Эти параметры активны только когда вы выбираете 'Темы интересов' выше.",
       "apply-settings": "Применить настройки"
    },
    de: {
      settings: "Einstellungen",
      home: "Startseite",
      bookmarks: "Lesezeichen",
      appearance: "Erscheinungsbild",
      theme: "Design:",
      light: "Hell",
      dark: "Dunkel",
      system: "System",
      language: "Sprache:",
      interests: "Interessen",
      "saved-articles": "Gespeicherte Artikel",
      loading: "Lädt…",
      "loading-desc": "Bitte warten, ein zufälliger Artikel wird geladen.",
             "read-on-wiki": "Auf Startseite öffnen",
      "get-new": "Neuen holen",
      "no-bookmarks": "Noch keine gespeicherten Artikel",
      "bookmark-hint": "Beginnen Sie damit, Artikel von der Startseite zu speichern",
             "bookmark-saved": "Artikel gespeichert!",
       "bookmark-removed": "Artikel entfernt!",
       "link-copied": "Link kopiert!",
       "share-failed": "Teilen fehlgeschlagen",
       error: "Ein Fehler ist aufgetreten",
       random: "Zufällig", 
       trending: "Trending",
       interests: "Interessen",
       "random-settings": "Zufällige Artikel Einstellungen",
       "trending-settings": "Trending Artikel Einstellungen",
       "interests-settings": "Interessen Einstellungen",
       "apply-random": "Zufallsmodus anwenden",
       "apply-trending": "Trending-Modus anwenden",
       "apply-interests": "Interessen-Modus anwenden", 
       "select-interests": "Wählen Sie Ihre Interessen:",
       "trending-info": "Info:",
       "trending-desc": "Zeigt die meistgesehenen Artikel von gestern in der gewählten Sprache.",
       "theme-section": "Design",
       "feed-type": "Feed-Typ",
       "interest-topics": "Interessensthemen",
       "topics": "Themen", 
       "topics-desc": "Diese Optionen sind nur aktiv, wenn Sie oben 'Interessensthemen' auswählen.",
       "apply-settings": "Einstellungen anwenden"
    }
  };

  // Placeholder SVG for missing images
  const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='#222222'/>
          <stop offset='100%' stop-color='#111111'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <g fill='#aaaaaa' font-family='Arial, sans-serif' font-size='48' text-anchor='middle'>
        <text x='50%' y='50%' dy='0.35em'>No Image Available</text>
      </g>
    </svg>
  `)}`;

  // App state
  const state = {
    currentTab: 'home',
    currentTheme: 'dark',
    currentLanguage: 'tr',
    interests: [],
    selectedInterests: [],
    bookmarks: [],
    currentArticle: null,
    isLoading: false,
    articleType: 'random'
  };

  // DOM elements
  const elements = {
    // Tabs
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    tabSlider: document.getElementById('tab-slider'),
    
    // Theme
    themeOptions: document.querySelectorAll('.theme-option'),
    themeSlider: document.getElementById('theme-slider'),
    htmlElement: document.documentElement,
    
    // Language
    languageSelect: document.getElementById('language-select'),
    
    // Feed type selector
    feedTypeOptions: document.querySelectorAll('.feed-type-option'),
    feedTypeSlider: document.getElementById('feed-type-slider'),
    applySettingsBtn: document.getElementById('apply-settings'),
    topicsSection: document.getElementById('topics-section'),
    
    // Interests
    interestsGrid: document.getElementById('interests-grid'),
    
    // Article
    articleThumbnail: document.getElementById('article-thumbnail'),
    articleTitle: document.getElementById('article-title'),
    articleExtract: document.getElementById('article-extract'),
    articleLink: document.getElementById('article-link'),
    refreshBtn: document.getElementById('refresh-btn'),
    bookmarkBtn: document.getElementById('bookmark-btn'),
    shareBtn: document.getElementById('share-btn'),
    errorMessage: document.getElementById('error-message'),
    
    // Bookmarks
    bookmarksGrid: document.getElementById('bookmarks-grid'),
    emptyBookmarks: document.getElementById('empty-bookmarks')
  };

  // Utility functions
  const utils = {
    // Local storage helpers
    getStorageItem: (key, defaultValue = null) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch {
        return defaultValue;
      }
    },

    setStorageItem: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.warn('LocalStorage not available:', e);
      }
    },

    // API calls
    fetchJSON: async (url, options = {}) => {
      const response = await fetch(url, {
        cache: 'no-store',
        ...options
      });
      const data = await response.json();
      
      if (!response.ok || data.error) {
        throw new Error(data.error || `Request failed (${response.status})`);
      }
      
      return data;
    },

    // Translation helper
    translate: (key) => {
      return TRANSLATIONS[state.currentLanguage]?.[key] || key;
    },

    // Update all translatable elements
    updateTranslations: () => {
      document.querySelectorAll('[data-tr]').forEach(el => {
        const key = el.getAttribute('data-tr');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = utils.translate(key);
        } else {
          el.textContent = utils.translate(key);
        }
      });
    },

    // Show toast notification
    showToast: (message, type = 'info') => {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      
      document.body.appendChild(toast);
      toast.style.animation = 'slideInRight 0.3s ease';
      
      setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    },

    // Get system theme
    getSystemTheme: () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  };

  // Tab management
  const tabManager = {
    init: () => {
      elements.tabButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          const tabName = btn.getAttribute('data-tab');
          tabManager.switchTab(tabName, index);
        });
      });

      // Set initial tab
      const homeIndex = Array.from(elements.tabButtons).findIndex(btn => 
        btn.getAttribute('data-tab') === 'home'
      );
      tabManager.switchTab('home', homeIndex);
    },

    switchTab: (tabName, index) => {
      if (state.currentTab === tabName) return;
      
      state.currentTab = tabName;
      
      // Update tab buttons
      elements.tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
      });
      
      // Update tab contents with smooth transition
      elements.tabContents.forEach(content => {
        const isActive = content.id === `${tabName}-tab`;
        if (isActive) {
          content.hidden = false;
          setTimeout(() => content.classList.add('active'), 10);
        } else {
          content.classList.remove('active');
          setTimeout(() => content.hidden = true, 400);
        }
      });

      // Animate tab slider
      if (elements.tabSlider) {
        const translateX = index * 100;
        elements.tabSlider.style.transform = `translateX(${translateX}%)`;
      }

      // Load tab-specific content
      if (tabName === 'bookmarks') {
        bookmarkManager.render();
      }
    }
  };

  // Theme management
  const themeManager = {
    init: () => {
      // Load saved theme
      const savedTheme = utils.getStorageItem('theme', 'dark');
      themeManager.setTheme(savedTheme);

      // Add event listeners
      elements.themeOptions.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          const theme = btn.getAttribute('data-theme');
          themeManager.setTheme(theme, index);
        });
      });

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (state.currentTheme === 'system') {
          themeManager.applyTheme('system');
        }
      });
    },

         setTheme: (theme, index = null) => {
       state.currentTheme = theme;
       themeManager.applyTheme(theme);
       
       // Update button states
       elements.themeOptions.forEach(btn => {
         btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
       });
       
       // Animate theme slider - find correct index
       if (elements.themeSlider) {
         let themeIndex = index;
         if (themeIndex === null) {
           // Find index based on theme
           const themeOrder = ['light', 'dark', 'system'];
           themeIndex = themeOrder.indexOf(theme);
         }
         if (themeIndex !== -1) {
           const translateX = themeIndex * 100;
           elements.themeSlider.style.transform = `translateX(${translateX}%)`;
         }
       }
       
       utils.setStorageItem('theme', theme);
     },

    applyTheme: (theme) => {
      let actualTheme = theme;
      if (theme === 'system') {
        actualTheme = utils.getSystemTheme();
      }
      elements.htmlElement.setAttribute('data-theme', actualTheme);
    }
  };

  // Language management
  const languageManager = {
    init: () => {
      // Load saved language
      const savedLanguage = utils.getStorageItem('language', 'tr');
      languageManager.setLanguage(savedLanguage);

      // Add event listener
      elements.languageSelect.addEventListener('change', (e) => {
        languageManager.setLanguage(e.target.value);
      });
    },

         setLanguage: (language) => {
       state.currentLanguage = language;
       elements.languageSelect.value = language;
       utils.updateTranslations();
       utils.setStorageItem('language', language);
       
       // Re-render interests with new language
       if (state.interests.length > 0) {
         interestsManager.render();
       }
       
       // Fetch new article in selected language if on home tab
       if (state.currentTab === 'home') {
         articleManager.fetchRandomArticle();
       }
     }
  };

  // Interests management
  const interestsManager = {
    init: async () => {
      try {
        const response = await utils.fetchJSON(API.INTERESTS);
        state.interests = response.interests || [];
        
        // Load saved selections
        state.selectedInterests = utils.getStorageItem('selectedInterests', []);
        
        interestsManager.render();
      } catch (error) {
        console.error('Failed to load interests:', error);
      }
    },

    render: () => {
      if (!elements.interestsGrid) return;

      elements.interestsGrid.innerHTML = state.interests.map(interest => {
        const isSelected = state.selectedInterests.includes(interest.id);
        const nameKey = `name_${state.currentLanguage}`;
        const name = interest[nameKey] || interest.name;
        
        return `
          <div class="interest-item ${isSelected ? 'selected' : ''}" 
               data-interest="${interest.id}">
            ${name}
          </div>
        `;
      }).join('');

      // Add event listeners
      elements.interestsGrid.querySelectorAll('.interest-item').forEach(item => {
        item.addEventListener('click', () => {
          const interestId = item.getAttribute('data-interest');
          interestsManager.toggleInterest(interestId);
        });
      });
    },

         toggleInterest: (interestId) => {
       const index = state.selectedInterests.indexOf(interestId);
       
       if (index > -1) {
         state.selectedInterests.splice(index, 1);
       } else {
         state.selectedInterests.push(interestId);
       }
       
       utils.setStorageItem('selectedInterests', state.selectedInterests);
       interestsManager.render();
       
       // Eğer home sekmesindeyse yeni makale çek
       if (state.currentTab === 'home') {
         articleManager.fetchRandomArticle();
       }
     }
  };

  // Settings management
  const settingsManager = {
    init: () => {
      // Feed type selector
      elements.feedTypeOptions.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          const feedType = btn.getAttribute('data-feed-type');
          settingsManager.setFeedType(feedType, index);
        });
      });

      // Apply settings button
      elements.applySettingsBtn.addEventListener('click', () => {
        settingsManager.applySettings();
      });

      // Set initial feed type
      settingsManager.setFeedType('random', 0);
    },

    setFeedType: (feedType, index) => {
      if (state.articleType === feedType) return;
      
      state.articleType = feedType;
      
      // Update button states
      elements.feedTypeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-feed-type') === feedType);
      });
      
      // Animate slider
      if (elements.feedTypeSlider) {
        const translateX = index * 100;
        elements.feedTypeSlider.style.transform = `translateX(${translateX}%)`;
      }

      // Enable/disable topics section
      if (elements.topicsSection) {
        if (feedType === 'interests') {
          elements.topicsSection.classList.remove('disabled');
        } else {
          elements.topicsSection.classList.add('disabled');
        }
      }
    },

    applySettings: () => {
      // Switch to home tab and fetch article
      tabManager.switchTab('home', 1);
      articleManager.fetchRandomArticle();
      
      // Show success message
      utils.showToast(utils.translate('apply-settings'), 'success');
    }
  };

  // Article management
  const articleManager = {
    init: () => {
      elements.refreshBtn.addEventListener('click', articleManager.fetchRandomArticle);
      elements.bookmarkBtn.addEventListener('click', articleManager.toggleBookmark);
      elements.shareBtn.addEventListener('click', articleManager.shareArticle);
      
      // Load initial article
      articleManager.fetchRandomArticle();
    },

    setLoading: (loading) => {
      state.isLoading = loading;
      elements.refreshBtn.disabled = loading;
      const btnText = elements.refreshBtn.querySelector('span');
      if (btnText) {
        btnText.textContent = loading ? utils.translate('loading') : utils.translate('get-new');
      }
    },

    showError: (message) => {
      elements.errorMessage.textContent = message || utils.translate('error');
      elements.errorMessage.hidden = false;
    },

    clearError: () => {
      elements.errorMessage.hidden = true;
      elements.errorMessage.textContent = '';
    },

         fetchRandomArticle: async () => {
       articleManager.setLoading(true);
       articleManager.clearError();
       
       try {
         // URL parametrelerini hazırla
         const params = new URLSearchParams();
         
         // İlgi alanları
         if (state.selectedInterests.length > 0) {
           params.append('interests', state.selectedInterests.join(','));
         }
         
         // Dil
         params.append('language', state.currentLanguage);
         
         // Makale tipi
         params.append('type', state.articleType);
         
         const url = `${API.RANDOM}?${params.toString()}`;
         const data = await utils.fetchJSON(url);
         state.currentArticle = data;
         articleManager.renderArticle(data);
       } catch (error) {
         console.error('Failed to fetch article:', error);
         articleManager.showError(error.message);
       } finally {
         articleManager.setLoading(false);
       }
     },

    renderArticle: (article) => {
      const { title, extract, thumbnail, page_url } = article;

      elements.articleTitle.textContent = title || '(No title)';
      elements.articleExtract.textContent = extract || 'No summary available.';

      const imgSrc = thumbnail || PLACEHOLDER_SVG;
      elements.articleThumbnail.src = imgSrc;
      elements.articleThumbnail.alt = title ? `${title} image` : 'Article image';

      if (page_url) {
        elements.articleLink.href = page_url;
      }

      // Update bookmark button state
      const isBookmarked = bookmarkManager.isBookmarked(article.id);
      elements.bookmarkBtn.classList.toggle('active', isBookmarked);
    },

    toggleBookmark: () => {
      if (!state.currentArticle) return;

      const isBookmarked = bookmarkManager.isBookmarked(state.currentArticle.id);
      
      if (isBookmarked) {
        bookmarkManager.removeBookmark(state.currentArticle.id);
        elements.bookmarkBtn.classList.remove('active');
        utils.showToast(utils.translate('bookmark-removed'), 'success');
      } else {
        bookmarkManager.addBookmark(state.currentArticle);
        elements.bookmarkBtn.classList.add('active');
        utils.showToast(utils.translate('bookmark-saved'), 'success');
      }
    },

    shareArticle: async () => {
      if (!state.currentArticle) return;

      const shareData = {
        title: state.currentArticle.title,
        text: state.currentArticle.extract,
        url: state.currentArticle.page_url
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          // Fallback: copy to clipboard
          await navigator.clipboard.writeText(state.currentArticle.page_url);
          utils.showToast(utils.translate('link-copied'), 'success');
        }
      } catch (error) {
        console.error('Share failed:', error);
        utils.showToast(utils.translate('share-failed'), 'error');
      }
    }
  };

  // Bookmark management
  const bookmarkManager = {
    init: () => {
      // Load bookmarks from localStorage
      state.bookmarks = utils.getStorageItem('bookmarks', []);
    },

    isBookmarked: (articleId) => {
      return state.bookmarks.some(bookmark => bookmark.id === articleId);
    },

    addBookmark: (article) => {
      if (bookmarkManager.isBookmarked(article.id)) return;
      
      const bookmark = {
        ...article,
        savedAt: Date.now()
      };
      
      state.bookmarks.unshift(bookmark);
      utils.setStorageItem('bookmarks', state.bookmarks);
    },

    removeBookmark: (articleId) => {
      state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== articleId);
      utils.setStorageItem('bookmarks', state.bookmarks);
      
      // Re-render if on bookmarks tab
      if (state.currentTab === 'bookmarks') {
        bookmarkManager.render();
      }
    },

    render: () => {
      if (!elements.bookmarksGrid) return;

      if (state.bookmarks.length === 0) {
        elements.emptyBookmarks.hidden = false;
        elements.bookmarksGrid.innerHTML = '';
        return;
      }

      elements.emptyBookmarks.hidden = true;
      
             elements.bookmarksGrid.innerHTML = state.bookmarks.map(bookmark => {
         const imgSrc = bookmark.thumbnail || PLACEHOLDER_SVG;
         
         return `
           <div class="bookmark-item" data-id="${bookmark.id}" data-article='${JSON.stringify(bookmark).replace(/'/g, "&apos;")}'>
             <img class="bookmark-image" src="${imgSrc}" alt="${bookmark.title}" />
             <div class="bookmark-content">
               <h3 class="bookmark-title">${bookmark.title}</h3>
               <p class="bookmark-extract">${bookmark.extract || ''}</p>
               <div class="bookmark-actions">
                 <button class="bookmark-btn open-home" data-id="${bookmark.id}">
                   ${utils.translate('read-on-wiki')}
                 </button>
                 <button class="bookmark-btn open" data-url="${bookmark.page_url}">
                   Wikipedia
                 </button>
                 <button class="bookmark-btn delete" data-id="${bookmark.id}">
                   Delete
                 </button>
               </div>
             </div>
           </div>
         `;
       }).join('');

             // Add event listeners
       elements.bookmarksGrid.querySelectorAll('.bookmark-btn.open-home').forEach(btn => {
         btn.addEventListener('click', (e) => {
           e.stopPropagation();
           const id = btn.getAttribute('data-id');
           const bookmark = state.bookmarks.find(b => b.id === id);
           if (bookmark) {
             // Ana sayfaya geç ve makaleyi göster
             tabManager.switchTab('home', 1);
             state.currentArticle = bookmark;
             articleManager.renderArticle(bookmark);
           }
         });
       });

       elements.bookmarksGrid.querySelectorAll('.bookmark-btn.open').forEach(btn => {
         btn.addEventListener('click', (e) => {
           e.stopPropagation();
           const url = btn.getAttribute('data-url');
           window.open(url, '_blank', 'noopener,noreferrer');
         });
       });

       elements.bookmarksGrid.querySelectorAll('.bookmark-btn.delete').forEach(btn => {
         btn.addEventListener('click', (e) => {
           e.stopPropagation();
           const id = btn.getAttribute('data-id');
           bookmarkManager.removeBookmark(id);
         });
       });
    }
  };

  // Initialize app
  const app = {
    init: () => {
      // Initialize all managers
      tabManager.init();
      themeManager.init();
      languageManager.init();
      bookmarkManager.init();
      settingsManager.init();
      interestsManager.init();
      articleManager.init();
    }
  };

  // Start the app when DOM is ready
  document.addEventListener('DOMContentLoaded', app.init);
})(); 