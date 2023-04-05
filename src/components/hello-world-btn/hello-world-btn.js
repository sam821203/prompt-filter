import "./hello-world-btn.scss";

class HelloWorldButton {
  // class properties
  buttonCssClass = "hello-world-btn";

  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");

    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);

    button.addEventListener("click", () => {
      const p = document.createElement("p");

      p.innerHTML = "Hello World";
      p.classList.add("hello-world-text");

      body.appendChild(p);
    });

    body.appendChild(button);
  }
}

export default HelloWorldButton;
