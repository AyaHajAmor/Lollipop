<template>
  <div id="app">
    <!-- <button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i>/button> -->
      <!-- ======= Header ======= -->
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

          <a  class="logo mr-auto"><img src="assets/img/logo.png" alt=""></a>
          <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li><a href="#about">{{ $t('nav.consult')}}</a></li>
                <li><a href="#services">{{ $t('nav.prog')}}</a></li>
                <li><a href="#services">{{ $t('nav.formartionPer')}}</a></li>
                <li><a href="#services">{{ $t('nav.formartionLigne')}}</a></li>
                <li><a href="#portfolio">{{ $t('nav.cours')}}</a></li>
                <li><a href="#team">{{ $t('nav.equip')}}</a></li>
                <li><a href="#activity">{{ $t('nav.activity')}}</a></li>
                <li><a href="#contact">{{ $t('nav.contact')}}</a></li>
                <li ><a href="index">{{ $t('nav.apropos')}}</a></li>
                <li class="dropdown  ">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-globe fa-lg mr-2 " aria-hidden="true"></i>Languages<span class="caret"></span></a>
                    <ul class="dropdown-menu" >
                      <li><a href="#"  data-toggle="dropdown" @click.prevent="setLocale('fr')">Francais</a></li>
                      <li><a href="#"  data-toggle="dropdown "  @click.prevent="setLocale('en')">Anglais</a></li>
                    </ul>
                </li>
              </ul>
            </nav><!-- .nav-menu -->

        </div>
      </header><!-- End Header -->
   
    <router-view/>
  </div>
</template>
<script>
export default ({
  data(){
    return{ langs :['en' , 'fr']}
  },
  methods:{
    setLocale(locale){
      this.$i18n.locale = locale
      this.$router.push({
        params: {lang:locale}
      })
    }

  }
})
</script>
