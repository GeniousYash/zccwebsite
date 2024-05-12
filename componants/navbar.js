const navbar = ()=>{
     return(
          `
        <div class="navbar">
          <div class="site-logo">ZCC</div>
          <div class="menu-toggle">
            <div id="menu-toggle-btn">
              <span id="span"></span>
            </div>
          </div>
        </div>
        <div id="nav-container">
          <div class="nav">
            <div class="col flex">
              <div class="nav-logo"><img src="./images/zcclogo.png
              " alt="zccLogo"></div>
              <div class="nav-socials">
                <a href="https://www.instagram.com/zcc_webb">Instagram</a>
                <a href="https://wa.me/918003316534?text=Hello Sir !!,">WhatsApp</a>
              </div>
            </div>
            <div class="col">
              <div class="nav-link">
                <a href="./index.html">Home</a>
                <div class="nav-item-wrapper"></div>
              </div>
              <div class="nav-link">
                <a href="./about.html">Who we are</a>
                <div class="nav-item-wrapper"></div>
              </div>
              <div class="nav-link">
                <a href="./project.html">Works</a>
                <div class="nav-item-wrapper"></div>
              </div>
              <div class="nav-link">
                <a href="./plans.html">Plans</a>
                <div class="nav-item-wrapper"></div>
              </div>
              <div class="nav-link">
                <a href="./contact.html">Contact</a>
                <div class="nav-item-wrapper"></div>
              </div>
            </div>
          </div>
          <div class="nav-footer">
            <div class="links">
              <a href="#"></a>
            </div>
            <div class="contact">
              <a href="mailto:zenithcodecreations@gmail.com">zenithcodecreations@gmail.com</a>
            </div>
          </div>
        </div>
        `
     )
}

export default navbar;