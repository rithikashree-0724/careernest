// Display the current year in the footer.
document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Search and filter the career cards.
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

if (searchInput && categorySelect) {
  const careerCards = document.querySelectorAll(".career");
  const noResults = document.getElementById("no-results");

  function filterCareers() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;
    let visibleCount = 0;

    careerCards.forEach((card) => {
      const careerName = card.dataset.name;
      const category = card.dataset.category;

      const matchesSearch = careerName.includes(searchText);
      const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

      const shouldShow = matchesSearch && matchesCategory;
      card.hidden = !shouldShow;

      if (shouldShow) visibleCount++;
    });

    noResults.hidden = visibleCount > 0;
  }

  searchInput.addEventListener("input", filterCareers);
  categorySelect.addEventListener("change", filterCareers);
}

// Demonstration contact form.
// This shows a message in the browser; it does not send or store submissions.
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("form-message");

    message.textContent = `Thank you, ${name}. Your form has been submitted in this demo.`;
    contactForm.reset();
  });
}
