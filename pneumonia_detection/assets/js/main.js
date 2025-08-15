// Shared functionality
document.addEventListener('DOMContentLoaded', function() {
    // Next button functionality
    const nextButton = document.querySelector('.btn-next');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            window.location.href = 'tutorial.html';
        });
    }
    
    // Set active link based on current page
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .sidebar-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
     // Add click handlers for auth buttons
    document.querySelector('.btn-signin')?.addEventListener('click', function() {
        window.location.href = 'auth.html?action=signup';
    });
    
    document.querySelector('.btn-login')?.addEventListener('click', function() {
        window.location.href = 'auth.html?action=login';
    });
});

