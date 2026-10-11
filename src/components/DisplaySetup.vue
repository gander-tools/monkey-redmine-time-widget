<template>
  <div class="wrapper">
    <input
        type="text"
        maxlength="40"
        placeholder="API Key"
        v-model.lazy.trim="api_key"
    />
    <div class="api-links">
      Where to find API key?
      [<a href="/my/account.xml" target="_blank">XML</a>]
      [<a href="/my/account.html" target="_blank">HTML</a>]
    </div>
    <select
        v-if="activityOptions.length"
        v-model="activity_ids"
        :size="Math.min(activityOptions.length, 8)"
        multiple
    >
      <option v-for="o in activityOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
    <input
        v-if="api_key.length && activityOptions.length"
        type="submit"
        value="Save"
        @click="save"
    />
  </div>
</template>

<script setup lang="ts">
import {useConfigStore, useDataStore} from '../stores';
import {onBeforeMount, watchEffect} from 'vue';
import {storeToRefs} from 'pinia';

const configStore = useConfigStore();
const {load, save} = configStore;
const {api_key, activity_ids} = storeToRefs(configStore);

const dataStore = useDataStore();
const {loadActivities} = dataStore;
const {activityOptions} = storeToRefs(dataStore);

onBeforeMount(async () => {
  await load();
});

watchEffect(async () => {
  if (api_key.value) {
    await loadActivities();
  }
});
</script>

<style scoped>
.wrapper {
  margin: 20px 0;
}
input[type=text], select {
  width: 100%;
  box-sizing: border-box;
}
.api-links {
  font-weight: bold;
}
</style>
