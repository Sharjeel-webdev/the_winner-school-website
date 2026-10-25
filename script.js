
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // 1. Mobile navigation menu
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open menu");
                menuToggle.textContent = "☰";
            });
        });
    }

    // 2. Automatically update the footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 3. Contact and admission enquiry form
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const studentName = document
                .getElementById("studentName").value.trim();

            const phone = document
                .getElementById("phone").value.trim();

            const classChoice = document
                .getElementById("classChoice").value;

            const message = document
                .getElementById("message").value.trim();

            if (!studentName || !phone || !classChoice) {
                if (formMessage) {
                    formMessage.textContent =
                        "Please fill in your name, phone number and class.";
                }
                return;
            }

            const schoolEmail = "info@thewinnerschoolsystem.com";

            const subject = encodeURIComponent(
                "Admission Enquiry - " + studentName
            );

            const body = encodeURIComponent(
                "The Winner School System\n\n" +
                "Student/Parent Name: " + studentName + "\n" +
                "Phone Number: " + phone + "\n" +
                "Class Required: " + classChoice + "\n" +
                "Message: " + (message || "No additional message")
            );

            if (formMessage) {
                formMessage.textContent =
                    "Your email app will open. Please send the email to submit your enquiry.";
            }

            window.location.href =
                "mailto:" + schoolEmail +
                "?subject=" + subject +
                "&body=" + body;
        });
    }
});
