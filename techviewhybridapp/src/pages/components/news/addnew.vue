<template>
  <q-page class="flex">
    <div class="q-pa-md doc-container">
      <div class="row items-start">
        <div class="col-sm-12">
          <span style="margin-left:15px"
            ><q-btn flat to="/news">Notícias</q-btn> / Adicionar nova
            Notícia</span
          >
        </div>
      </div>

      <div>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            square
            outlined
            v-model="title"
            label="Título *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo obrigatório']"
          />

          <q-input
            square
            outlined
            v-model="excerpt"
            label="Excerto *"
            lazy-rules
            type="textarea"
            :rules="[val => (val && val.length > 0) || 'Campo obrigatório']"
          />

          <q-editor
            square
            outlined
            v-model="contenteditor"
            :dense="$q.screen.lt.md"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify']
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify']
                }
              ],
              [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript'
              ],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.lang.editor.formatting,
                  icon: $q.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
                },
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7'
                  ]
                },
                {
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'default_font',
                    'arial',
                    'arial_black',
                    'comic_sans',
                    'courier_new',
                    'impact',
                    'lucida_grande',
                    'times_new_roman',
                    'verdana'
                  ]
                },
                'removeFormat'
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

              ['undo', 'redo'],
              ['viewsource']
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana'
            }"
          />

          <div class="row" style="margin-top:30px">
            <div class="col-sm-3">
              <q-input square outlined type="date" v-model="age" lazy-rules />
            </div>
            <div class="col-sm-4" style="margin-left:30px">
              <q-input
                @input="val = ''"
                square
                outlined
                type="file"
              />
            </div>
            <div class="col-sm-4" style="margin-left:30px">
              <q-toggle v-model="publish" label="Publicar imediatamente" />
            </div>
          </div>
          <div>
            <q-btn label="Gravar" type="submit" color="primary" />
            <q-btn
              label="Limpar Campos"
              type="reset"
              color="warning"
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      title: null,
      excerpt: null,
      contenteditor: null,
      

      publish: false
    };
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
.q-editor
  width: 100%
</style>
