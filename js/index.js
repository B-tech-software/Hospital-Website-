 // Use DOMContentLoaded to make sure the HTML is fully loaded before running the script
        document.addEventListener('DOMContentLoaded', function() {

            // Get all the necessary DOM elements
            const modal = document.getElementById('appointmentModal');
            const openBtn = document.getElementById('openBookingModalBtn');
            const closeBtn = document.querySelector('.close-modal-btn');
            const form = document.getElementById('bookingForm');
            const submitBtn = document.getElementById('submitBtn');
            const successMessage = document.getElementById('successMessage');

            // Functions to open and close the modal
            function openModal() {
                modal.classList.add('show');
                // Set min date for appointment to today to prevent booking in the past
                document.getElementById('appointmentDate').min = new Date().toISOString().split("T")[0];
            }

            function closeModal() {
                modal.classList.remove('show');
                // Reset form for next time after animation finishes
                setTimeout(() => {
                    form.style.display = 'block';
                    successMessage.style.display = 'none';
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Request Appointment';
                }, 300);
            }

            // Event Listeners
            openBtn.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the link from navigating
                openModal();
            });
            
            closeBtn.addEventListener('click', closeModal);

            // Close modal if user clicks outside of the modal content
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });

            // Close modal with the 'Escape' key
            window.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && modal.classList.contains('show')) {
                    closeModal();
                }
            });

            // Form Submission Handling
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent page reload

                // 1. Provide user feedback
                submitBtn.disabled = true;
                submitBtn.textContent = 'Submitting...';

                // 2. Simulate sending data to a server
                // In a real application, this is where you would use fetch()
                // to send the form data to your backend server.
                setTimeout(() => {
                    // 3. Handle the response
                    console.log('Form Submitted Successfully!');
                    
                    // Show the success message and hide the form
                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Automatically close the modal after a few seconds
                    setTimeout(() => {
                        closeModal();
                    }, 4000); // Keep success message on screen for 4 seconds

                }, 1500); // Simulate a 1.5-second network delay
            });
        });