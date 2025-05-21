        // Filtrado de proyectos
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Menú móvil
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
        
        // Menú desplegable del perfil
        const profileIcon = document.querySelector('.profile-icon');
        if(profileIcon) {
            profileIcon.addEventListener('click', function(e) {
                e.preventDefault();
                this.querySelector('.profile-dropdown').classList.toggle('show');
            });
            
            document.addEventListener('click', function(e) {
                if(!profileIcon.contains(e.target)) {
                    profileIcon.querySelector('.profile-dropdown').classList.remove('show');
                }
            });
        }
        
        // Validación del formulario de newsletter
        const newsletterForm = document.querySelector('.newsletter-form');
        if(newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                // Aquí iría la lógica para enviar el formulario
                alert(`Gracias por suscribirte con el email: ${email}`);
                this.reset();
            });
        }