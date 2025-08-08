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
         "apply-settings": "Ayarları Uygula",
        "read-more": "Devamını oku"
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
         "apply-settings": "Apply Settings",
        "read-more": "Read more"
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
         "apply-settings": "Применить настройки",
        "read-more": "Читать далее"
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
         "apply-settings": "Einstellungen anwenden",
        "read-more": "Weiterlesen"
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
      articles: [],
      currentArticleIndex: 0,
      isLoading: false,
      isLoadingMore: false,
      articleType: 'random',
      preloadCount: 3 // Number of articles to preload ahead
    };
  
    // DOM elements
    const elements = {
      // Navigation
      navItems: document.querySelectorAll('.nav-item'),
      tabContents: document.querySelectorAll('.tab-content'),
      
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
      
      // Articles Feed
      articlesFeed: document.getElementById('articles-feed'),
      loadingIndicator: document.getElementById('loading-indicator'),
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
      },

      // Debounce function for scroll events
      debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      }
    };
  
        // Navigation management
    const navigationManager = {
      init: () => {
        elements.navItems.forEach((item) => {
          item.addEventListener('click', () => {
            const tabName = item.getAttribute('data-tab');
            navigationManager.switchTab(tabName);
          });
        });

        // Set initial tab
        navigationManager.switchTab('home');
      },

      switchTab: (tabName) => {
        if (state.currentTab === tabName) return;
        
        state.currentTab = tabName;
        
        // Update navigation items
        elements.navItems.forEach(item => {
          item.classList.toggle('active', item.getAttribute('data-tab') === tabName);
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
         
         // Reload feed in selected language if on home tab
         if (state.currentTab === 'home') {
           feedManager.loadInitialArticles();
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
         
         // Eğer home sekmesindeyse feed'i yenile
         if (state.currentTab === 'home') {
           feedManager.loadInitialArticles();
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
        // Switch to home tab and reload feed
        navigationManager.switchTab('home');
        feedManager.loadInitialArticles();
        
        // Show success message
        utils.showToast(utils.translate('apply-settings'), 'success');
      }
    };
  
        // Articles Feed Management
    const feedManager = {
      init: () => {
        // Initialize scroll detection
        feedManager.setupScrollDetection();
        
        // Setup floating action buttons
        elements.bookmarkBtn.addEventListener('click', feedManager.toggleCurrentBookmark);
        elements.shareBtn.addEventListener('click', feedManager.shareCurrentArticle);
        
        // Load initial articles
        feedManager.loadInitialArticles();
      },

      setupScrollDetection: () => {
        if (!elements.articlesFeed) return;
        
        elements.articlesFeed.addEventListener('scroll', utils.debounce(() => {
          const { scrollTop, scrollHeight, clientHeight } = elements.articlesFeed;
          const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
          
          // Load more when user is 80% through the content
          if (scrollPercentage > 0.8 && !state.isLoadingMore) {
            feedManager.loadMoreArticles();
          }
          
          // Update current article index for floating buttons
          feedManager.updateCurrentArticleIndex();
        }, 100));
      },

      updateCurrentArticleIndex: () => {
        const cards = elements.articlesFeed.querySelectorAll('.article-card');
        const feedRect = elements.articlesFeed.getBoundingClientRect();
        
        cards.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          const isVisible = cardRect.top < feedRect.height * 0.5 && 
                           cardRect.bottom > feedRect.height * 0.5;
          
          if (isVisible) {
            state.currentArticleIndex = index;
            feedManager.updateFloatingButtons();
          }
        });
      },

      updateFloatingButtons: () => {
        const currentArticle = state.articles[state.currentArticleIndex];
        if (!currentArticle) return;
        
        const isBookmarked = bookmarkManager.isBookmarked(currentArticle.id);
        elements.bookmarkBtn.classList.toggle('active', isBookmarked);
      },

      loadInitialArticles: async () => {
        state.isLoading = true;
        elements.loadingIndicator.style.display = 'flex';
        
        try {
          // Load first batch of articles
          const articles = await feedManager.fetchArticles(5);
          state.articles = articles;
          
          feedManager.renderArticles(articles);
          feedManager.preloadImages(articles);
          
          // Load more articles in background
          feedManager.loadMoreArticles();
        } catch (error) {
          console.error('Failed to load initial articles:', error);
          feedManager.showError(error.message);
        } finally {
          state.isLoading = false;
          elements.loadingIndicator.style.display = 'none';
        }
      },

      loadMoreArticles: async () => {
        if (state.isLoadingMore) return;
        
        state.isLoadingMore = true;
        
        try {
          const newArticles = await feedManager.fetchArticles(state.preloadCount);
          state.articles.push(...newArticles);
          
          feedManager.renderArticles(newArticles, true);
          feedManager.preloadImages(newArticles);
        } catch (error) {
          console.error('Failed to load more articles:', error);
        } finally {
          state.isLoadingMore = false;
        }
      },

      fetchArticles: async (count) => {
        const articles = [];
        
        for (let i = 0; i < count; i++) {
          try {
            const params = new URLSearchParams();
            
            if (state.selectedInterests.length > 0) {
              params.append('interests', state.selectedInterests.join(','));
            }
            
            params.append('language', state.currentLanguage);
            params.append('type', state.articleType);
            
            const url = `${API.RANDOM}?${params.toString()}`;
            const article = await utils.fetchJSON(url);
            
            // Add unique ID if not present
            if (!article.id) {
              article.id = Date.now() + Math.random();
            }
            
            articles.push(article);
          } catch (error) {
            console.error(`Failed to fetch article ${i + 1}:`, error);
          }
        }
        
        return articles;
      },

      renderArticles: (articles, append = false) => {
        if (!elements.articlesFeed) return;
        
        const articlesHTML = articles.map(article => feedManager.createArticleCard(article)).join('');
        
        if (append) {
          elements.articlesFeed.insertAdjacentHTML('beforeend', articlesHTML);
        } else {
          elements.articlesFeed.innerHTML = articlesHTML + elements.loadingIndicator.outerHTML;
        }
      },

      createArticleCard: (article) => {
        const { title, extract, thumbnail, page_url } = article;
        const imgSrc = thumbnail || PLACEHOLDER_SVG;
        
        return `
          <div class="article-card" data-article-id="${article.id}">
            <img class="article-image" src="${imgSrc}" alt="${title || 'Article image'}" />
            <div class="article-overlay">
              <div class="article-content">
                <h1 class="article-title">${title || '(No title)'}</h1>
                <div class="article-extract-container">
                  <p class="article-extract">${extract || 'No summary available.'}</p>
                  ${page_url ? `
                    <a class="read-more-btn" href="${page_url}" target="_blank" rel="noopener noreferrer">
                      <span data-tr="read-more">${utils.translate('read-more')}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          </div>
        `;
      },

      preloadImages: (articles) => {
        articles.forEach(article => {
          if (article.thumbnail) {
            const img = new Image();
            img.src = article.thumbnail;
          }
        });
      },

      toggleCurrentBookmark: () => {
        const currentArticle = state.articles[state.currentArticleIndex];
        if (!currentArticle) return;

        const isBookmarked = bookmarkManager.isBookmarked(currentArticle.id);
        
        if (isBookmarked) {
          bookmarkManager.removeBookmark(currentArticle.id);
          elements.bookmarkBtn.classList.remove('active');
          utils.showToast(utils.translate('bookmark-removed'), 'success');
        } else {
          bookmarkManager.addBookmark(currentArticle);
          elements.bookmarkBtn.classList.add('active');
          utils.showToast(utils.translate('bookmark-saved'), 'success');
        }
      },

      shareCurrentArticle: async () => {
        const currentArticle = state.articles[state.currentArticleIndex];
        if (!currentArticle) return;

        const shareData = {
          title: currentArticle.title,
          text: currentArticle.extract,
          url: currentArticle.page_url
        };

        try {
          if (navigator.share) {
            await navigator.share(shareData);
          } else {
            await navigator.clipboard.writeText(currentArticle.page_url);
            utils.showToast(utils.translate('link-copied'), 'success');
          }
        } catch (error) {
          console.error('Share failed:', error);
          utils.showToast(utils.translate('share-failed'), 'error');
        }
      },

      showError: (message) => {
        elements.errorMessage.textContent = message || utils.translate('error');
        elements.errorMessage.hidden = false;
      },

      clearError: () => {
        elements.errorMessage.hidden = true;
        elements.errorMessage.textContent = '';
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
        navigationManager.init();
        themeManager.init();
        languageManager.init();
        bookmarkManager.init();
        settingsManager.init();
        interestsManager.init();
        feedManager.init();
      }
    };
  
    // Start the app when DOM is ready
    document.addEventListener('DOMContentLoaded', app.init);
  })(); 