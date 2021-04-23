<template>
  <q-page class="flex">
    <div class="q-pa-md doc-container">
      <div class="row items-start">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-2">
              <span style="margin-left:15px">Notícias</span>
            </div>
            <div class="col-sm-9"></div>
            <div class="col-sm-1" style="text-align:right;margin-left:-35px">
              <q-btn
                to="/addnew"
                round
                dense
                color="primary"
                size="md"
                icon="add"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card" flat bordered>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section class="excerpt-content">
                <div class="text-overline text-orange-9">
                  Author: <span>João Devson Mucavel</span>
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">Título da notícia</div>
                <div class="text-caption">
                  Exceprt da notícia, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua...
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="Editar" />
                <q-btn flat color="primary" label="Previsualizar" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card" flat bordered>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section class="excerpt-content">
                <div class="text-overline text-orange-9">
                  Author: <span>Albert Mahumane</span>
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">Título da notícia</div>
                <div class="text-caption">
                  Exceprt da notícia, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua...
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="Editar" />
                <q-btn flat color="primary" label="Previsualizar" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card" flat bordered>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-section class="excerpt-content">
                <div class="text-overline text-orange-9">
                  Author: <span>João Devson Mucavel</span>
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">Título da notícia</div>
                <div class="text-caption">
                  Exceprt da notícia, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua...
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="Editar" />
                <q-btn flat color="primary" label="Previsualizar" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "News",
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
.row
  width: 100%
.row .excerpt-content
  background-color: rgba(142,142,142,.05)
.doc-container > div + div
  margin-top: 1rem
.text-overline
  line-height: 1.2
span
  font-style: italic
  color: #1976d2
</style>
