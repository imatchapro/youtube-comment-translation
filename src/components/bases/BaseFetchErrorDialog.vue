<template>
  <v-dialog v-model="error" persistent max-width="600">
    <v-alert prominent type="error" class="ma-0">
      <v-row align="center">
        <v-col class="grow">
          コメントの取得に失敗しました。<br />
          コメントが存在しないか、ネットワークが接続されていない可能性があります。
        </v-col>
        <v-col class="shrink">
          <v-btn @click="closeDialog">OK</v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </v-dialog>
</template>

<script>
export default {
  name: "BaseFetchErrorDialog",
  data: () => ({
    error: false
  }),
  mounted() {
    this.$nuxt.$on("EVENT_FETCH_ERROR", value => {
      this.error = value;
    });
  },
  methods: {
    closeDialog() {
      this.error = false;
    }
  }
};
</script>
