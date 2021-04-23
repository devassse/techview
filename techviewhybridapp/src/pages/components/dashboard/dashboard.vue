<template>
  <q-page class="flex">
    <div class="q-pa-md doc-container">
      <div class="row items-start">
        <div class="col-sm-12">
          <span style="margin-left:15px">Dashboard</span>
        </div>
        <div class="col-sm-8">
          <div class="q-pa-md">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
              </q-card-section>

              <q-markup-table>
                <thead>
                  <tr>
                    <th id="" class="text-left">Dessert (100g serving)</th>
                    <th id="" class="text-right">Calories</th>
                    <th id="" class="text-right">Fat (g)</th>
                    <th id="" class="text-right">Carbs (g)</th>
                    <th id="" class="text-right">Protein (g)</th>
                    <th id="" class="text-right">Sodium (mg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">Frozen Yogurt</td>
                    <td class="text-right">159</td>
                    <td class="text-right">6</td>
                    <td class="text-right">24</td>
                    <td class="text-right">4</td>
                    <td class="text-right">87</td>
                  </tr>
                  <tr>
                    <td class="text-left">Ice cream sandwich</td>
                    <td class="text-right">237</td>
                    <td class="text-right">9</td>
                    <td class="text-right">37</td>
                    <td class="text-right">4.3</td>
                    <td class="text-right">129</td>
                  </tr>
                  <tr>
                    <td class="text-left">Eclair</td>
                    <td class="text-right">262</td>
                    <td class="text-right">16</td>
                    <td class="text-right">23</td>
                    <td class="text-right">6</td>
                    <td class="text-right">337</td>
                  </tr>
                  <tr>
                    <td class="text-left">Cupcake</td>
                    <td class="text-right">305</td>
                    <td class="text-right">3.7</td>
                    <td class="text-right">67</td>
                    <td class="text-right">4.3</td>
                    <td class="text-right">413</td>
                  </tr>
                  <tr>
                    <td class="text-left">Gingerbread</td>
                    <td class="text-right">356</td>
                    <td class="text-right">16</td>
                    <td class="text-right">49</td>
                    <td class="text-right">3.9</td>
                    <td class="text-right">327</td>
                  </tr>
                </tbody>
              </q-markup-table>
            </q-card>
          </div>
        </div>

        <div class="col-sm-4">
            <q-circular-progress
              :value="value"
              size="350px"
              :thickness="0.6"
              color="orange"
              center-color="grey-8"
              class="q-ma-md"
            />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      value: 71
    };
  }
};
</script>

<style lang="sass" scoped>
span
  font-style: italic
  color: #1976d2
</style>
