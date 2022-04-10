
<template>
  <section class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="title text-uppercase"> Welcome </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 position">
          <div class="target">
            <router-link to="/user"> <img class="image" src="@/assets/images/options/user.png" alt="User View"> </router-link>
          </div>
        </div>
        <div class="col-6 position">
          <div class="target">
            <router-link to="/baker"> <img class="image" src="@/assets/images/options/baker.png" alt="Baker View"> </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

  /* STYLES */
  .position {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section.container-fluid {
    margin: 30px 0;
    padding: 20px;
  }

  div .container {
    width: 100%;
    padding: 30px;
  }

  div .row {
    padding: 20px;
  }

  div .col {
    padding: 20px;
  }

  div .col-6 {
    height: 330px;
    padding: 10px;
  }

  .title {
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 7rem;
    font-weight: bold;
    font-family: 'Inspiration', cursive;
  }

  .target {
    position: relative;
    width: 90%;
    border-radius: 10px;
    box-shadow: 3px 1px 15px rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.5);
  }

  .target:hover {
    width: 100%;
    box-shadow: 8px 3px 30px rgba(0, 0, 0, 0.8);
  }

  .image {
    width: 100%;
    border-radius: 10px;
    opacity: 70%;
    filter: brightness(30%);
  }

  .image:hover {
    opacity: 90%;
    filter: brightness(70%);
  }

  /* MEDIA QUERIES */
  @media (max-width: 575.98px) {
    .title {
      font-size: 3.5rem;
    }
    section.container-fluid {
      margin: 15px auto;
      padding: 50px 0;
    }
    div .container {
      padding: 0;
    }
    div .row {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    div .col {
      padding: 0;
    }
    div .col-6 {
      width: 100%;
      margin: 0 auto;
      height: 370px;
      padding: 10px;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .title {
      font-size: 5.5rem;
    }
    section.container-fluid {
      margin: 15px 0;
    }
    div .container {
      padding: 0;
    }
    div .row {
      padding: 0;
    }
    div .col {
      padding: 0;
    }
    div .col-6 {
      width: 100%;
      height: 370px;
      padding: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .title {
      padding: 30px 0;
    }
    section.container-fluid {
      margin: 30px 0;
    }
    div .container {
      padding: 20px;
    }
    div .row {
      padding: 0;
    }
    div .col {
      padding: 0;
    }
    div .col-6 {
      width: 100%;
      height: 470px;
      padding: 0;
    }
  }

</style>
