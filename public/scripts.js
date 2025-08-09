// Detects when elements are in view
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function triggerAnimations() {
  const categories = document.querySelectorAll('.category');
  categories.forEach((cat, index) => {
    if (isInViewport(cat) && !cat.classList.contains('animate')) {
      cat.classList.add('animate');
      // Add animation delay
      cat.style.animationDelay = `${index * 0.2}s`;
    }
  });
}

// Initial check
window.addEventListener('load', triggerAnimations);
// Scroll check
window.addEventListener('scroll', triggerAnimations);

//menu dropdown
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', () => {
dropdownMenu.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
  const itemsPerPage = 8;
  const products = Array.from(document.querySelectorAll('.item'));
  const totalPages = Math.ceil(products.length / itemsPerPage);
  let currentPage = 1;

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageInfo = document.getElementById('pageInfo');

  function showPage(page) {
    // Hide all
    products.forEach(p => (p.style.display = 'none'));

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Show only current page items
    products.slice(start, end).forEach(p => (p.style.display = 'block'));

    // Update buttons
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
    pageInfo.textContent = `Page ${page} of ${totalPages}`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Initial render
  showPage(currentPage);
});

document.querySelectorAll(".thumb").forEach(thumb => {
  thumb.addEventListener("click", function () {
    // Change main image
    document.getElementById("displayImage").src = this.src;

    // Remove active highlight from all
    document.querySelectorAll(".thumb").forEach(img => img.classList.remove("active"));

    // Add highlight to clicked thumbnail
    this.classList.add("active");
  });
});

