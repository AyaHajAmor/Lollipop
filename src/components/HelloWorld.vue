<template>
  <div >
    <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center mt-4">

    <div class="container">
      
      <div class="row fluid">
        <!-- <div class="col-lg-1 order-1 order-lg-1 float-none">
          <div class="icon-bar">
            <a href="https://www.facebook.com/lollipoptraining/" target="_blank" ><i class="fab fa-facebook-f"></i></a> 
            <a href="https://www.instagram.com/lollipop.training/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/LollipopUx" ><i class="fab fa-twitter" target="_blank"></i></a> 
            <a href="https://www.linkedin.com/company/lollipoptraining/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div> -->
        
        <div class="col-lg-5 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>{{ $t('title')}}</h1>
          <h2>{{ $t('fondation')}}</h2>
          <div><a href="#about" class="btn-get-started btn-lg btn scrollto">{{ $t('btn')}}</a></div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src="assets/img/hero-img.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>

  </section><!-- End Hero -->
  <section id="portfolio" class="portfolio mission text-center">
    <div class="container"><br>
        <h2 class="mis ">NOTRE MISSION</h2>
        <p class="col-md-10 offset-md-1 ">L’équipe de LOLLIPOP encadre et accompagne les entreprises et les staups, à travers la REGION MENA an de repenser le processus de conception de leurs produits avec un esprit créatif, des méthodes structurelles et des techniques innovantes. Notre objectif est de développer le nouveau processus pour s'adapter à chaque étape de création, et adapter le produit au besoin des utilisateurs et du marché.</p>
      </div>
  </section>
  <main id="main">
    <!-- ======= Gallery Section ======= -->
    <section id="gallery" class="gallery">
      <div class="container">

        <div class="section-title">
          <h2>NOS CONTRIBUTIONS</h2>
        </div>

        <div class="row no-gutters">
          <div class="col-lg-6 col-md-6 text-center mt-5">
            <h3 style="color:#0f394c">Plus +279 contributions...</h3>
          </div>
          <div class="col-lg-6 ">
           <img src="assets/img/1.png" alt="" width="450px" height="450px">
          </div>
        </div>

      </div>
    </section><!-- End Gallery Section -->
    
    <!-- ======= Services Section ======= -->
    <section id="activity" class="services section-bg " >
      <div class="container">

        <div class="section-title">
          <h2>Nos Activités</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 ">
            <div class="icon-box h-75">
              <div class="icon ml-4"><i class="fa fa-code" style="color: #ff7b29;"></i></div>
              <h4 class="title"><a href="">Formations</a></h4>
              <p class="description">Personnalisées: dédiées aux personnes </p>
              <p class="description">Personnalisées: dédiées pour les entreprises</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box h-75">
              <div class="icon ml-4"><i class="fas fa-laptop-code" style="color: #ff7b29;"></i></div>
              <h4 class="title"><a href="">Consulting</a></h4>
              <p class="description">Projets digitaux intégrants les nouvelles technologies</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 " data-wow-delay="0.1s">
            <div class="icon-box h-75">
              <div class="icon ml-4 "><i class="fas fa-briefcase" style="color: #ff7b29;"></i></div>
              <h4 class="title"><a href="">Coaching</a></h4>
              <p class="description">Des startups</p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
    
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <h2>UX DESIGN/ DESIGN THINKING WORKSHOPS</h2>

        </div>
        
        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-3 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-3 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-3 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-3 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-3 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-3 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox" title="App 3"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div class="section-title" style="color:rgb(54, 13, 121)">
          <h4 >Nouha JAAFAR</h4><br>
          <p class="text-center">Local UX Design thinking instructor for the UX MASTERCLASS by Google - 2018 till now</p>
          <p class="text-center">TOT Trainer - from December 2019</p>

        </div>

      </div>
    </section><!-- End Portfolio Section -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-4 d-flex justify-content-center  ">
            <dl>
              <dt>
                <img class=" mb-4 wid" src="assets/img/uxmasterclass.jpeg" />
              </dt>
              
              <dt>
                <img class=" mb-4 widt" src="assets/img/gdgcarthage.jpeg" alt="">
              </dt>
            </dl>
          <br>
          </div>

          <div class="col-xl-5 col-lg-4 icon-boxes d-flex  flex-column align-items-stretch justify-content-center py-5 px-lg-5 blo">
            
            <div class="icon-box">
              <div class="icon">30</div>
              <h4 class="title title-li"><a href="">SESSIONS</a></h4>
            </div>

            <div class="icon-box">
              <div class="icon">50</div>
              <h4 class="title title-li"><a href="">STARTUPS FORMÉES À TRAVERS LE RÉGIONS MENA</a></h4>
            </div>


          </div>
        </div>

      </div>
    </section><!-- End About Section -->
   


    
    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Equipe</h2>
        </div>

        <div class="row  justify-content-center" >        

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch mr-5">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Nouha JAAFAR</h4>
                <span>LOLLIPOP, training and consulting Equipe <br> Fondatrice LOLLIPOP UX Designer Experte Enseignante Experte & Formatrice UX Design Thinking</span>
              </div>
            </div>
          </div>
          <div class=" col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Nouha JAAFAR</h4>
                <span>.......................</span>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section><!-- End Team Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div>
          <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>Rue 13 Aout 1956, Bizerte</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>contact@lollipop.tn</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+216 56 164 636</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="col-md-6 form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->
   <!-- ======= Clients Section ======= -->
   <section id="clients" class="clients ">
    <div class="container fluid">

      <div class="row ">

        <div class="col-md-15 col-sm-3">
          <div class="client-logo">
            <img src="assets/img/clients/client-1.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-md-2 col-md-offset-1">
          <div class="client-logo">
            <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-md-2">
          <div class="client-logo">
            <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-md-2">
          <div class="client-logo">
            <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-md-2">
          <div class="client-logo">
            <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">
          </div>
        </div>

        

      </div>

    </div>
  </section><!-- End Clients Section -->  
  <!-- ======= Footer ======= -->
   <footer id="footer">

      <div class="footer-top">
        <div class="container footer text-center">
          <div class="row">
  
            <div class="col-lg-3 col-sm-3 footer-contact">
              <h4>Logo lollipop</h4>
            </div>
  
            <div class="col-lg-3 col-sm-3 footer-contact">
              <h4>Adresse : <br>
                4 Rue 13 aout 1956, Bizerte 7000</h4>
            </div>
  
            <div class="col-lg-3 col-sm-3 footer-contact">
              <h4>Mail : <br>
                lollipop.ux@gmail.com</h4>
            </div>
  
            <div class="col-lg-3 col-md-3 footer-contact">
              <h4>Téléphone : <br>
                50 989 789</h4>
            </div>
        </div>
        <div class="copyright text-center">
          &copy;Copyright <strong><span>Lollipop</span></strong>2020
        </div>
      </div>
      </div>
    </footer><!-- End Footer -->
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
