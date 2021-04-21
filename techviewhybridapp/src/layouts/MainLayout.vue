<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          TechView - Portal de Tecnologia
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
        class="drawer"
        v-model="leftDrawerOpen"
        show-if-above
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
              to="/"
              active
              clickable 
              v-ripple>
                <q-item-section avatar>
                  <q-icon name="dashboard"></q-icon>
                </q-item-section>
                <q-item-section>
                  Dashboard
                </q-item-section>
            </q-item>
            

            <q-item 
              to="/news"
              clickable 
              v-ripple>
                <q-item-section avatar>
                  <q-icon name="star"></q-icon>
                </q-item-section>
                <q-item-section>
                  Notícias
                </q-item-section>
            </q-item>

            <q-item to="/videos" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="movie"></q-icon>
              </q-item-section>
              <q-item-section>
                Vídeos
              </q-item-section>
            </q-item>

            <hr>
            <q-item to="/notifications" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts"></q-icon>
              </q-item-section>
              <q-item-section>
                Notificações
              </q-item-section>
            </q-item>

            <hr>
            <q-item 
              to="/portal"
              target="_blank"
              clickable 
              v-ripple>
                <q-item-section avatar>
                  <q-icon name="photo_album"></q-icon>
                </q-item-section>
                <q-item-section>
                  Ir ao Website
                </q-item-section>
            </q-item>
            <hr>
            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="">
            </q-avatar>
            <div class="text-weight-bold">João Devson Mucavel</div>
            <div>@devasse</div>
          </div>
        </q-img>
      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',
  components: { },
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>

<style scoped>

</style>