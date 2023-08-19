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
            <main class="rgb">
                <div class="container">
                    <section class="imgBox">
                        <img class="pc" src="${this.img}"/>
                        <img class="movil" src="${this.movil}" />
                        <img class="fCard" src="./img/fCard.png">
                    </section>
                    <section class="details">
                        <div class="content">
                            <h2>${this.title}<br><span>${this.coleccion}</span></h2>
                            <p>${this.contenido}</p>
                            <img class="fCard2" src="./img/fCard.png">
                        </div>
                    </section>
                </div>
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
            border-radius: 10px;
            overflow: hidden;
            transform-style: preserve-3d;
    perspective: 1000px;
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
      .container .imgBox img.pc {
          position: relative;
          top: 120px;
          left: -40px;
          width: 720px;
          height: 480px;
          transform: translateZ(20px);
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
          margin-bottom: 20px;
          font-size: 2.5em;
          line-height: 0.8em;
          color: #444;
          font-family: free-fire;
      }
      .container .details h2 span {
          font-size: 0.5em;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #999;
          font-family: Arial, Helvetica, sans-serif;
          font-weight:bold
      }
      .container .details p {
          max-width: 100%;
          margin-bottom: 35px;
          color: #333;
          font-size: 18px;
          transform: translateZ(30px);
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
      .container img.fCard {
        width: 180px;
    height: fit-content;
    position: absolute;
    top: 35px;
    left: -50px;
      }
      .container img.fCard2 {
        width: 320px;
        height: fit-content;
        position: absolute;
        bottom: -62px;
        right: -77px;
        opacity: 0.1;
        0px: ;
    }
    .rgb::after {
        content:"";
        background: linear-gradient(45deg,
        #ff0000 0%, 
        #ff9a00 10%,
        #d0de21 20%,
        #4fdc4a 30%, 
        #3fdad8 40%,
        #2fc9e2 50%, 
        #1c7fee 60%, 
        #5f15f2 70%, 
        #ba0cf8 80%, 
        #fb07d9 90%, 
        #ff0000 100%  )
        repeat 0% 0% / 300% 100%;
        position: absolute;
        inset: -3px;
        border-radius: 10px;
        filter: blur(8px);
        z-index: -1;
        animation: rgb 6s linear infinite;
        width: 905px;
    height: 600px;
    top: 3%;
    left: 2%;
      }
      @keyframes rgb {
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
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
              border-radius: 10px 10px 0 0;
              background: linear-gradient(#000 0%, #000000c9 70%, #1d1d1d 100%);
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
          .container .imgBox img.pc, .container .imgBox:before, .container .details:before, .fCard {
            display:none
        }
        .movil{
            display:block;
            margin-bottom:-25%
          }
          .rgb::after {
            width: 505px;
            height: 702px;
            top: 2%;
            left: 4%;
          }
          .container .imgBox{
            padding: 10px 10px 0px
          }
          .container .details {
            padding: 70px 20px 0;
            border-radius: 0 0 10px 10px;

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