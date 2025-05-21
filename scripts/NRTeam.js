        // Datos del equipo
        const teamMembers = [
            {
                name: "Diego José Castillo Bueno",
                role: "Director Ejecutivo",
                bio: "Biólogo con 1 año de experiencia en conservación. Lidera nuestra visión estratégica y las alianzas institucionales.",
                img: "",
                social: {
                    facebook: "#",
                    instagram: "#",
                    email: "#"
                }
            },
            {
                name: "Xander Daniel Espinosa Arias",
                role: "Coordinador de Reforestación",
                bio: "Ingeniero forestal especializado en restauración de ecosistemas tropicales. Diseña nuestros programas de siembra.",
                img: "",
                social: {
                    facebook: "#",
                    instagram: "#",
                    email: "#"
                }
            }
        ];
        
        // Función para renderizar el equipo
        function renderTeam() {
            const teamGrid = document.getElementById('teamGrid');
            
            teamGrid.innerHTML = teamMembers.map(member => `
                <div class="team-card">
                    <div class="team-img-container">
                        ${member.img ? 
                            `<img src="${member.img}" alt="${member.name}" class="team-img">` : 
                            `<div class="img-placeholder">
                                <i class="fas fa-user" style="font-size: 5rem; color: #aaa;"></i>
                            </div>`
                        }
                    </div>
                    <div class="team-info">
                        <h3>${member.name}</h3>
                        <span class="role">${member.role}</span>
                        <p>${member.bio}</p>
                        <div class="social-links">
                            <a href="${member.social.facebook}" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                            <a href="${member.social.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="mailto:${member.social.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        // Animación de contadores
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            const speed = 200;
            
            counters.forEach(counter => {
                const target = parseInt(counter.textContent.replace('+', ''));
                const increment = target / speed;
                let count = 0;
                
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        counter.textContent = Math.floor(count) + "+";
                        setTimeout(updateCount, 1);
                    } else {
                        counter.textContent = target + "+";
                    }
                };
                
                updateCount();
            });
        }
        
        // Menú móvil
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
        
        // Inicializar
        document.addEventListener('DOMContentLoaded', function() {
            renderTeam();
            
            // Iniciar animación de contadores cuando la sección es visible
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animateCounters();
                    observer.unobserve(entries[0].target);
                }
            }, { threshold: 0.5 });
            
            const statsSection = document.querySelector('.stats-section');
            if (statsSection) {
                observer.observe(statsSection);
            }
        });