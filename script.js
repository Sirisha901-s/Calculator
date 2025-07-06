
    let box = document.querySelectorAll('.item');
    document.querySelector(".ans").addEventListener("click", () => {
      let exp = document.querySelector('.input').value;
      try {
        document.querySelector(".input").value = eval(exp);
      } catch {
        document.querySelector(".input").value = "Error";
      }
    });

    box.forEach((box) => {
      box.addEventListener("click", () => {
        document.querySelector(".input").value += box.innerHTML;
      });
    });

    document.querySelector(".clear").addEventListener("click", () => {
      document.querySelector(".input").value = "";
    });

    document.querySelector(".backspace").addEventListener("click", () => {
      let s = document.querySelector(".input").value;
      document.querySelector(".input").value = s.slice(0, -1);
    });
  
