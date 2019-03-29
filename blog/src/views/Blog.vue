<template>
  <div class="blog">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <router-view/>
        <router-link to="/" tag="a" class="btn btn-warning">&laquo; Back</router-link>
      </div>
    </div>
  </div>
</template>
