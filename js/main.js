// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.createElement('div');
overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-40 hidden';
document.body.appendChild(overlay);

function toggleMenu(show) {
    mobileMenu.style.transform = show ? 'translateX(0)' : 'translateX(100%)';
    overlay.classList.toggle('hidden', !show);
    document.body.style.overflow = show ? 'hidden' : '';
}

mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
closeMenuBtn.addEventListener('click', () => toggleMenu(false));
overlay.addEventListener('click', () => toggleMenu(false));

// Hero Slider
const heroSlider = document.getElementById('heroSlider');
const slides = [
    { image: '/background1.png', title: 'Your Partner at Strategic Crossroads' },
    { image: '/background2.jpg', title: 'Excellence in Energy Solutions' },
    { image: '/background3.jpg', title: 'Global Industrial Solutions' }
];

let currentSlide = 0;

function createSlides() {
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slideElement.style.backgroundImage = `url(${slide.image})`;
        slideElement.style.backgroundSize = 'cover';
        slideElement.style.backgroundPosition = 'center';
        heroSlider.appendChild(slideElement);
    });
}

function changeSlide(direction) {
    const slideElements = document.querySelectorAll('.hero-slide');
    slideElements[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slideElements[currentSlide].classList.add('active');
}

createSlides();

document.getElementById('prevSlide').addEventListener('click', () => changeSlide(-1));
document.getElementById('nextSlide').addEventListener('click', () => changeSlide(1));

// Auto-advance slides
setInterval(() => changeSlide(1), 5000);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Products data
const products = [
    {
        title: 'Pipes & Fittings',
        image: '/pipes.png',
        description: 'High-quality pipes and fittings for industrial applications.'
    },
    {
        title: 'Valves',
        image: '/valves.png',
        description: 'Industrial valves for various applications.'
    },
    {
        title: 'Industrial Equipment',
        image: '/product3.png',
        description: 'Specialized equipment for industrial processes.'
    }
];

// Populate products section
const productsContainer = document.querySelector('#products .grid');
if (productsContainer) {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-lg overflow-hidden animate';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${product.title}</h3>
                <p class="text-gray-600">${product.description}</p>
                <a href="/products.html" class="mt-4 inline-block text-red-600 hover:text-red-700">Learn More →</a>
            </div>
        `;
        productsContainer.appendChild(card);
    });
}