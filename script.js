document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const form = document.getElementById('shortenForm');
    const urlInput = document.getElementById('url');
    const resultDiv = document.getElementById('result');
    const shortUrlElement = document.getElementById('shortUrl');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const url = urlInput.value.trim();
        if (!url) return;

        try {
            const response = await fetch('shorten.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });

            const data = await response.json();
            if (data.success) {
                shortUrlElement.href = data.shortUrl;
                shortUrlElement.textContent = data.shortUrl;
                resultDiv.classList.remove('hidden');
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});



const header = document.getElementById('header');
const dmenu = document.getElementById('desktop-menu');
const get_started = document.getElementById('get_started');
const title = document.getElementById('title');
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('bg-opacity-100');
    dmenu.classList.add('text-black');
    title.classList.add('text-gray-900');
    get_started.classList.add('bg-opacity-100','text-gray-900');
    get_started.classList.remove('bg-opacity-5','text-gray-100');
    dmenu.classList.remove('text-white');
    title.classList.remove('text-blue-100');
    header.classList.remove('bg-opacity-5');
  } else {
    header.classList.remove('bg-opacity-100');
    dmenu.classList.remove('text-black');
    get_started.classList.remove('bg-opacity-100','text-gray-900');
    title.classList.remove('text-gray-900');
    get_started.classList.add('bg-opacity-5','text-gray-100');
    dmenu.classList.add('text-white');
    header.classList.add('bg-opacity-5');
    title.classList.add('text-blue-100');
  }
});

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});


   // Toggle mobile menu
    // Mobile menu code remains the same

    // Particle.js initialization
    particlesJS('particles-js', {
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 1,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 180,
            color: '#ffffff',
            opacity: 0.5,
            width: 0.5
          },
          move: {
            enable: true,
            speed: 10,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    
    
      // Toggle mobile menu
  