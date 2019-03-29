<template>
  <div class="blog mt-4">
    <div class="row">
      <div class="col-md-10 mx-auto bg-light p-4">
        <router-view/>
        <hr>
        <router-link to="/" tag="a" class="btn btn-warning">&laquo; Back</router-link>
      </div>
    </div>
  </div>
</template>
