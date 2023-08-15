class productCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes(){
    return ["img", "movil", "title", "precio", "coleccion", "contenido"];
  }
  attributeChangedCallback(attr, odlval, newVal){
    if(attr==="img"){
        this.img = newVal;
    }
    if(attr==="movil"){
        this.movil = newVal;
    }
    if(attr==="title"){
        this.title = newVal;
    }
    if(attr==="precio"){
        this.precio = newVal;
    }
    if(attr==="coleccion"){
        this.coleccion = newVal;
    }
    if(attr==="contenido"){
        this.contenido = newVal;
    }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
            <main class="container">
                <section class="imgBox">
                    <img src="${this.img}" />
                    <img class="movil" src="${this.movil}" />
                </section>
                <section class="details">
                    <div class="content">
                        <h2>${this.title}<br><span>${this.coleccion}</span></h2>
                        <p>${this.contenido}</p>
                    </div>
                </section>
            </main>
            ${this.getStyles()};
        `;
    return template;
  }
  getStyles() {
    return `
        <style>
        :host {
        --primary-background: #171717;
          width: 80%;
          max-width: 900px;
          min-width: 280px;
          margin: 0 auto;
        }
        .container {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 900px;
            height: 600px;
            margin: 20px;
            background-color: transparent;
            border-radius: 10px
        }
        .container .imgBox {
            position: relative;
            display: flex;
            justify-content: center;
            width: 50%;
            height: 100%;
            background-color: var(--primary-background);
            border-radius: 10px 0 0 10px;
      }
      .container .imgBox:before {
          position: absolute;
          top: 20px;
          left: 150px;
          font-size: 8em;
          letter-spacing: 15px;
          font-weight: 800;
          color: #fff;
          content: 'Free';
          opacity: 0.1;
          font-family: free-fire;
      }
      .container .imgBox img {
          position: relative;
          top: 120px;
          left: -40px;
          width: 720px;
          height: 480px;
      }
      .container .details {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 40px;
          background-color: #fff;
          border-radius: 0 10px 10px 0;

      }
      .container .details:before {
        position: absolute;
          top: 20px;
          right: 170px;
          font-size: 8em;
          letter-spacing: 15px;
          font-weight: 800;
          color: #000;
          content: 'Fire';
          opacity: 0.1;
          font-family: free-fire;
      }
      .container .details h2 {
          margin-bottom: 25px;
          font-size: 2.5em;
          line-height: 0.8em;
          color: #444;
      }
      .container .details h2 span {
          font-size: 0.4em;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #999;
      }
      .container .details p {
          max-width: 100%;
          margin-bottom: 35px;
          color: #333;
          font-size: 15px;
      }
      .container .details h3 {
          float: left;
          font-size: 2.5em;
          color: #a2a2a2;
      }
      .container .details button {
          margin-top: 35px;
          float: right;
          padding: 15px 20px;
          font-size: 16px;
          color: #fff;
          letter-spacing: 1px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 40px;
          background-color: #5a6cb2;
          cursor: pointer;
      }
      .movil{
        display:none;
      }
      @media (max-width: 1080px) {
          .container {
              height: auto;
              width: auto;
          }
          .container .imgBox {
              padding: 40px;
              width: 100%;
              box-sizing: border-box;
              height: auto;
              text-align: center;
          }
          .container .imgBox img {
              left: initial;
              width: 100%;
              height: auto;
              transform: rotate(0deg);
          }

          .container .details {
              width: 100%;
              height: auto;
              padding: 20px;
          }

          .container .details p {
              max-width: 100%;
              margin-left: 0;
          }
      }
      </style>
        `;
  }
  
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("ecommerce-card", productCard);