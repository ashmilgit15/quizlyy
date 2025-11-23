// DOM Elements
const landingPage = document.getElementById('landing-page');
const quizPage = document.getElementById('quiz-page');
const resultsPage = document.getElementById('results-page');
const quizTitle = document.getElementById('quiz-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCount = document.getElementById('question-count');
const progressBar = document.getElementById('progress-bar');
const nextButton = document.getElementById('next-button');
const feedback = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const percentageElement = document.getElementById('percentage');
const performanceMessage = document.getElementById('performance-message');
const resumeContainer = document.getElementById('resume-container');

// Quiz state
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let currentChapter = null;

// Storage keys
const STORAGE_KEYS = {
    CURRENT_CHAPTER: 'quizly_current_chapter',
    CURRENT_QUESTION: 'quizly_current_question',
    CURRENT_SCORE: 'quizly_current_score',
    QUIZ_IN_PROGRESS: 'quizly_in_progress',
    TIMESTAMP: 'quizly_timestamp'
};

// Save quiz state to localStorage
function saveQuizState(chapter, questionIndex, currentScore) {
    const state = {
        chapter,
        questionIndex,
        currentScore,
        timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEYS.CURRENT_CHAPTER, chapter);
    localStorage.setItem(STORAGE_KEYS.CURRENT_QUESTION, questionIndex);
    localStorage.setItem(STORAGE_KEYS.CURRENT_SCORE, currentScore);
    localStorage.setItem(STORAGE_KEYS.QUIZ_IN_PROGRESS, 'true');
    localStorage.setItem(STORAGE_KEYS.TIMESTAMP, state.timestamp);
}

// Load quiz state from localStorage
function loadQuizState() {
    const chapter = localStorage.getItem(STORAGE_KEYS.CURRENT_CHAPTER);
    const questionIndex = parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_QUESTION) || '0');
    const currentScore = parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_SCORE) || '0');
    const inProgress = localStorage.getItem(STORAGE_KEYS.QUIZ_IN_PROGRESS) === 'true';
    const timestamp = parseInt(localStorage.getItem(STORAGE_KEYS.TIMESTAMP) || '0');
    
    // Check if the saved state is recent (within 24 hours)
    const isRecent = (Date.now() - timestamp) < 24 * 60 * 60 * 1000;
    
    if (inProgress && isRecent && chapter && quizData[chapter]) {
        return { chapter: parseInt(chapter), questionIndex, currentScore };
    }
    return null;
}

// Clear quiz state from localStorage
function clearQuizState() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_CHAPTER);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_QUESTION);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_SCORE);
    localStorage.removeItem(STORAGE_KEYS.QUIZ_IN_PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.TIMESTAMP);
}

// Show a specific page and hide others
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show the requested page
    document.getElementById(pageId).classList.remove('hidden');
    
    // Add animation
    setTimeout(() => {
        document.getElementById(pageId).classList.add('animate-fade-in');
    }, 10);
}

// Display the current question
function showQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update question count
    questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options with mobile-friendly styling
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        
        // Add click handler
        button.addEventListener('click', () => handleAnswer(option, button));
        
        optionsContainer.appendChild(button);
    });
    
    // Reset UI state
    nextButton.disabled = true;
    feedback.classList.add('hidden');
    feedback.textContent = '';
}

// Handle answer selection
function handleAnswer(selectedAnswer, buttonElement) {
    // Disable all options
    document.querySelectorAll('.option').forEach(option => {
        option.disabled = true;
        option.style.cursor = 'not-allowed';
        option.style.opacity = '0.7';
    });
    
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    // Update score if correct
    if (isCorrect) {
        score++;
        buttonElement.classList.add('correct');
        showFeedback('Correct! 🎉', true);
        
        // Add success animation
        buttonElement.style.animation = 'pulse 0.5s ease-in-out';
    } else {
        buttonElement.classList.add('incorrect');
        showFeedback(`Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`, false);
        
        // Show the correct answer
        document.querySelectorAll('.option').forEach(option => {
            if (option.textContent.trim() === currentQuestion.correctAnswer) {
                option.classList.add('correct');
            }
        });
    }
    
    // Enable next button
    nextButton.disabled = false;
    
    // Save state
    saveQuizState(currentChapter, currentQuestionIndex, score);
    
    // Focus next button for better UX
    setTimeout(() => nextButton.focus(), 100);
}

// Show feedback for the current answer
function showFeedback(message, isCorrect) {
    feedback.textContent = message;
    feedback.className = 'feedback';
    if (isCorrect) {
        feedback.classList.add('correct');
    } else {
        feedback.classList.add('incorrect');
    }
    feedback.classList.remove('hidden');
}

// Move to the next question or show results
function nextQuestion() {
    currentQuestionIndex++;
    
    // Save progress
    saveQuizState(currentChapter, currentQuestionIndex, score);
    
    if (currentQuestionIndex < currentQuiz.questions.length) {
        showQuestion();
        
        // Scroll to top for better mobile experience
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showResults();
    }
}

// Show the results page
function showResults(isEarlyEnd = false) {
    const totalQuestions = currentQuiz.questions.length;
    const attemptedQuestions = isEarlyEnd ? currentQuestionIndex : totalQuestions;
    const percentage = attemptedQuestions > 0 ? Math.round((score / attemptedQuestions) * 100) : 0;
    
    // Debug logging
    console.log('Results:', {
        score,
        totalQuestions,
        attemptedQuestions,
        percentage,
        isEarlyEnd,
        currentQuestionIndex
    });
    
    // Update results page
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = attemptedQuestions;
    percentageElement.textContent = `${percentage}%`;
    
    // Update results title for early end
    const resultsTitle = document.querySelector('#results-page h2');
    if (isEarlyEnd) {
        resultsTitle.textContent = 'Quiz Ended Early';
        resultsTitle.className = 'results-title early-end';
        
        // Show continue button for early end
        document.getElementById('continue-quiz-button').classList.remove('hidden');
    } else {
        resultsTitle.textContent = 'Quiz Completed!';
        resultsTitle.className = 'results-title';
        
        // Hide continue button for completed quiz
        document.getElementById('continue-quiz-button').classList.add('hidden');
    }
    
    // Add performance message based on completion type
    let message = '';
    if (isEarlyEnd) {
        const remainingQuestions = totalQuestions - attemptedQuestions;
        message = `You completed ${attemptedQuestions} of ${totalQuestions} questions. ${remainingQuestions > 0 ? `${remainingQuestions} questions remaining.` : ''} Keep practicing!`;
    } else {
        if (percentage >= 90) {
            message = '🏆 Outstanding! You\'re a biology expert!';
        } else if (percentage >= 70) {
            message = '🌟 Great job! You know your stuff!';
        } else if (percentage >= 50) {
            message = '👍 Good effort! Keep learning!';
        } else {
            message = '📚 Keep practicing! You\'ll get better!';
        }
    }
    performanceMessage.textContent = message;
    
    // Clear saved state when quiz is completed or ended
    clearQuizState();
    
    // Show results page
    showPage('results-page');
}

// End quiz early and show partial results
function endQuiz() {
    // Show confirmation dialog
    if (confirm('Are you sure you want to end the quiz early? Your current progress will be saved and you\'ll see your results for the questions you\'ve attempted.')) {
        showResults(true);
    }
}

// Start a new quiz
function startQuiz(chapter) {
    currentQuiz = quizData[chapter];
    currentChapter = chapter;
    currentQuestionIndex = 0;
    score = 0;
    
    // Save initial state
    saveQuizState(chapter, currentQuestionIndex, score);
    
    // Update UI
    quizTitle.textContent = currentQuiz.title;
    showPage('quiz-page');
    showQuestion();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Resume a saved quiz
function resumeQuiz() {
    const savedState = loadQuizState();
    if (savedState) {
        currentQuiz = quizData[savedState.chapter];
        currentChapter = savedState.chapter;
        currentQuestionIndex = savedState.questionIndex;
        score = savedState.currentScore;
        
        quizTitle.textContent = currentQuiz.title;
        showPage('quiz-page');
        showQuestion();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Restart the current quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    // Save reset state
    saveQuizState(currentChapter, currentQuestionIndex, score);
    
    showPage('quiz-page');
    showQuestion();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Continue quiz after ending early
function continueQuiz() {
    showPage('quiz-page');
    showQuestion();
    
    // Save state to continue from where we left off
    saveQuizState(currentChapter, currentQuestionIndex, score);
}

// Go back to the home page
function goHome() {
    // Clear saved state when going home
    clearQuizState();
    showPage('landing-page');
    
    // Hide resume button
    resumeContainer.classList.add('hidden');
}

// Check for saved quiz and show resume button
function checkSavedQuiz() {
    const savedState = loadQuizState();
    if (savedState) {
        resumeContainer.classList.remove('hidden');
        
        // Update resume button text with progress
        const resumeButton = resumeContainer.querySelector('a');
        if (resumeButton) {
            const progress = Math.round((savedState.questionIndex / quizData[savedState.chapter].questions.length) * 100);
            const subtitleElement = resumeButton.querySelector('.quiz-card-subtitle');
            if (subtitleElement) {
                subtitleElement.textContent = `Continue from question ${savedState.questionIndex + 1} (${progress}% complete)`;
            }
        }
    }
}

// Initialize the app
function init() {
    // Check for saved quiz
    checkSavedQuiz();
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !landingPage.classList.contains('hidden')) {
            // ESC on landing page does nothing
            return;
        } else if (e.key === 'Escape' && !quizPage.classList.contains('hidden')) {
            // ESC on quiz page goes home
            goHome();
        } else if (e.key === 'Enter' && !nextButton.disabled && !quizPage.classList.contains('hidden')) {
            // Enter on quiz page goes to next question
            nextQuestion();
        }
    });
    
    // Add touch feedback for mobile
    if ('ontouchstart' in window) {
        document.addEventListener('touchstart', function() {}, {passive: true});
    }
    
    // Prevent pull-to-refresh on mobile
    document.body.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, {passive: false});
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
