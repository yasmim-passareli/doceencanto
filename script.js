// JavaScript da Doce Encanto: menu mobile, ano e formulário.
document.addEventListener("DOMContentLoaded", () => {
  // Atualiza automaticamente o ano do rodapé.
  document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Abre e fecha o menu em telas pequenas.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  // Preenche o assunto quando a pessoa chega pelo botão de um produto.
  const params = new URLSearchParams(window.location.search);
  const selectedProduct = params.get("produto");
  const subjectField = document.querySelector("#subject");
  if (selectedProduct && subjectField) {
    subjectField.value = `Tenho interesse em: ${selectedProduct}`;
  }

  // Validação demonstrativa do formulário de contato.
  const contactForm = document.querySelector("#contactForm");
  const feedback = document.querySelector("#formFeedback");

  if (contactForm && feedback) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const customerName = document.querySelector("#name").value.trim();
      feedback.textContent = `Obrigado, ${customerName}! Sua mensagem foi preenchida com sucesso.`;
      contactForm.reset();
    });
  }
});